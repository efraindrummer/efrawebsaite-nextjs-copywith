'use client'

import { Box, Flex, Text, Image, Badge, useColorModeValue } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../lib/language-context'

const MotionBox = motion(Box)

const isCurrent = year =>
  year.toUpperCase().includes('ACTUAL') || year.toUpperCase().includes('PRESENT')

const TimelineEntry = ({
  year,
  title,
  subtitle,
  description,
  techs = [],
  logo,
  index,
  currentLabel,
}) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const current = isCurrent(year)

  const dotBg = useColorModeValue('#4c6ef5', '#748ffc')
  const dateColor = useColorModeValue('gray.500', 'gray.400')
  const titleColor = useColorModeValue('gray.900', 'white')
  const subtitleColor = useColorModeValue('brand.600', 'brand.300')
  const descColor = useColorModeValue('gray.600', 'gray.300')
  const tagBg = useColorModeValue('gray.100', 'whiteAlpha.100')
  const tagColor = useColorModeValue('gray.700', 'gray.200')
  const logoBorder = useColorModeValue('gray.200', 'whiteAlpha.200')
  const cardBg = useColorModeValue('rgba(255,255,255,0.75)', 'rgba(20,20,35,0.65)')
  const cardBorder = useColorModeValue('gray.200', 'whiteAlpha.100')

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
      position="relative"
      pl={{ base: 6, md: 8 }}
      pb={6}
    >
      {/* Dot */}
      <Box
        position="absolute"
        left="-6px"
        top="22px"
        w="12px"
        h="12px"
        borderRadius="full"
        bg={current ? '#22c55e' : dotBg}
        zIndex={1}
        boxShadow={
          current
            ? '0 0 0 5px rgba(34,197,94,0.18)'
            : '0 0 0 4px rgba(92,124,250,0.15)'
        }
      />

      <Box
        bg={cardBg}
        backdropFilter="blur(14px)"
        border="1px solid"
        borderColor={current ? 'green.400' : cardBorder}
        borderRadius="2xl"
        p={{ base: 4, md: 5 }}
        transition="all 0.25s ease"
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        }}
      >
        <Flex align="flex-start" justify="space-between" gap={4}>
          <Box flex={1} minW={0}>
            {/* Date row */}
            <Flex align="center" gap={2} mb={1.5} flexWrap="wrap">
              <Text
                fontFamily="mono"
                fontSize="xs"
                color={dateColor}
                fontWeight="600"
                letterSpacing="0.06em"
                textTransform="uppercase"
              >
                {year.replace(' - ACTUAL', '').replace(' - PRESENT', '')}
              </Text>
              {current && (
                <Badge
                  colorScheme="green"
                  variant="subtle"
                  fontSize="10px"
                  px={2}
                  py={0.5}
                  borderRadius="full"
                >
                  ● {currentLabel}
                </Badge>
              )}
            </Flex>

            {/* Title */}
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              fontWeight="700"
              color={titleColor}
              letterSpacing="-0.02em"
              lineHeight="1.3"
            >
              {title}
            </Text>

            {/* Subtitle */}
            <Text fontSize="sm" color={subtitleColor} fontWeight="600" mb={2}>
              {subtitle}
            </Text>

            {/* Description */}
            <Text fontSize="sm" color={descColor} mb={3} lineHeight="1.6">
              {description}
            </Text>

            {/* Tech tags */}
            {techs.length > 0 && (
              <Flex flexWrap="wrap" gap={1.5}>
                {techs.map(tech => (
                  <Box
                    key={tech}
                    fontFamily="mono"
                    fontSize="11px"
                    color={tagColor}
                    bg={tagBg}
                    px="8px"
                    py="3px"
                    borderRadius="md"
                    fontWeight="600"
                  >
                    {tech}
                  </Box>
                ))}
              </Flex>
            )}
          </Box>

          {/* Logo */}
          {logo && (
            <Box flexShrink={0}>
              <Image
                src={logo}
                alt={subtitle}
                boxSize={{ base: '42px', md: '52px' }}
                borderRadius="xl"
                objectFit="cover"
                border="1px solid"
                borderColor={logoBorder}
              />
            </Box>
          )}
        </Flex>
      </Box>
    </MotionBox>
  )
}

