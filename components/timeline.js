import { Box, Flex, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";

const MotionBox = motion(Box);

export const TimelineItem = ({ year, title, description, subtitle, isRight }) => {
    // Llamar a useColorModeValue fuera de cualquier condición
    const yearColor = useColorModeValue("blue.500", "blue.300");
    const titleColor = useColorModeValue("purple.700", "purple.300");
    const bgColor = useColorModeValue('gray.100', 'gray.700');
    const borderColor = useColorModeValue('gray.100', 'gray.700');
    const textColor = useColorModeValue("gray.700", "gray.300");
  
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Flex
          direction={isRight ? "row-reverse" : "row"}
          align="center"
          justify="space-between"
          mb={12}
          w="full"
        >
          <MotionBox
            as={FaCircle}
            size="12px"
            color={yearColor}
            mr={isRight ? 0 : 10}
            ml={isRight ? 10 : 0}
            whileHover={{ scale: 1.5 }}
            transition="0.3s"
          />
          <Box
            bg={bgColor}
            p={6}
            borderRadius="lg"
            boxShadow="xl"
            maxWidth="70%" // Ajuste para evitar que ocupe demasiado espacio
            textAlign={isRight ? "right" : "left"}
            position="relative"
            _before={{
              content: "''",
              position: "absolute",
              top: "50%",
              left: isRight ? "auto" : "-8px",
              right: isRight ? "-8px" : "auto",
              transform: "translateY(-50%)",
              borderWidth: "8px",
              borderStyle: "solid",
              borderColor: isRight ? `transparent transparent transparent ${borderColor}` : `transparent ${borderColor} transparent transparent`,
            }}
          >
            <Text fontSize="lg" fontWeight="bold" color={yearColor} mb={2}>
              {year}
            </Text>
            <Text fontSize="md" fontWeight="semibold" color={titleColor} mb={2} letterSpacing="wide">
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
  return (
    <VStack align="center" p={8} position="relative">
      <Box position="absolute" top={0} left="50%" h="100%" w="2px" bg="blue.500" zIndex={-1} />
      <Text fontSize="2xl" fontWeight="bold" mb={8} color="purple.700">
        Mi Experiencia Laboral
      </Text>

      <TimelineItem
        year="NOVIEMBRE 2023 - ACTUAL"
        title="DESARROLLADOR WEB"
        subtitle="42A CORPORATIVO"
        description="Implemento módulos en el sistema interno llamado NUUP usando tecnologías como Node.js, Sequelize, MySQL, Docker."
        isRight={false}
      />
      <TimelineItem
        year="FEBRERO 2023 - AGOSTO 2023"
        title="LÍDER DE DESARROLLO"
        subtitle="DELMER"
        description="Lideré el desarrollo de apps móviles nativas con Kotlin, Flutter y despliegues en Google Play Store, uso de Google Maps, Geolocation y librerias Nativas, DB(FIREBASE)"
        isRight={true}
      />
      <TimelineItem
        year="MARZO 2022 - MARZO 2023"
        title="SOFTWARE DEVELOPER"
        subtitle="SUD SOLUTIONS"
        description="Desarrollo backend con Node.js, Express, y aplicaciones móviles híbridas con Flutter. Desarrollo backend usando NodeJS, Express, PostgreSQL, MySQL, TypeScript, TypeORM entre otras, tambien implemento tecnologias de Desarrollo Mobile Hibrido con Dart & Flutter con gestiones de Estados usando PROVIDER & GETX.
            Push Notifications usando Firebase messaging con app cerrada, app abierta y app en segundo plano.
            Manejo de google maps, directions API, Geolocator, Polylines y Routes "
        isRight={false}
      />
      <TimelineItem
        year="AGOSTO 2022 - OCTUBRE 2022"
        title="DESARROLLADOR"
        subtitle="COTEMAR"
        description="Frontend Developer con Vue.js y Javascript Vanilla."
        isRight={true}
      />
      <TimelineItem
        year="JUNIO 2021 - SEPTIEMBRE 2023"
        title="INGENIERO DE SOPORTE TI"
        subtitle="IRIUM"
        description="Mantenimiento de servidores y soporte TI usando Linux."
        isRight={false}
      />
      <TimelineItem
        year="OCTUBRE 2020 - DICIEMBRE 2020"
        title="SOFTWARE DEVELOPER ENGINEER"
        subtitle="TUPROP"
        description="Desarrollo Frontend con ReactJS."
        isRight={true}
      />
    </VStack>
  );
};
