'use client'

import { Container, Heading, SimpleGrid, Box, Text, Flex, useColorModeValue } from '@chakra-ui/react'
import { WorkGridItem } from '../../components/grid-item'
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import thumbYouTubeChatApp from '../../public/images/links/chatapp.jpg'
import thumbAngularGiphyAPI from '../../public/images/links/angular-coding.jpg'
import thumbEfraCode from '../../public/images/links/web-efrain.jpg'
import thumbSchoolApp from '../../public/images/links/school.jpg'
import thumbSnappApp from '../../public/images/links/snapp.jpg'
import thumbAccessControl from '../../public/images/links/control-acceso.jpg'
import thumbAngularAdmin from '../../public/images/links/angular-admin.jpg'
import thumbSeguridad360 from '../../public/images/links/seguridad360.jpg'
import thumbSudMonitoreoControl from '../../public/images/links/panel_sudmonitoreocontrol.jpg'
import thumbLidosPizza from '../../public/images/works/weblidos.png'
import thumbPronTaxi from '../../public/images/works/prontaxi-principal.jpg'
import thumbNuup from '../../public/images/works/nuup_login.png'
import thumbTesla from '../../public/images/works/tesla.png'
import thumbChatIA from '../../public/images/links/chatbot_ia.jpg'
import thumbDragadosOffshore from '../../public/images/links/dragados_offshorelogo.jpg'
import thumbMardeAmor from '../../public/images/works/mardeamor.png'
import thumbCCONSULTORES from '../../public/images/works/cconsultores.png'
import thumbEmpowermentDelCarmen from '../../public/images/works/empowermentcme.png'

const projects = [
  {
    id: 'chatapp',
    title: 'ChatApp',
    thumbnail: thumbYouTubeChatApp,
    description: 'App de mapas con chat integrado en tiempo real usando Flutter y Firebase.',
    category: 'Mobile',
    techs: ['Flutter', 'Firebase'],
  },
  {
    id: 'giphy',
    title: 'Buscador de Gifs',
    thumbnail: thumbAngularGiphyAPI,
    description: 'App en Angular para buscar GIFs consumiendo la Giphy API.',
    category: 'Web',
    techs: ['Angular', 'TypeScript'],
  },
  {
    id: 'efracode',
    title: 'Sitio Web EfraCode',
    thumbnail: thumbEfraCode,
    description: 'Sitio personal hecho con HTML, CSS y JavaScript puro.',
    category: 'Web',
    techs: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'school',
    title: 'School Desktop App',
    thumbnail: thumbSchoolApp,
    description: 'Aplicación de escritorio para registro y control de alumnos.',
    category: 'Desktop',
    techs: ['C#', '.NET'],
  },
  {
    id: 'control_acceso',
    title: 'Sistema de Control de Acceso',
    thumbnail: thumbAccessControl,
    description: 'Plataforma web para gestionar accesos, usuarios y permisos.',
    category: 'Enterprise',
    techs: ['Node.js', 'MySQL'],
  },
  {
    id: 'angularadmin',
    title: 'Administrador de Pacientes',
    thumbnail: thumbAngularAdmin,
    description: 'Dashboard Angular para gestión de historial médico de pacientes.',
    category: 'Web',
    techs: ['Angular', 'TypeScript'],
  },
  {
    id: 'snapp',
    title: 'Snapp Taxi Driver',
    thumbnail: thumbSnappApp,
    description: 'App móvil para conductores tipo Uber con GPS en tiempo real.',
    category: 'Mobile',
    techs: ['Flutter', 'Google Maps'],
  },
  {
    id: 'seguridad360',
    title: 'Seguridad 360',
    thumbnail: thumbSeguridad360,
    description: 'Sistema completo de monitoreo y seguridad con panel de control.',
    category: 'Enterprise',
    techs: ['Node.js', 'Vue.js'],
  },
  {
    id: 'sudmonitoreo-control',
    title: 'Sud Monitoreo y Control',
    thumbnail: thumbSudMonitoreoControl,
    description: 'Panel para control industrial, monitoreo de flotas y seguridad.',
    category: 'Enterprise',
    techs: ['Node.js', 'PostgreSQL'],
  },
  {
    id: 'lidosapp',
    title: 'Lidos Pizza',
    thumbnail: thumbLidosPizza,
    description: 'Landing page moderna para restaurante de pizzas con menú interactivo.',
    category: 'Web',
    techs: ['React', 'CSS'],
  },
  {
    id: 'prontaxi',
    title: 'Mi Taxi',
    thumbnail: thumbPronTaxi,
    description: 'App de movilidad urbana con perfiles de pasajero y conductor.',
    category: 'Mobile',
    techs: ['Flutter', 'Firebase', 'Google Maps'],
  },
  {
    id: 'nuup',
    title: 'Sistema NUUP ERP',
    thumbnail: thumbNuup,
    description: 'ERP empresarial completo para gestión de operaciones y logística.',
    category: 'Enterprise',
    techs: ['Node.js', 'Sequelize', 'MySQL', 'Docker'],
  },
  {
    id: 'tesla',
    title: 'Clon Web de Tesla',
    thumbnail: thumbTesla,
    description: 'Clon responsivo del sitio oficial de Tesla con animaciones.',
    category: 'Web',
    techs: ['React', 'CSS'],
  },
  {
    id: 'chatbot_ia',
    title: 'ChatBot IA',
    thumbnail: thumbChatIA,
    description: 'Asistente conversacional con IA para atención al cliente de negocio local.',
    category: 'AI',
    techs: ['Node.js', 'OpenAI'],
  },
  {
    id: 'dragados_offshore',
    title: 'Dragados Offshore ERP',
    thumbnail: thumbDragadosOffshore,
    description: 'Migración de ERP petrolero de VB6 a .NET para sector offshore.',
    category: 'Enterprise',
    techs: ['VB.NET', 'SQL Server'],
  },
  {
    id: 'mardeamor',
    title: 'Mar de Amor',
    thumbnail: thumbMardeAmor,
    description: 'Sitio web para gestionar y exhibir catálogo de charcutería premium.',
    category: 'Web',
    techs: ['React', 'Node.js'],
  },
  {
    id: 'cconsultores',
    title: 'Carretino Consultores',
    thumbnail: thumbCCONSULTORES,
    description: 'SPA institucional para despacho contable con formulario de contacto.',
    category: 'Web',
    techs: ['React', 'TypeScript'],
  },
  {
    id: 'empowerment_del_carmen',
    title: 'Empowerment del Carmen',
    thumbnail: thumbEmpowermentDelCarmen,
    description: 'Desarrollo web y consultoría TI para un proyecto enfocado en capacitación.',
    category: 'Web',
    techs: ['Next.js', 'React', 'TypeScript'],
  },
]