const TIMELINE_DATA = {
  es: [
    {
      year: 'NOVIEMBRE 2024 - ACTUAL',
      title: 'Ingeniero & Desarrollador de Software',
      subtitle: 'Dragados Offshore México',
      description:
        'Modernización y migración de sistemas ERP empresariales para el sector petrolero y offshore (VB6 a .NET Framework), optimización de procesos críticos, reportes operativos y bases de datos corporativas.',
      techs: ['VB.NET', 'VB6', 'SQL Server', 'ERP Systems', 'Arquitectura Empresarial'],
      logo: '/images/logos/dragados_offshore_logo.jpg',
    },
    {
      year: '2021 - ACTUAL',
      title: 'Consultor TI, Desarrollador Full Stack & IA (Freelance)',
      subtitle: 'Consultoría Independiente & Soluciones Empresariales',
      description:
        'Desarrollo de sistemas ERP a medida, integraciones con sistemas de facturación electrónica, automatización de procesos con Inteligencia Artificial (LLMs, MCP, Agentes), análisis de datos, apps móviles y gestión integral de proyectos TI.',
      techs: ['Next.js', 'Node.js', 'Flutter', 'AI Agents & MCP', 'ERP & Facturación', 'Data Analytics'],
      logo: '/images/footprint.png',
    },
    {
      year: 'NOVIEMBRE 2023 - NOVIEMBRE 2024',
      title: 'Desarrollador Web Full Stack',
      subtitle: '42A Corporativo',
      description:
        'Diseño y desarrollo de módulos core en el sistema ERP NUUP para gestión operativa y logística, integrando microservicios contenerizados y bases de datos relacionales.',
      techs: ['Node.js', 'Sequelize', 'MySQL', 'Docker', 'ERP'],
      logo: '/images/logos/42A.png',
    },
    {
      year: 'FEBRERO 2023 - AGOSTO 2023',
      title: 'Líder de Desarrollo & Gestión de Proyectos Móviles',
      subtitle: 'Delmer',
      description:
        'Liderazgo técnico, gestión de proyectos bajo metodologías ágiles y desarrollo de aplicaciones móviles nativas y multiplataforma publicadas en Google Play Store con geolocalización en tiempo real.',
      techs: ['Flutter', 'Kotlin', 'Firebase', 'Google Play Store', 'Project Management'],
      logo: '/images/logos/delmer.jpg',
    },
    {
      year: 'MARZO 2022 - MARZO 2023',
      title: 'Software Developer (Backend & Mobile)',
      subtitle: 'SUD Solutions',
      description:
        'Arquitectura backend RESTful y aplicaciones móviles para monitoreo GPS, control de flotas, seguridad industrial y sistemas ERP.',
      techs: ['Node.js', 'Express', 'TypeScript', 'TypeORM', 'PostgreSQL', 'MySQL', 'Flutter'],
      logo: '/images/logos/sudsolutions.png',
    },
    {
      year: 'AGOSTO 2022 - OCTUBRE 2022',
      title: 'Desarrollador Frontend',
      subtitle: 'Cotemar',
      description:
        'Desarrollo de interfaces web empresariales para operaciones offshore y logística petrolera.',
      techs: ['Vue.js', 'JavaScript', 'UI/UX Empresarial'],
      logo: '/images/logos/cotemar.jpg',
    },
    {
      year: 'JUNIO 2021 - SEPTIEMBRE 2023',
      title: 'Ingeniero de Soporte TI & Infraestructura',
      subtitle: 'Irium',
      description:
        'Administración, monitoreo y mantenimiento de servidores Linux e infraestructura tecnológica empresarial.',
      techs: ['Linux', 'Ubuntu', 'Servidores', 'Infraestructura TI'],
      logo: '/images/logos/irium.jpg',
    },
    {
      year: 'OCTUBRE 2020 - DICIEMBRE 2020',
      title: 'Software Developer Engineer',
      subtitle: 'Tuprop',
      description:
        'Desarrollo de componentes frontend reactivos y optimización de experiencia de usuario en plataforma web.',
      techs: ['ReactJS', 'JavaScript', 'Frontend'],
      logo: '/images/logos/tuprop_logo.jpg',
    },
  ],
  en: [
    {
      year: 'NOVEMBER 2024 - PRESENT',
      title: 'Software Engineer & Developer',
      subtitle: 'Dragados Offshore Mexico',
      description:
        'Modernization and migration of enterprise ERP systems for the oil & gas offshore sector (VB6 to .NET Framework), critical process optimization, operational reporting, and corporate databases.',
      techs: ['VB.NET', 'VB6', 'SQL Server', 'ERP Systems', 'Enterprise Architecture'],
      logo: '/images/logos/dragados_offshore_logo.jpg',
    },
    {
      year: '2021 - PRESENT',
      title: 'IT Consultant, Full Stack & AI Developer (Freelance)',
      subtitle: 'Independent Consulting & Enterprise Solutions',
      description:
        'Custom ERP software development, electronic billing & invoicing integrations, business process automation with Artificial Intelligence (LLMs, MCP, Agentic Workflows), data analytics, mobile apps, and end-to-end IT project management.',
      techs: ['Next.js', 'Node.js', 'Flutter', 'AI Agents & MCP', 'ERP & Billing', 'Data Analytics'],
      logo: '/images/footprint.png',
    },
    {
      year: 'NOVEMBER 2023 - NOVEMBER 2024',
      title: 'Full Stack Web Developer',
      subtitle: '42A Corporativo',
      description:
        'Design and development of core modules in the NUUP ERP system for operational and logistics management using containerized services and relational databases.',
      techs: ['Node.js', 'Sequelize', 'MySQL', 'Docker', 'ERP'],
      logo: '/images/logos/42A.png',
    },
    {
      year: 'FEBRUARY 2023 - AUGUST 2023',
      title: 'Development Lead & Mobile Project Manager',
      subtitle: 'Delmer',
      description:
        'Technical leadership, agile project management, and development of native and cross-platform mobile apps published on the Google Play Store with real-time geolocation.',
      techs: ['Flutter', 'Kotlin', 'Firebase', 'Google Play Store', 'Project Management'],
      logo: '/images/logos/delmer.jpg',
    },
    {
      year: 'MARCH 2022 - MARCH 2023',
      title: 'Software Developer (Backend & Mobile)',
      subtitle: 'SUD Solutions',
      description:
        'RESTful backend architecture and mobile applications for GPS tracking, fleet management, industrial security, and ERP systems.',
      techs: ['Node.js', 'Express', 'TypeScript', 'TypeORM', 'PostgreSQL', 'MySQL', 'Flutter'],
      logo: '/images/logos/sudsolutions.png',
    },
    {
      year: 'AUGUST 2022 - OCTOBER 2022',
      title: 'Frontend Developer',
      subtitle: 'Cotemar',
      description:
        'Development of enterprise web interfaces for offshore operations and oil & gas logistics.',
      techs: ['Vue.js', 'JavaScript', 'Enterprise UI/UX'],
      logo: '/images/logos/cotemar.jpg',
    },
    {
      year: 'JUNE 2021 - SEPTEMBER 2023',
      title: 'IT Support & Infrastructure Engineer',
      subtitle: 'Irium',
      description:
        'Administration, monitoring, and maintenance of Linux servers and enterprise IT infrastructure.',
      techs: ['Linux', 'Ubuntu', 'Servers', 'IT Infrastructure'],
      logo: '/images/logos/irium.jpg',
    },
    {
      year: 'OCTOBER 2020 - DECEMBER 2020',
      title: 'Software Developer Engineer',
      subtitle: 'Tuprop',
      description:
        'Development of reactive frontend components and UX optimization for web platforms.',
      techs: ['ReactJS', 'JavaScript', 'Frontend'],
      logo: '/images/logos/tuprop_logo.jpg',
    },
  ],
}

