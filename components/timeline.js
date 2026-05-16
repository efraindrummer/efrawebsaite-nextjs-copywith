'use client'

import { Box, Flex, Text, Image, useColorModeValue } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box);

const TECH_KEYWORDS = [
  'VB6', 'VB.NET', 'SQL Server', 'Node.js', 'Sequelize', 'MySQL',
  'Docker', 'Kotlin', 'Flutter', 'Firebase', 'Express', 'PostgreSQL',
  'TypeScript', 'TypeORM', 'Dart', 'Vue.js', 'JavaScript', 'Linux', 'ReactJS',
];

const extractTechs = (text) => TECH_KEYWORDS.filter(t => text.includes(t));
const isCurrent = (year) => year.toUpperCase().includes('ACTUAL');

const TimelineEntry = ({ year, title, subtitle, description, logo, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const current = isCurrent(year);

  const dotBg = useColorModeValue("#111111", "#ffffff");
  const dateColor = useColorModeValue("gray.400", "gray.500");
  const titleColor = useColorModeValue("gray.900", "white");
  const subtitleColor = useColorModeValue("gray.500", "gray.400");
  const tagBg = useColorModeValue("gray.100", "gray.800");
  const tagColor = useColorModeValue("gray.700", "gray.300");
  const logoBorder = useColorModeValue("gray.150", "gray.750");

  const techs = extractTechs(description);

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, x: -14 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
      position="relative"
      pl={7}
      pb={current ? 0 : 10}
    >
      {/* Dot */}
      <Box
        position="absolute"
        left="-5px"
        top="3px"
        w="10px"
        h="10px"
        borderRadius="full"
        bg={current ? "#22c55e" : dotBg}
        zIndex={1}
        boxShadow={current ? "0 0 0 4px rgba(34,197,94,0.12)" : "none"}
      />

      <Flex align="flex-start" justify="space-between" gap={5}>
        <Box flex={1} minW={0}>
          {/* Date row */}
          <Flex align="center" gap={2} mb={1.5}>
            <Text
              fontFamily="mono"
              fontSize="10px"
              color={dateColor}
              fontWeight="600"
              letterSpacing="0.09em"
              textTransform="uppercase"
            >
              {year.replace(' - ACTUAL', '')}
            </Text>
            {current && (
              <Box
                fontSize="9px"
                fontFamily="mono"
                fontWeight="700"
                color="#22c55e"
                bg="rgba(34,197,94,0.08)"
                px="6px"
                py="2px"
                borderRadius="3px"
                letterSpacing="0.06em"
              >
                ACTUAL
              </Box>
            )}
          </Flex>

          {/* Title */}
          <Text
            fontSize={{ base: "15px", md: "16px" }}
            fontWeight="700"
            color={titleColor}
            letterSpacing="-0.025em"
            lineHeight="1.25"
            mb="2px"
          >
            {title}
          </Text>

          {/* Subtitle */}
          <Text
            fontSize="13px"
            color={subtitleColor}
            fontWeight="500"
            mb={techs.length > 0 ? 3 : 0}
          >
            {subtitle}
          </Text>

          {/* Tech tags */}
          {techs.length > 0 && (
            <Flex flexWrap="wrap" gap="5px">
              {techs.map(tech => (
                <Box
                  key={tech}
                  fontFamily="mono"
                  fontSize="10px"
                  color={tagColor}
                  bg={tagBg}
                  px="7px"
                  py="3px"
                  borderRadius="4px"
                  fontWeight="500"
                  lineHeight="1.5"
                >
                  {tech}
                </Box>
              ))}
            </Flex>
          )}
        </Box>

        {/* Logo */}
        {logo && (
          <Box flexShrink={0} mt="1px">
            <Image
              src={logo}
              alt={subtitle}
              boxSize={{ base: "34px", md: "40px" }}
              borderRadius="8px"
              objectFit="cover"
              border="1px solid"
              borderColor={logoBorder}
              opacity={0.75}
            />
          </Box>
        )}
      </Flex>
    </MotionBox>
  );
};

export const Timeline = () => {
  const lineColor = useColorModeValue("gray.200", "gray.800");
  const headingColor = useColorModeValue("gray.900", "white");
  const labelColor = useColorModeValue("gray.400", "gray.600");

  return (
    <Box w="full">
      <Flex align="baseline" justify="space-between" mb={10}>
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="700"
          color={headingColor}
          letterSpacing="-0.03em"
        >
          Experiencia Laboral
        </Text>
        <Text fontFamily="mono" fontSize="11px" color={labelColor}>
          {timelineData.length} posiciones
        </Text>
      </Flex>

      <Box
        position="relative"
        pl={5}
        borderLeft="1px solid"
        borderColor={lineColor}
      >
        {timelineData.map((item, index) => (
          <TimelineEntry key={index} {...item} index={index} />
        ))}
      </Box>
    </Box>
  );
};

const timelineData = [
  {
    year: "NOVIEMBRE 2024 - ACTUAL",
    title: "Desarrollador de Software",
    subtitle: "Dragados Offshore Mexico",
    description: "VB6, VB.NET, SQL Server.",
    logo: "/images/logos/dragados_offshore_logo.jpg",
  },
  {
    year: "NOVIEMBRE 2023 - NOVIEMBRE 2024",
    title: "Desarrollador Web",
    subtitle: "42A Corporativo",
    description: "Módulos en sistema NUUP con Node.js, Sequelize, MySQL, Docker.",
    logo: "/images/logos/42A.png",
  },
  {
    year: "FEBRERO 2023 - AGOSTO 2023",
    title: "Líder de Desarrollo",
    subtitle: "Delmer",
    description: "Apps móviles nativas con Kotlin, Flutter. Google Play Store, Firebase.",
    logo: "/images/logos/delmer.jpg",
  },
  {
    year: "MARZO 2022 - MARZO 2023",
    title: "Software Developer",
    subtitle: "SUD Solutions",
    description: "Backend con Node.js, Express, PostgreSQL, MySQL, TypeScript, TypeORM. Mobile con Dart & Flutter.",
    logo: "/images/logos/sudsolutions.png",
  },
  {
    year: "AGOSTO 2022 - OCTUBRE 2022",
    title: "Desarrollador Frontend",
    subtitle: "Cotemar",
    description: "Frontend con Vue.js y JavaScript Vanilla.",
    logo: "/images/logos/cotemar.jpg",
  },
  {
    year: "JUNIO 2021 - SEPTIEMBRE 2023",
    title: "Ingeniero de Soporte TI",
    subtitle: "Irium",
    description: "Mantenimiento de servidores con Linux.",
    logo: "/images/logos/irium.jpg",
  },
  {
    year: "OCTUBRE 2020 - DICIEMBRE 2020",
    title: "Software Developer Engineer",
    subtitle: "Tuprop",
    description: "Frontend con ReactJS.",
    logo: "/images/logos/tuprop_logo.jpg",
  },
];
