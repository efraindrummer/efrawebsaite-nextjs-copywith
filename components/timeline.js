import { Box, Flex, Text, VStack, Image, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";

const MotionBox = motion(Box);

// Configuración centralizada de colores
const colors = {
  year: { light: "blue.500", dark: "blue.300" },
  title: { light: "purple.700", dark: "purple.300" },
  bg: { light: "whiteAlpha.900", dark: "gray.800" },
  border: { light: "gray.200", dark: "gray.600" },
  text: { light: "gray.700", dark: "gray.300" },
  timelineLine: { light: "blue.300", dark: "blue.500" },
};

export const TimelineItem = ({ year, title, description, subtitle, isRight, logo }) => {
  const yearColor = useColorModeValue(colors.year.light, colors.year.dark);
  const titleColor = useColorModeValue(colors.title.light, colors.title.dark);
  const bgColor = useColorModeValue(colors.bg.light, colors.bg.dark);
  const borderColor = useColorModeValue(colors.border.light, colors.border.dark);
  const textColor = useColorModeValue(colors.text.light, colors.text.dark);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Flex
        direction={{ base: "column", md: isRight ? "row-reverse" : "row" }}
        align="center"
        justify="space-between"
        mb={12}
        w="full"
      >
        {/* Logo */}
        {logo && (
          <Box
            p={2}
            bg="white"
            borderRadius="full"
            boxShadow="md"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={logo}
              boxSize={{ base: "50px", md: "70px" }}
              borderRadius="full"
              alt="Company Logo"
            />
          </Box>
        )}

        {/* Caja de contenido */}
        <Box
          bg={bgColor}
          p={6}
          borderRadius="xl"
          boxShadow="xl"
          borderWidth={2}
          borderColor={borderColor}
          maxWidth={{ base: "90%", md: "70%" }}
          textAlign={{ base: "center", md: isRight ? "right" : "left" }}
          position="relative"
        >
          <Flex align="center" mb={2} justify={{ base: "center", md: isRight ? "flex-end" : "flex-start" }}>
            <MotionBox
              as={FaCircle}
              size="12px"
              color={yearColor}
              mr={isRight ? 0 : 4}
              ml={isRight ? 4 : 0}
              whileHover={{ scale: 1.5 }}
              transition="0.3s"
            />
            <Text fontSize="lg" fontWeight="bold" color={yearColor}>
              {year}
            </Text>
          </Flex>
          <Text fontSize="xl" fontWeight="bold" color={titleColor} mb={2}>
            {title}
          </Text>
          {subtitle && (
            <Text fontSize="md" fontStyle="italic" color={textColor} mb={4}>
              {subtitle}
            </Text>
          )}
          <Text fontSize="sm" color={textColor}>
            {description}
          </Text>
        </Box>
      </Flex>
    </motion.div>
  );
};

export const Timeline = () => {
  const timelineLineColor = useColorModeValue(colors.timelineLine.light, colors.timelineLine.dark);

  return (
    <VStack align="center" p={8} position="relative" spacing={8} w="full">
      {/* Línea central animada */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: "4px",
          height: "100%",
          background: `linear-gradient(to bottom, ${timelineLineColor}, ${colors.year.light})`,
          zIndex: -1,
          transform: "translateX(-50%)",
        }}
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1.5 }}
      />

      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb={8} color="purple.700" textAlign="center">
        Mi Experiencia Laboral
      </Text>

      {/* Elementos del timeline */}
      {timelineData.map((item, index) => (
        <TimelineItem key={index} {...item} isRight={index % 2 === 0} />
      ))}
    </VStack>
  );
};

const timelineData = [
  {
    year: "NOVIEMBRE 2024 - ACTUAL",
    title: "DESARROLLADOR DE SOFTWARE",
    subtitle: "DRAGADOS OFFSHORE MEXICO",
    description: "VB6, VB.NET, SQL Server.",
    logo: "/images/logos/dragados_offshore_logo.jpg",
  },
  {
    year: "NOVIEMBRE 2023 - NOVIEMBRE 2024",
    title: "DESARROLLADOR WEB",
    subtitle: "42A CORPORATIVO",
    description:
      "Implemento módulos en el sistema interno llamado NUUP usando tecnologías como Node.js, Sequelize, MySQL, Docker.",
    logo: "/images/logos/42A.png",
  },
  {
    year: "FEBRERO 2023 - AGOSTO 2023",
    title: "LÍDER DE DESARROLLO",
    subtitle: "DELMER",
    description:
      "Lideré el desarrollo de apps móviles nativas con Kotlin, Flutter y despliegues en Google Play Store, uso de Google Maps, Geolocation y librerías Nativas, DB(FIREBASE).",
    logo: "/images/logos/delmer.jpg",
  },
  {
    year: "MARZO 2022 - MARZO 2023",
    title: "SOFTWARE DEVELOPER",
    subtitle: "SUD SOLUTIONS",
    description:
      "Desarrollo backend con Node.js, Express, y aplicaciones móviles híbridas con Flutter. Desarrollo backend usando NodeJS, Express, PostgreSQL, MySQL, TypeScript, TypeORM, y tecnologías de desarrollo mobile híbrido con Dart & Flutter.",
    logo: "/images/logos/sudsolutions.png",
  },
  {
    year: "AGOSTO 2022 - OCTUBRE 2022",
    title: "DESARROLLADOR",
    subtitle: "COTEMAR",
    description: "Frontend Developer con Vue.js y JavaScript Vanilla.",
    logo: "/images/logos/cotemar.jpg",
  },
  {
    year: "JUNIO 2021 - SEPTIEMBRE 2023",
    title: "INGENIERO DE SOPORTE TI",
    subtitle: "IRIUM",
    description: "Mantenimiento de servidores y soporte TI usando Linux.",
    logo: "/images/logos/irium.jpg",
  },
  {
    year: "OCTUBRE 2020 - DICIEMBRE 2020",
    title: "SOFTWARE DEVELOPER ENGINEER",
    subtitle: "TUPROP",
    description: "Desarrollo Frontend con ReactJS.",
    logo: "/images/logos/tuprop_logo.jpg",
  },
];
