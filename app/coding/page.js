'use client'

import { useState, useEffect } from 'react'
import {
  Box,
  Heading,
  Container,
  ButtonGroup,
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  IconButton,
  useColorMode,
} from '@chakra-ui/react'
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons'
import dynamic from 'next/dynamic'

const SyntaxHighlighter = dynamic(
  () =>
    import('react-syntax-highlighter').then(mod => mod.Prism),
  { ssr: false }
)

const codeExamples = {
  upload: `
static async uploading_masive_files(req, res) {
  console.log("uploading_masive_files...");
  console.log("Request body:", req.body);

  try {
    const periodoId = req.body.period_id;

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ error: "No se ha subido ningún archivo" });
    }

    const period = await Payroll_Period.findOne({
      where: { payroll_period_id: periodoId },
    });

    if (!period) {
      return res.status(400).json({ error: "Periodo no encontrado" });
    }

    const periodName = period.payroll_period_name;
    const extractionPath = path.join(
      process.cwd(),
      "public",
      "receipment_nominas",
      periodName
    );
    const uploadedFiles = [];
    const discardedFiles = [];
    const userFileDetails = {};

    const uploadedFile = req.files.file;
    const fileType = path.extname(uploadedFile.name).toLowerCase();

    if (!fs.existsSync(extractionPath)) {
      fs.mkdirSync(extractionPath, { recursive: true });
    }

    const handleFile = async (fileData, fileName) => {
      const parts = fileName.split("_");
      const rfc = parts[1];

      const collaborator = await Collaborator.findOne({
        where: {
          [Sequelize.Op.or]: [
            { collaborator_rfc: rfc },
          ],
        },
      });

      if (collaborator) {
        const userId = collaborator.user_id;
        const tempFilePath = path.join(extractionPath, fileName);

        if (!uploadedFiles.some(file => file.fileName === fileName)) {
          if (fileData instanceof Readable) {
            await new Promise((resolve, reject) => {
              fileData
                .pipe(fs.createWriteStream(tempFilePath))
                .on("finish", resolve)
                .on("error", reject);
            });
          } else {
            fs.writeFileSync(tempFilePath, fileData);
          }

          uploadedFiles.push({ userId, fileName, tempFilePath });
          userFileDetails[fileName] = { userId, fileName, tempFilePath };
        }
      } else {
        discardedFiles.push(fileName);
      }
    };

    if (fileType === ".zip") {
      const fileStream = new Readable();
      fileStream.push(uploadedFile.data);
      fileStream.push(null);

      const zipStream = fileStream.pipe(unzipper.Parse());
      const promises = [];

      zipStream.on("entry", (entry) => {
        const fileName = entry.path;
        promises.push(handleFile(entry, fileName));
      });

      zipStream.on("close", async () => {
        await Promise.all(promises);
        res.status(200).json({
          archivos_subidos: uploadedFiles,
          archivos_descartados: discardedFiles,
          userFileDetails,
        });
      });
    } else if (fileType === ".pdf" || fileType === ".xml") {
      await handleFile(uploadedFile.data, uploadedFile.name);
      res.status(200).json({
        archivos_subidos: uploadedFiles,
        archivos_descartados: discardedFiles,
        userFileDetails,
      });
    } else {
      return res
        .status(400)
        .json({ error: "Tipo de archivo no soportado." });
    }
  } catch (error) {
    console.error("Error al procesar el archivo:", error);
    res.status(500).json({ error: "Ocurrió un error al procesar el archivo" });
  }
}`,
  insert: `
static async insert_files(req, res) {
  console.log("Inserting files...");
  try {
    const filesToInsert = req.body.files;

    if (!filesToInsert || filesToInsert.length === 0) {
      return res.status(400).json({ error: "No hay archivos para insertar" });
    }

    const directoryPromises = [];

    for (const file of filesToInsert) {
      const { fileName, userId, periodId, tempFilePath } = file;

      if (!periodId) {
        return res
          .status(400)
          .json({ error: "Periodo no definido para la inserción" });
      }

      if (!tempFilePath) {
        console.error("tempFilePath no definido para:", fileName);
        continue;
      }

      const existingFile = await Payroll_Invoice_File.findOne({
        where: {
          payroll_invoice_file_name: fileName,
          user_id: userId,
          payroll_period_id: periodId,
        },
      });

      if (existingFile) {
        console.log("Archivo ya existe:", fileName);
        continue;
      }

      const relativePath = path.relative(process.cwd(), tempFilePath);
      const savePromise = await Payroll_Invoice_File.create({
        payroll_invoice_file_name: fileName,
        payroll_invoice_file_path: relativePath,
        payroll_invoice_file_date: new Date().toISOString(),
        payroll_invoice_file_status: "A",
        user_id: userId,
        payroll_period_id: periodId,
      });

      directoryPromises.push(savePromise);
    }

    await Promise.all(directoryPromises);
    res.status(200).json({ message: "Archivos insertados correctamente" });
  } catch (error) {
    console.error("Error al insertar los archivos:", error);
    res.status(500).json({ error: "Ocurrió un error al insertar los archivos" });
  }
}`,
}