export const Timeline = () => {
  const { lang } = useLanguage()
  const items = TIMELINE_DATA[lang] || TIMELINE_DATA.es
  const lineColor = useColorModeValue('brand.200', 'whiteAlpha.200')
  const headingColor = useColorModeValue('gray.900', 'white')
  const labelColor = useColorModeValue('gray.500', 'gray.400')

  return (
    <Box w="full">
      <Flex align="baseline" justify="space-between" mb={8} flexWrap="wrap" gap={2}>
        <Box>
          <Text
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight="800"
            color={headingColor}
            letterSpacing="-0.03em"
          >
            {lang === 'es' ? 'Trayectoria y Experiencia Profesional' : 'Professional Experience & Career Path'}
          </Text>
          <Text fontSize="sm" color={labelColor} mt={1}>
            {lang === 'es'
              ? 'Desarrollo Web, Móvil, Backend, Sistemas ERP, Liderazgo Técnico y Consultoría TI'
              : 'Web, Mobile, Backend Development, ERP Systems, Technical Leadership & IT Consulting'}
          </Text>
        </Box>
        <Badge
          colorScheme="brand"
          variant="subtle"
          px={3}
          py={1}
          borderRadius="full"
          fontFamily="mono"
          fontSize="xs"
        >
          {items.length} {lang === 'es' ? 'roles destacados' : 'featured roles'}
        </Badge>
      </Flex>

      <Box
        position="relative"
        ml={{ base: 2, md: 3 }}
        borderLeft="2px solid"
        borderColor={lineColor}
      >
        {items.map((item, index) => (
          <TimelineEntry
            key={index}
            {...item}
            index={index}
            currentLabel={lang === 'es' ? 'ACTUAL' : 'CURRENT'}
          />
        ))}
      </Box>
    </Box>
  )
}