const CATEGORIES = ['Todos', 'Web', 'Mobile', 'Enterprise', 'AI', 'Desktop']

const FilterButton = ({ label, active, count, onClick }) => {
  const activeBg = useColorModeValue('gray.900', 'white')
  const activeColor = useColorModeValue('white', 'gray.900')
  const inactiveBg = useColorModeValue('transparent', 'transparent')
  const inactiveColor = useColorModeValue('gray.500', 'gray.400')
  const inactiveBorder = useColorModeValue('gray.200', 'gray.700')
  const hoverBg = useColorModeValue('gray.50', 'gray.800')

  return (
    <Box
      as="button"
      onClick={onClick}
      display="flex"
      alignItems="center"
      gap="6px"
      px={3}
      py="6px"
      borderRadius="8px"
      fontSize="13px"
      fontWeight={active ? '600' : '500'}
      bg={active ? activeBg : inactiveBg}
      color={active ? activeColor : inactiveColor}
      border="1px solid"
      borderColor={active ? 'transparent' : inactiveBorder}
      cursor="pointer"
      transition="all 0.15s ease"
      _hover={{ bg: active ? activeBg : hoverBg }}
    >
      {label}
      {count !== undefined && (
        <Box
          fontFamily="mono"
          fontSize="10px"
          fontWeight="600"
          opacity={active ? 0.6 : 0.5}
        >
          {count}
        </Box>
      )}
    </Box>
  )
}

export default function Works() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filtered = useMemo(
    () =>
      activeCategory === 'Todos'
        ? projects
        : projects.filter(p => p.category === activeCategory),
    [activeCategory]
  )

  const counts = useMemo(() => {
    const map = {}
    CATEGORIES.forEach(cat => {
      map[cat] = cat === 'Todos'
        ? projects.length
        : projects.filter(p => p.category === cat).length
    })
    return map
  }, [])

  const headingColor = useColorModeValue('gray.900', 'white')
  const subColor = useColorModeValue('gray.400', 'gray.500')

  return (
    <Container maxW="container.lg" pt={6} pb={16}>
      {/* Header */}
      <Box mb={8}>
        <Heading
          as="h1"
          fontSize={{ base: '2xl', md: '3xl' }}
          fontWeight="700"
          color={headingColor}
          letterSpacing="-0.035em"
          mb={1}
        >
          Portafolio
        </Heading>
        <Text fontFamily="mono" fontSize="12px" color={subColor}>
          {projects.length} proyectos — web, mobile, enterprise & más
        </Text>
      </Box>

      {/* Filters */}
      <Flex gap={2} flexWrap="wrap" mb={8}>
        {CATEGORIES.filter(cat => counts[cat] > 0).map(cat => (
          <FilterButton
            key={cat}
            label={cat}
            count={counts[cat]}
            active={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
          />
        ))}
      </Flex>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <SimpleGrid columns={[1, 2, 3]} gap={{ base: 5, md: 6 }}>
            {filtered.map((proj, i) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <WorkGridItem
                  id={proj.id}
                  title={proj.title}
                  thumbnail={proj.thumbnail}
                  category={proj.category}
                  techs={proj.techs}
                >
                  {proj.description}
                </WorkGridItem>
              </motion.div>
            ))}
          </SimpleGrid>
        </motion.div>
      </AnimatePresence>
    </Container>
  )
}