const CodeDisplay = ({ code }) => {
  const { colorMode } = useColorMode()
  const [zoomLevel, setZoomLevel] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [highlightedLines, setHighlightedLines] = useState([])
  const [themes, setThemes] = useState(null)

  useEffect(() => {
    import('react-syntax-highlighter/dist/cjs/styles/prism').then(mod => {
      setThemes({ dark: mod.vscDarkPlus, light: mod.vs })
    })
  }, [])

  useEffect(() => {
    if (!searchTerm) {
      setHighlightedLines([])
      return
    }
    const lines = code.split('\n')
    const matches = lines
      .map((line, i) =>
        line.toLowerCase().includes(searchTerm.toLowerCase()) ? i + 1 : null
      )
      .filter(Boolean)
    setHighlightedLines(matches)
  }, [searchTerm, code])

  const lineStyle = lineNumber => ({
    backgroundColor: highlightedLines.includes(lineNumber)
      ? 'rgba(255, 255, 0, 0.2)'
      : 'transparent',
    display: 'block',
    width: '100%',
  })

  if (!themes) return null

  const theme = colorMode === 'dark' ? themes.dark : themes.light

  return (
    <Box position="relative">
      <Flex gap={2} mb={4} wrap="wrap">
        <Input
          placeholder="Buscar en código..."
          width="200px"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <ButtonGroup isAttached>
          <IconButton
            icon={<ChevronUpIcon />}
            onClick={() => setZoomLevel(zoomLevel + 0.1)}
            aria-label="Zoom in"
          />
          <IconButton
            icon={<ChevronDownIcon />}
            onClick={() => setZoomLevel(Math.max(0.5, zoomLevel - 0.1))}
            aria-label="Zoom out"
          />
        </ButtonGroup>
      </Flex>

      <Box
        style={{
          transform: `scale(${zoomLevel})`,
          transformOrigin: 'top left',
          width: `${100 / zoomLevel}%`,
        }}
        borderRadius="2xl"
        overflow="hidden"
      >
        <SyntaxHighlighter
          language="javascript"
          style={theme}
          showLineNumbers
          customStyle={{
            margin: 0,
            fontSize: '14px',
            lineHeight: '1.5',
            padding: '20px',
            backgroundColor: colorMode === 'dark' ? '#1E1E1E' : '#f5f5f5',
            borderRadius: '16px',
          }}
          lineNumberStyle={{
            color: colorMode === 'dark' ? '#858585' : '#b3b3b3',
            marginRight: '15px',
          }}
          wrapLines={true}
          lineProps={lineNumber => ({
            style: lineStyle(lineNumber),
          })}
        >
          {code}
        </SyntaxHighlighter>
      </Box>
    </Box>
  )
}

export default function Coding() {
  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" size="2xl" mb={8}>
        Ejemplos de Código
      </Heading>

      <Tabs variant="enclosed-colored">
        <TabList mb={4}>
          {Object.keys(codeExamples).map(key => (
            <Tab key={key}>{key}.js</Tab>
          ))}
        </TabList>

        <TabPanels>
          {Object.values(codeExamples).map((code, index) => (
            <TabPanel key={index} p={0}>
              <CodeDisplay code={code} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Container>
  )
}
