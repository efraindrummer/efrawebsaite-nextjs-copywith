import { useState, useEffect } from 'react';
import { 
  Box, Heading, Container, Select, ButtonGroup, 
  Input, Tabs, TabList, TabPanels, Tab, TabPanel,
    Flex, IconButton, useColorMode
} from '@chakra-ui/react';
import {  SearchIcon, ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeDisplay = ({ code }) => {
  const { colorMode } = useColorMode();
  const [theme, setTheme] = useState(colorMode === 'dark' ? vscDarkPlus : vs);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedLines, setHighlightedLines] = useState([]);

  // Función para resaltar coincidencias de búsqueda
  useEffect(() => {
    if (!searchTerm) {
      setHighlightedLines([]);
      return;
    }

    const lines = code.split('\n');
    const matches = lines
      .map((line, i) => (line.toLowerCase().includes(searchTerm.toLowerCase()) ? i + 1 : null))
      .filter(Boolean);

    setHighlightedLines(matches);
  }, [searchTerm, code]);

  // Estilo personalizado para líneas resaltadas
  const lineStyle = (lineNumber) => ({
    backgroundColor: highlightedLines.includes(lineNumber) ? 'rgba(255, 255, 0, 0.2)' : 'transparent',
    display: 'block',
    width: '100%'
  });

  return (
    <Box position="relative">
      {/* Barra de herramientas */}
      <Flex gap={2} mb={4} wrap="wrap">
        <Select
          width="180px"
          value={colorMode}
          onChange={(e) => setTheme(e.target.value === 'dark' ? vscDarkPlus : vs)}
        >
          <option value="dark">Tema Oscuro</option>
          <option value="light">Tema Claro</option>
        </Select>

        <Input
          placeholder="Buscar en código..."
          width="200px"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          leftIcon={<SearchIcon color="gray.400" />}
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

      {/* Visualización del código con zoom */}
      <Box 
        style={{ 
          transform: `scale(${zoomLevel})`, 
          transformOrigin: 'top left',
          width: `${100/zoomLevel}%`
        }}
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
            backgroundColor: colorMode === 'dark' ? '#1E1E1E' : '#f5f5f5'
          }}
          lineNumberStyle={{
            color: colorMode === 'dark' ? '#858585' : '#b3b3b3',
            marginRight: '15px'
          }}
          wrapLines={true}
          lineProps={(lineNumber) => ({
            style: lineStyle(lineNumber)
          })}
        >
          {code}
        </SyntaxHighlighter>
      </Box>
    </Box>
  );
};

// Componente principal
const Coding = () => {
  const codeExamples = {
    upload:`
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
      
          console.log(\`Procesando archivo: \${fileName}\`);
          console.log(\`RFC extraído: \${rfc},\`);
      
          const collaborator = await Collaborator.findOne({
            where: {
              [Sequelize.Op.or]: [
                { collaborator_rfc: rfc },
              ],
            },
          });
      
          if (collaborator) {
            console.log(
              \`Colaborador encontrado: \${collaborator.collaborator_name} \${collaborator.collaborator_last_name_p}\`
            );
            const userId = collaborator.user_id;
            const tempFilePath = path.join(extractionPath, fileName);
      
            console.log(\`file temporal: \${tempFilePath}\`)
      
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
      
              uploadedFiles.push({ userId, userName: \`\${collaborator.collaborator_name} \${collaborator.collaborator_last_name_p}\`, fileName, tempFilePath });
              userFileDetails[fileName] = { userId, userName: \`\${collaborator.collaborator_name} \${collaborator.collaborator_last_name_p}\`, fileName, tempFilePath };
      
              console.log(\`Archivo procesado y agregado: \${fileName}\`);
            } else {
              console.log(\`Archivo duplicado ignorado: \${fileName}\`);
            }
          } else {
            console.log(\`No se encontró colaborador con RFC: \${rfc}\`);
            discardedFiles.push(fileName);
          }
        };
        
        if (fileType === ".zip") {
          console.log('entramos a la condición del zip');
          const fileStream = new Readable();
          fileStream.push(uploadedFile.data);
          fileStream.push(null);
      
          const zipStream = fileStream.pipe(unzipper.Parse());
          const promises = [];
      
          zipStream.on("entry", (entry) => {
            const fileName = entry.path;
            promises.push(handleFile(entry, fileName).then(() => entry.autodrain()));
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
            .json({ error: "Tipo de archivo no soportado. Por favor sube un archivo ZIP, PDF o XML." });
        }
        
      } catch (error) {
        console.error("Error al procesar el archivo:", error);
        res.status(500).json({ error: "Ocurrió un error al procesar el archivo" });
      }
    }
    
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
            console.error(
              \`tempFilePath no definido para el archivo: \${fileName}\`
            );
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
            console.log(
              \`El archivo \${fileName} ya existe para el usuario \${userId} en el periodo \${periodId}.\`
            );
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
    
          console.log(savePromise);
    
          directoryPromises.push(savePromise);
        }
    
        await Promise.all(directoryPromises);
        res.status(200).json({ message: "Archivos insertados correctamente" });
      } catch (error) {
        console.error("Error al insertar los archivos:", error);
        res
          .status(500)
          .json({ error: "Ocurrió un error al insertar los archivos" });
      }
    }
    `,
    insert: `
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
  
      console.log(\`Procesando archivo: \${fileName}\`);
      console.log(\`RFC extraído: \${rfc},\`);
  
      const collaborator = await Collaborator.findOne({
        where: {
          [Sequelize.Op.or]: [
            { collaborator_rfc: rfc },
          ],
        },
      });
  
      if (collaborator) {
        console.log(
          \`Colaborador encontrado: \${collaborator.collaborator_name} \${collaborator.collaborator_last_name_p}\`
        );
        const userId = collaborator.user_id;
        const tempFilePath = path.join(extractionPath, fileName);
  
        console.log(\`file temporal: \${tempFilePath}\`)
  
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
  
          uploadedFiles.push({ userId, userName: \`\${collaborator.collaborator_name} \${collaborator.collaborator_last_name_p}\`, fileName, tempFilePath });
          userFileDetails[fileName] = { userId, userName: \`\${collaborator.collaborator_name} \${collaborator.collaborator_last_name_p}\`, fileName, tempFilePath };
  
          console.log(\`Archivo procesado y agregado: \${fileName}\`);
        } else {
          console.log(\`Archivo duplicado ignorado: \${fileName}\`);
        }
      } else {
        console.log(\`No se encontró colaborador con RFC: \${rfc}\`);
        discardedFiles.push(fileName);
      }
    };
    
    if (fileType === ".zip") {
      console.log('entramos a la condición del zip');
      const fileStream = new Readable();
      fileStream.push(uploadedFile.data);
      fileStream.push(null);
  
      const zipStream = fileStream.pipe(unzipper.Parse());
      const promises = [];
  
      zipStream.on("entry", (entry) => {
        const fileName = entry.path;
        promises.push(handleFile(entry, fileName).then(() => entry.autodrain()));
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
        .json({ error: "Tipo de archivo no soportado. Por favor sube un archivo ZIP, PDF o XML." });
    }
    
  } catch (error) {
    console.error("Error al procesar el archivo:", error);
    res.status(500).json({ error: "Ocurrió un error al procesar el archivo" });
  }
}

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
        console.error(
          \`tempFilePath no definido para el archivo: \${fileName}\`
        );
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
        console.log(
          \`El archivo \${fileName} ya existe para el usuario \${userId} en el periodo \${periodId}.\`
        );
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

      console.log(savePromise);

      directoryPromises.push(savePromise);
    }

    await Promise.all(directoryPromises);
    res.status(200).json({ message: "Archivos insertados correctamente" });
  } catch (error) {
    console.error("Error al insertar los archivos:", error);
    res
      .status(500)
      .json({ error: "Ocurrió un error al insertar los archivos" });
  }
}
`
  };

  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" size="2xl" mb={8}>
        Ejemplos de Código
      </Heading>

      <Tabs variant="enclosed-colored">
        <TabList mb={4}>
          {Object.keys(codeExamples).map((key) => (
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
  );
};

export default Coding;