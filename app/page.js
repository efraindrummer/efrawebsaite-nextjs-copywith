'use client'

import { useState } from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import {
  Link,
  Box,
  Heading,
  Button,
  SimpleGrid,
  Icon,
  useColorModeValue,
  chakra,
  Text,
  Flex,
  Badge,
  VStack,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Divider,
} from '@chakra-ui/react'
import { GridItem } from '../components/grid-item'
import Section from '../components/section'
import { Timeline } from '../components/timeline'
import { GlassCard } from '../components/glass-card'
import { StaggerContainer, StaggerItem } from '../components/animations'
import { useLanguage } from '../lib/language-context'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import {
  IoLogoLinkedin,
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoGithub,
  IoSparkles,
  IoCodeSlash,
  IoPhonePortraitOutline,
  IoServerOutline,
  IoBriefcaseOutline,
  IoSchoolOutline,
  IoRibbonOutline,
  IoMicOutline,
  IoAnalyticsOutline,
  IoReceiptOutline,
  IoLayersOutline,
  IoConstructOutline,
  IoCheckmarkCircle,
  IoCalendarOutline,
  IoLocationOutline,
  IoExpandOutline,
  IoGlobeOutline,
} from 'react-icons/io5'
import { motion } from 'framer-motion'

import thumbYouTubeChatApp from '../public/images/links/chatapp.jpg'
import thumbAngularGiphyAPI from '../public/images/links/angular-coding.jpg'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop =>
    ['width', 'height', 'src', 'alt', 'style'].includes(prop),
})

const MotionBox = motion(Box)

const CONTENT = {
  es: {
    statusBadge: 'Disponible para Proyectos, Consultoría TI & Conferencias',
    mastersBadge: 'Maestría en Tecnologías de la Información Emergentes',
    heroTitle: 'Efraín May',
    heroSubtitle:
      'Ingeniero de Software • Especialista en IA & Automatización • Project Manager Certificado',
    heroRole:
      'Ingeniero de Software en Dragados Offshore México | Consultor TI & Freelancer Senior',
    heroDescription:
      'Desarrollador de Software Full Stack con amplia experiencia en tecnologías web modernas, aplicaciones móviles multiplataforma y nativas, arquitecturas backend de alto rendimiento y gestión certificada de proyectos. Actualmente curso la Maestría en Tecnologías de la Información Emergentes, enfocándome en la integración y desarrollo de Inteligencia Artificial (Agentic Patterns, LLMs y Model Context Protocol - MCP) para automatizar procesos y transformar datos en decisiones estratégicas.',
    ctaPortfolio: 'Explorar Portafolio',
    ctaCV: 'Descargar CV',
    ctaContact: 'Contratar / Consultoría',
    langSwitchLabel: 'View in English',
    stats: [
      { value: '+6', label: 'Años construyendo software empresarial' },
      { value: '+18', label: 'Sistemas Web, Mobile, ERP e IA desplegados' },
      { value: '3', label: 'Conferencias y Congresos Magistrales 2026' },
      { value: '+15', label: 'Certificaciones y Constancias Oficiales' },
    ],
    pillarsTitle: 'Arquitectura de Software, IA y Gestión de Proyectos',
    pillarsSubtitle:
      'Dominio técnico integral desde la interfaz de usuario hasta la infraestructura cloud, inteligencia artificial y liderazgo de equipos.',
    pillars: [
      {
        icon: IoCodeSlash,
        color: 'blue',
        title: 'Tecnologías Web Modernas',
        badge: 'Frontend & Full Stack',
        desc: 'Desarrollo de aplicaciones web escalables, SPAs, dashboards ejecutivos y plataformas progresivas con React, Next.js, Vue.js, Angular y TypeScript.',
        tags: ['Next.js', 'React', 'Vue.js', 'Angular', 'TypeScript', 'Chakra UI'],
      },
      {
        icon: IoPhonePortraitOutline,
        color: 'purple',
        title: 'Aplicaciones Móviles',
        badge: 'iOS & Android',
        desc: 'Creación y despliegue de apps móviles multiplataforma y nativas en Google Play Store con geolocalización GPS en tiempo real, sockets y pagos.',
        tags: ['Flutter', 'Dart', 'Kotlin', 'Android Enterprise', 'Firebase', 'Google Maps'],
      },
      {
        icon: IoServerOutline,
        color: 'green',
        title: 'Desarrollo Backend & Cloud',
        badge: 'Arquitectura & DevOps',
        desc: 'Diseño de APIs RESTful, microservicios, migración de sistemas legacy (VB6 a .NET), bases de datos relacionales de misión crítica y contenedores.',
        tags: ['Node.js', 'Express', '.NET / VB.NET', 'PostgreSQL', 'SQL Server', 'MySQL', 'Docker & AWS'],
      },
      {
        icon: IoSparkles,
        color: 'orange',
        title: 'Inteligencia Artificial & Automatización',
        badge: 'Maestría en TI Emergentes',
        desc: 'Orquestación de agentes inteligentes (Agentic Patterns), conexión segura a bases de datos mediante MCP (Model Context Protocol) y automatización de procesos.',
        tags: ['Agentic Patterns', 'MCP', 'Gemini / OpenAI / DeepSeek', 'Function Calling', 'RAG & Datos'],
      },
      {
        icon: IoBriefcaseOutline,
        color: 'teal',
        title: 'Gestión de Proyectos Certificada',
        badge: 'Scrum Master & Tech Lead',
        desc: 'Certificado y con habilidades altamente competentes en gestión de proyectos tecnológicos, liderazgo de equipos de ingeniería, planeación ágil y entrega de valor.',
        tags: ['Scrum Master Certificado', 'Project Management', 'Liderazgo Técnico', 'Agile / Kanban', 'KPIs'],
      },
      {
        icon: IoAnalyticsOutline,
        color: 'pink',
        title: 'Sectores Industriales & Críticos',
        badge: 'Experiencia Comprobada',
        desc: 'Soluciones probadas en producción para la industria petrolera y offshore, operación y mantenimiento (O&M), logística, educación superior y monitoreo GPS.',
        tags: ['Sector Petrolero & Offshore', 'O&M', 'Logística', 'Monitoreo GPS', 'Gestión Académica'],
      },
    ],
    conferencesTitle: 'Conferencias, Investigación y Divulgación Científica 2026',
    conferencesSubtitle:
      'Participación activa como ponente magistral, tallerista e investigador en eventos tecnológicos y congresos internacionales sobre Inteligencia Artificial y Tecnologías Emergentes.',
    clickPhotoHint: 'Haz clic en cualquier fotografía para ampliarla',
    conferences: [
      {
        id: 'gdg-2026',
        featured: true,
        badge: 'Google Developer Groups • DevFest 2026',
        colorScheme: 'blue',
        date: 'Noviembre 2026',
        location: 'GDG San Francisco de Campeche',
        role: 'Conferencista / Speaker Principal',
        title:
          'Trayecto IA: Conectando MCP con datos y optimizando procesos mediante Agentic Patterns',
        description:
          'Conferencia especializada impartida en el Google Developer Groups (DevFest 2026) sobre cómo evolucionar de chatbots estáticos a sistemas de razonamiento sobre datos reales en PostgreSQL utilizando el protocolo MCP (Model Context Protocol), patrones agénticos (Reflexión, Verificación y Function Calling) y arquitecturas híbridas resilientes en cascada para producción.',
        highlights: [
          'Conexión en tiempo real de LLMs con datos relacionales vía Model Context Protocol (MCP)',
          'Implementación de Agentic Patterns para auditoría, reflexión y toma de decisiones sin alucinaciones',
          'Arquitectura Híbrida Resiliente con Fallback en Cascada para entornos empresariales e institucionales',
        ],
        mainImage: '/images/google_dev/principalgdg.jpg',
        gallery: [
          {
            src: '/images/google_dev/principalgdg.jpg',
            caption: 'GDG DevFest 2026 — Ponencia: Trayecto IA, conectando MCP con datos mediante Agentic Patterns',
          },
          {
            src: '/images/google_dev/WhatsApp Image 2026-11-14 at 5.43.51 PM.jpeg',
            caption: 'Demostración en vivo del Asistente Académico Institucional Trayecto IA en DevFest 2026',
          },
          {
            src: '/images/google_dev/WhatsApp Image 2026-11-14 at 5.43.51 PM (1).jpeg',
            caption: 'Arquitectura Híbrida Resiliente: Fallback en Cascada para Producción y Motor Analítico MCP',
          },
          {
            src: '/images/google_dev/WhatsApp Image 2026-11-14 at 5.43.51 PM (2).jpeg',
            caption: 'El Rol de los LLMs: De Chat Estático a Razonamiento con Datos y Function Calling',
          },
        ],
      },
      {
        id: 'cren-uqroo-2026',
        featured: false,
        badge: '57 Aniversario del CREN • Estancia de Investigación UQROO',
        colorScheme: 'purple',
        date: '19 al 23 de Octubre de 2026 (Constancias expedidas el 30 de Octubre de 2026)',
        location: '4° Seminario Permanente de Avances de Investigación de Cuerpos Académicos 2026',
        role: 'Ponente e Instructor de Taller',
        title:
          '4° Seminario Permanente de Avances de Investigación de Cuerpos Académicos 2026',
        description:
          'Del 19 al 23 de octubre de 2026 participé en el 4° Seminario Permanente de Avances de Investigación de Cuerpos Académicos 2026, dentro del marco del 57 Aniversario del CREN y vinculación de investigación con UQROO. Impartí el taller práctico para docentes y estudiantes y presenté una ponencia especializada sobre tecnologías emergentes.',
        highlights: [
          'Taller impartido: "IA en el aula: herramientas prácticas para la docencia", orientado a que docentes y estudiantes usen herramientas de inteligencia artificial y aprendan a construir sus propios prompts.',
          'Ponencia presentada: "IA para aprender, enseñar y crear: experiencias desde las tecnologías emergentes".',
          'Ambas participaciones cuentan con constancia oficial expedida el 30 de octubre de 2026.',
        ],
        mainImage:
          '/images/UQROO/856009092_28536100006012884_5870211897046560889_n.jpg',
        gallery: [
          {
            src: '/images/UQROO/856009092_28536100006012884_5870211897046560889_n.jpg',
            caption:
              'Presentación de ponencia y taller en el 4° Seminario Permanente de Avances de Investigación de Cuerpos Académicos 2026 / Estancia UQROO',
          },
        ],
      },
      {
        id: 'ciu-unach-2026',
        featured: false,
        badge: 'Congreso Internacional UNACH • CIU 2026',
        colorScheme: 'teal',
        date: '2026',
        location: 'Universidad Autónoma de Chiapas (UNACH) — CIU 2026',
        role: 'Ponente de Investigación / Tesis de Maestría',
        title:
          'Trayecto IA: Plataforma Web con Inteligencia Artificial para la Gestión Académica Universitaria',
        description:
          'Participación en el Congreso Internacional UNACH (CIU 2026) presentando mi trabajo de tesis de posgrado: "Trayecto IA: Plataforma Web con Inteligencia Artificial para la Gestión Académica Universitaria", enfocada en la automatización del seguimiento curricular, análisis predictivo de indicadores institucionales y asistencia inteligente.',
        highlights: [
          'Presentación de tesis de la Maestría en Tecnologías de la Información Emergentes ante comité académico internacional',
          'Plataforma integral con IA agéntica para gestión de trayectorias escolares, kardex, servicio social y reportes ejecutivos',
          'Reconocimiento oficial como ponente en el Congreso Internacional Universitario CIU 2026 de la UNACH',
        ],
        mainImage:
          '/images/ciu/782169240_1054986534173713_5950153621245399235_n.jpg',
        gallery: [
          {
            src: '/images/ciu/782169240_1054986534173713_5950153621245399235_n.jpg',
            caption:
              'Exposición del proyecto de tesis "Trayecto IA" en el Congreso Internacional UNACH (CIU 2026)',
          },
          {
            src: '/images/ciu/785583099_27830403563249202_4340585318402364548_n.jpg',
            caption:
              'Auditorio magistral del Congreso Internacional UNACH (CIU 2026)',
          },
          {
            src: '/images/ciu/785993476_1275877061239387_7150118222439008407_n.jpg',
            caption:
              'Entrega de constancias y reconocimientos a investigadores y ponentes en CIU 2026',
          },
        ],
      },
    ],
    freelanceTitle: 'Servicios Freelance & Consultoría TI Especializada',
    freelanceSubtitle:
      'Soluciones tecnológicas de principio a fin para empresas, startups e instituciones que buscan digitalizar, integrar y automatizar sus operaciones con calidad de nivel corporativo.',
    freelanceServices: [
      {
        icon: IoLayersOutline,
        color: 'blue',
        title: 'Desarrollo y Modernización de Software ERP',
        desc: 'Diseño e implementación de sistemas ERP a medida para control de inventarios, logística, operaciones, recursos humanos, flotas y migración de sistemas heredados a arquitecturas modernas.',
        bullets: [
          'Módulos operativos, compras, almacén y logística',
          'Migración y actualización de sistemas legacy (.NET, Node.js, Web)',
          'Control de accesos basado en roles y auditoría completa',
        ],
      },
      {
        icon: IoReceiptOutline,
        color: 'green',
        title: 'Integraciones en Sistemas de Facturación',
        desc: 'Conexión e integración de plataformas comerciales, ERPs y puntos de venta con motores de facturación electrónica, pasarelas de pago y conciliación contable automatizada.',
        bullets: [
          'Integración vía API con proveedores de facturación y timbrado',
          'Automatización de flujos fiscales, recibos y reportes contables',
          'Sincronización con pasarelas de pago (Mercado Pago, Stripe, bancos)',
        ],
      },
      {
        icon: IoAnalyticsOutline,
        color: 'purple',
        title: 'Análisis de Datos e Inteligencia Artificial',
        desc: 'Implementación de asistentes inteligentes conectados a tus bases de datos (MCP), automatización de procesos repetitivos con agentes de IA, dashboards ejecutivos y analítica predictiva.',
        bullets: [
          'Agentes de IA empresariales conectados a SQL Server / PostgreSQL / MySQL',
          'Generación automática de reportes en Excel, PDF y tableros BI',
          'Optimización de procesos mediante LLMs y Agentic Patterns',
        ],
      },
      {
        icon: IoConstructOutline,
        color: 'orange',
        title: 'Consultoría TI & Gestión de Proyectos',
        desc: 'Asesoría estratégica en arquitectura de software, despliegue en la nube (Docker, AWS, Linux), auditoría técnica y dirección certificada de proyectos de desarrollo web y móvil.',
        bullets: [
          'Planeación, levantamiento de requerimientos y liderazgo Scrum/Agile',
          'Infraestructura en servidores Linux, contenedores Docker y Cloud',
          'Acompañamiento técnico y capacitación en herramientas de IA',
        ],
      },
    ],
    educationTitle: 'Posgrado, Formación Académica y Certificaciones',
    educationSubtitle:
      'Formación continua en tecnologías emergentes, inteligencia artificial, arquitectura cloud, desarrollo móvil y gestión certificada de proyectos.',
    mastersCard: {
      badge: 'POSGRADO EN CURSO • 2025 - 2026',
      title: 'Maestría en Tecnologías de la Información Emergentes',
      focus:
        'Enfoque de Investigación y Desarrollo: Integración y desarrollo de Inteligencia Artificial para automatizar procesos organizacionales y académicos.',
      thesis:
        'Tesis: "Trayecto IA: Plataforma Web con Inteligencia Artificial para la Gestión Académica Universitaria" (Presentada en CIU 2026 UNACH y GDG DevFest 2026).',
    },
    pmCard: {
      badge: 'LIDERAZGO & GESTIÓN CERTIFICADA',
      title: 'Certificado en Gestión de Proyectos & Liderazgo Técnico',
      focus:
        'Cuento con certificaciones oficiales y competencias sólidas para dirigir proyectos de software desde la concepción hasta el despliegue en producción.',
      highlights: [
        'Scrum Master Certificado • Gestión Ágil de Proyectos TI',
        'Android Enterprise Certified Professional & Associate',
        'Google Cloud Computing & Mobile App Development Certified',
      ],
    },
    certifications: [
      {
        year: '2026',
        category: 'IA & Investigación',
        text: 'Constancia de Ponencia: "IA para aprender, enseñar y crear: experiencias desde las tecnologías emergentes" — 4° Seminario Permanente CREN (Expedida el 30 de oct. 2026)',
      },
      {
        year: '2026',
        category: 'IA & Docencia',
        text: 'Constancia de Taller Impartido: "IA en el aula: herramientas prácticas para la docencia" — 57 Aniversario del CREN (Expedida el 30 de oct. 2026)',
      },
      {
        year: '2026',
        category: 'Speaker IA',
        text: 'Conferencista en Google Developer Groups (GDG DevFest 2026): "Trayecto IA, conectando MCP con datos y optimizando procesos mediante Agentic Patterns"',
      },
      {
        year: '2026',
        category: 'Congreso Internacional',
        text: 'Ponente en Congreso Internacional UNACH (CIU 2026): "Trayecto IA Plataforma Web con Inteligencia Artificial para la Gestión Académica Universitaria"',
      },
      {
        year: '2025',
        category: 'Inteligencia Artificial',
        text: 'Desarrollo Web con IA: OpenAI, DeepSeek, JavaScript y Node.js',
      },
      {
        year: '2025',
        category: 'Mobile Enterprise',
        text: 'Android Enterprise Certified Professional',
      },
      {
        year: '2025',
        category: 'Mobile Enterprise',
        text: 'Android Enterprise Certified Associate',
      },
      {
        year: '2024',
        category: 'Cloud & DevOps',
        text: 'Kubernetes & Docker en AWS (Amazon Web Services)',
      },
      {
        year: '2024',
        category: 'ERP & SAP',
        text: 'ABAP para Funcionales — Creación de Reportes Empresariales',
      },
      {
        year: '2022',
        category: 'Grado Universitario',
        text: 'Ingeniero en Computación — Universidad Autónoma del Carmen (UNACAR)',
      },
      {
        year: '2021',
        category: 'Google Certification',
        text: 'Cloud Computing — Google Certification',
      },
      {
        year: '2021',
        category: 'Google Certification',
        text: 'Desarrollo de Apps Móviles — Google Certification',
      },
      {
        year: '2021',
        category: 'Mobile',
        text: 'Flutter Avanzado: Lleva tu conocimiento al siguiente nivel — Udemy',
      },
      {
        year: '2021',
        category: 'Full Stack',
        text: 'React: Aplicaciones en tiempo real con Socket.io — Udemy',
      },
      {
        year: '2020',
        category: 'Gestión de Proyectos',
        text: 'Scrum Master Certificación — Gestión Ágil de Proyectos',
      },
      {
        year: '2020',
        category: 'DevOps & Git',
        text: 'Git de Principiante a Experto: GitHub, GitLab, Azure — Udemy',
      },
      {
        year: '2020',
        category: 'Datos & Analítica',
        text: 'Diplomado Técnico en Big Data — Fundación Carlos Slim',
      },
    ],
    socialTitle: 'Redes Sociales, Comunidad y Contacto Directo',
    socialSubtitle:
      'Conecta conmigo para oportunidades laborales, proyectos freelance (ERP, Facturación, IA, Web & Mobile), consultoría TI o invitaciones a conferencias.',
    youtubeTitle: 'Canal de YouTube y Contenido Destacado',
    interestsTitle: 'Pasiones Fuera del Código',
    interests: ['Arte', 'Música', 'Batería 🥁', 'Divulgación Científica', 'Comunidades Tech (GDG)'],
  },
  en: {
    statusBadge: 'Available for Projects, IT Consulting & Speaking Engagements',
    mastersBadge: "M.Sc. in Emerging Information Technologies",
    heroTitle: 'Efraín May',
    heroSubtitle:
      'Software Engineer • AI & Automation Specialist • Certified Project Manager',
    heroRole:
      'Software Engineer at Dragados Offshore Mexico | Senior IT Consultant & Freelancer',
    heroDescription:
      "Full Stack Software Engineer with extensive experience in modern web technologies, cross-platform and native mobile applications, high-performance backend architectures, and certified project management. Currently pursuing a Master's Degree in Emerging Information Technologies, focusing on Artificial Intelligence integration and development (Agentic Patterns, LLMs, and Model Context Protocol - MCP) to automate business processes and turn real-time data into strategic decisions.",
    ctaPortfolio: 'Explore Portfolio',
    ctaCV: 'Download Resume / CV',
    ctaContact: 'Hire / IT Consulting',
    langSwitchLabel: 'Ver en Español',
    stats: [
      { value: '+6', label: 'Years building enterprise software' },
      { value: '+18', label: 'Web, Mobile, ERP & AI systems deployed' },
      { value: '3', label: 'Keynote Conferences & Congresses in 2026' },
      { value: '+15', label: 'Official Certifications & Credentials' },
    ],
    pillarsTitle: 'Software Architecture, AI & Project Management',
    pillarsSubtitle:
      'Comprehensive technical mastery ranging from user interfaces to cloud infrastructure, artificial intelligence, and engineering team leadership.',
    pillars: [
      {
        icon: IoCodeSlash,
        color: 'blue',
        title: 'Modern Web Technologies',
        badge: 'Frontend & Full Stack',
        desc: 'Development of scalable web applications, SPAs, executive dashboards, and progressive platforms using React, Next.js, Vue.js, Angular, and TypeScript.',
        tags: ['Next.js', 'React', 'Vue.js', 'Angular', 'TypeScript', 'Chakra UI'],
      },
      {
        icon: IoPhonePortraitOutline,
        color: 'purple',
        title: 'Mobile Applications',
        badge: 'iOS & Android',
        desc: 'End-to-end creation and deployment of cross-platform and native mobile apps on Google Play Store featuring real-time GPS tracking, sockets, and payments.',
        tags: ['Flutter', 'Dart', 'Kotlin', 'Android Enterprise', 'Firebase', 'Google Maps'],
      },
      {
        icon: IoServerOutline,
        color: 'green',
        title: 'Backend Development & Cloud',
        badge: 'Architecture & DevOps',
        desc: 'Design of RESTful APIs, microservices, legacy system migrations (VB6 to .NET), mission-critical relational databases, and containerized deployments.',
        tags: ['Node.js', 'Express', '.NET / VB.NET', 'PostgreSQL', 'SQL Server', 'MySQL', 'Docker & AWS'],
      },
      {
        icon: IoSparkles,
        color: 'orange',
        title: 'Artificial Intelligence & Automation',
        badge: "M.Sc. in Emerging IT",
        desc: 'Orchestration of intelligent agents (Agentic Patterns), secure database connectivity via MCP (Model Context Protocol), and workflow automation.',
        tags: ['Agentic Patterns', 'MCP', 'Gemini / OpenAI / DeepSeek', 'Function Calling', 'RAG & Data'],
      },
      {
        icon: IoBriefcaseOutline,
        color: 'teal',
        title: 'Certified Project Management',
        badge: 'Scrum Master & Tech Lead',
        desc: 'Certified and highly competent in IT project management, leading software engineering teams, agile planning, and delivering measurable business value.',
        tags: ['Certified Scrum Master', 'Project Management', 'Technical Leadership', 'Agile / Kanban', 'KPIs'],
      },
      {
        icon: IoAnalyticsOutline,
        color: 'pink',
        title: 'Industrial & Mission-Critical Sectors',
        badge: 'Proven Track Record',
        desc: 'Production-proven solutions for the Oil & Gas / Offshore industry, Operations & Maintenance (O&M), logistics, higher education, and GPS fleet monitoring.',
        tags: ['Oil & Gas / Offshore', 'O&M', 'Logistics', 'GPS Tracking', 'Academic Management'],
      },
    ],
    conferencesTitle: 'Conferences, Research & Scientific Outreach 2026',
    conferencesSubtitle:
      'Active participation as keynote speaker, workshop instructor, and researcher at tech conferences and international congresses on Artificial Intelligence and Emerging Technologies.',
    clickPhotoHint: 'Click on any photo to view full screen',
    conferences: [
      {
        id: 'gdg-2026',
        featured: true,
        badge: 'Google Developer Groups • DevFest 2026',
        colorScheme: 'blue',
        date: 'November 2026',
        location: 'GDG San Francisco de Campeche',
        role: 'Keynote Speaker',
        title:
          'Trayecto IA: Connecting MCP with Data and Optimizing Processes through Agentic Patterns',
        description:
          'Featured conference delivered at Google Developer Groups (DevFest 2026) on evolving from static chatbots to real-time data reasoning systems over PostgreSQL using the Model Context Protocol (MCP), Agentic Patterns (Self-Reflection, Verification, and Function Calling), and resilient cascading hybrid architectures for production.',
        highlights: [
          'Real-time connection of LLMs with relational data via Model Context Protocol (MCP)',
          'Implementation of Agentic Patterns for auditing, reflection, and hallucination-free decision making',
          'Resilient Hybrid Architecture with Cascading Fallback for enterprise and academic production environments',
        ],
        mainImage: '/images/google_dev/principalgdg.jpg',
        gallery: [
          {
            src: '/images/google_dev/principalgdg.jpg',
            caption: 'GDG DevFest 2026 — Keynote: Trayecto IA, connecting MCP with data through Agentic Patterns',
          },
          {
            src: '/images/google_dev/WhatsApp Image 2026-11-14 at 5.43.51 PM.jpeg',
            caption: 'Live demo of the Trayecto IA Institutional Academic Assistant at DevFest 2026',
          },
          {
            src: '/images/google_dev/WhatsApp Image 2026-11-14 at 5.43.51 PM (1).jpeg',
            caption: 'Resilient Hybrid Architecture: Cascading Fallback for Production and MCP Analytics Engine',
          },
          {
            src: '/images/google_dev/WhatsApp Image 2026-11-14 at 5.43.51 PM (2).jpeg',
            caption: 'The Role of LLMs: From Static Chat to Data Reasoning and Function Calling',
          },
        ],
      },
      {
        id: 'cren-uqroo-2026',
        featured: false,
        badge: '57th Anniversary of CREN • UQROO Research Stay',
        colorScheme: 'purple',
        date: 'October 19–23, 2026 (Official Certificates issued October 30, 2026)',
        location: '4th Permanent Seminar on Academic Bodies Research Advances 2026',
        role: 'Speaker & Workshop Instructor',
        title:
          '4th Permanent Seminar on Research Advances of Academic Bodies 2026',
        description:
          'From October 19 to 23, 2026, I participated in the 4th Permanent Seminar on Research Advances of Academic Bodies 2026, within the framework of the 57th Anniversary of CREN and research collaboration with UQROO. I led a hands-on workshop for faculty and students and presented a research paper on emerging technologies.',
        highlights: [
          'Workshop taught: "AI in the Classroom: Practical Tools for Teaching", training teachers and students to effectively use AI tools and engineer their own prompts.',
          'Paper presented: "AI for Learning, Teaching, and Creating: Experiences from Emerging Technologies".',
          'Both participations are backed by official certificates issued on October 30, 2026.',
        ],
        mainImage:
          '/images/UQROO/856009092_28536100006012884_5870211897046560889_n.jpg',
        gallery: [
          {
            src: '/images/UQROO/856009092_28536100006012884_5870211897046560889_n.jpg',
            caption:
              'Presenting at the 4th Permanent Seminar on Research Advances of Academic Bodies 2026 / UQROO Research Stay',
          },
        ],
      },
      {
        id: 'ciu-unach-2026',
        featured: false,
        badge: 'UNACH International Congress • CIU 2026',
        colorScheme: 'teal',
        date: '2026',
        location: 'Autonomous University of Chiapas (UNACH) — CIU 2026',
        role: "Research Speaker / Master's Thesis Presentation",
        title:
          'Trayecto IA: AI-Powered Web Platform for University Academic Management',
        description:
          'Participated in the UNACH International Congress (CIU 2026) presenting my graduate thesis research: "Trayecto IA: Web Platform with Artificial Intelligence for University Academic Management", focused on automating curriculum tracking, predictive institutional analytics, and intelligent academic assistance.',
        highlights: [
          "Master's thesis presentation in Emerging Information Technologies before an international academic committee",
          'Comprehensive platform with agentic AI for student trajectory tracking, academic records, social service, and executive reports',
          'Official recognition as speaker at the CIU 2026 UNACH International University Congress',
        ],
        mainImage:
          '/images/ciu/782169240_1054986534173713_5950153621245399235_n.jpg',
        gallery: [
          {
            src: '/images/ciu/782169240_1054986534173713_5950153621245399235_n.jpg',
            caption:
              'Presenting the "Trayecto IA" thesis project at the UNACH International Congress (CIU 2026)',
          },
          {
            src: '/images/ciu/785583099_27830403563249202_4340585318402364548_n.jpg',
            caption:
              'Main auditorium at the UNACH International Congress (CIU 2026)',
          },
          {
            src: '/images/ciu/785993476_1275877061239387_7150118222439008407_n.jpg',
            caption:
              'Awarding of official certificates to researchers and speakers at CIU 2026',
          },
        ],
      },
    ],
    freelanceTitle: 'Freelance Services & Specialized IT Consulting',
    freelanceSubtitle:
      'End-to-end technological solutions for enterprises, startups, and institutions looking to digitize, integrate, and automate their operations with enterprise-grade quality.',
    freelanceServices: [
      {
        icon: IoLayersOutline,
        color: 'blue',
        title: 'ERP Software Development & Modernization',
        desc: 'Custom design and implementation of ERP systems for inventory control, logistics, operations, HR, fleet management, and migration of legacy systems to modern architectures.',
        bullets: [
          'Operational modules, purchasing, warehousing, and logistics',
          'Migration and modernization of legacy systems (.NET, Node.js, Web)',
          'Role-based access control (RBAC) and full audit trails',
        ],
      },
      {
        icon: IoReceiptOutline,
        color: 'green',
        title: 'Billing & Invoicing System Integrations',
        desc: 'Seamless connection and integration of commercial platforms, ERPs, and POS systems with electronic invoicing engines, payment gateways, and automated accounting reconciliation.',
        bullets: [
          'API integration with electronic billing and tax stamping providers',
          'Automation of fiscal workflows, receipts, and financial reports',
          'Payment gateway synchronization (Mercado Pago, Stripe, banking APIs)',
        ],
      },
      {
        icon: IoAnalyticsOutline,
        color: 'purple',
        title: 'Data Analytics & Artificial Intelligence',
        desc: 'Implementation of intelligent assistants connected to your live databases (MCP), workflow automation with AI agents, executive dashboards, and predictive analytics.',
        bullets: [
          'Enterprise AI Agents connected to SQL Server / PostgreSQL / MySQL',
          'Automated report generation in Excel, PDF, and interactive BI dashboards',
          'Business process optimization powered by LLMs and Agentic Patterns',
        ],
      },
      {
        icon: IoConstructOutline,
        color: 'orange',
        title: 'IT Consulting & Project Management',
        desc: 'Strategic advisory in software architecture, cloud deployment (Docker, AWS, Linux), technical audits, and certified management of web and mobile development projects.',
        bullets: [
          'Project planning, requirements engineering, and Scrum/Agile leadership',
          'Linux server infrastructure, Docker containers, and Cloud deployments',
          'Technical mentoring and corporate training in AI productivity tools',
        ],
      },
    ],
    educationTitle: 'Graduate Studies, Academic Background & Certifications',
    educationSubtitle:
      'Continuous education in emerging technologies, artificial intelligence, cloud architecture, mobile development, and certified project management.',
    mastersCard: {
      badge: 'GRADUATE DEGREE IN PROGRESS • 2025 - 2026',
      title: "Master's Degree in Emerging Information Technologies",
      focus:
        'R&D Focus: Integration and development of Artificial Intelligence to automate organizational and academic processes.',
      thesis:
        'Thesis: "Trayecto IA: AI-Powered Web Platform for University Academic Management" (Presented at CIU 2026 UNACH & GDG DevFest 2026).',
    },
    pmCard: {
      badge: 'CERTIFIED LEADERSHIP & PROJECT MANAGEMENT',
      title: 'Certified in Project Management & Technical Leadership',
      focus:
        'Backed by official certifications and proven competencies to lead software engineering projects from discovery to production deployment.',
      highlights: [
        'Certified Scrum Master • Agile IT Project Management',
        'Android Enterprise Certified Professional & Associate',
        'Google Cloud Computing & Mobile App Development Certified',
      ],
    },
    certifications: [
      {
        year: '2026',
        category: 'AI & Research',
        text: 'Speaker Certificate: "AI for Learning, Teaching, and Creating: Experiences from Emerging Technologies" — 4th Permanent Seminar CREN (Issued Oct 30, 2026)',
      },
      {
        year: '2026',
        category: 'AI & Teaching',
        text: 'Workshop Instructor Certificate: "AI in the Classroom: Practical Tools for Teaching" — 57th Anniversary of CREN (Issued Oct 30, 2026)',
      },
      {
        year: '2026',
        category: 'AI Speaker',
        text: 'Keynote Speaker at Google Developer Groups (GDG DevFest 2026): "Trayecto IA, Connecting MCP with Data and Optimizing Processes through Agentic Patterns"',
      },
      {
        year: '2026',
        category: 'International Congress',
        text: 'Research Speaker at UNACH International Congress (CIU 2026): "Trayecto IA AI-Powered Web Platform for University Academic Management"',
      },
      {
        year: '2025',
        category: 'Artificial Intelligence',
        text: 'Web Development with AI: OpenAI, DeepSeek, JavaScript & Node.js',
      },
      {
        year: '2025',
        category: 'Mobile Enterprise',
        text: 'Android Enterprise Certified Professional',
      },
      {
        year: '2025',
        category: 'Mobile Enterprise',
        text: 'Android Enterprise Certified Associate',
      },
      {
        year: '2024',
        category: 'Cloud & DevOps',
        text: 'Kubernetes & Docker on AWS (Amazon Web Services)',
      },
      {
        year: '2024',
        category: 'ERP & SAP',
        text: 'ABAP for Functional Consultants — Enterprise Report Creation',
      },
      {
        year: '2022',
        category: 'University Degree',
        text: 'B.S. in Computer Engineering — Autonomous University of Carmen (UNACAR)',
      },
      {
        year: '2021',
        category: 'Google Certification',
        text: 'Cloud Computing — Google Certification',
      },
      {
        year: '2021',
        category: 'Google Certification',
        text: 'Mobile App Development — Google Certification',
      },
      {
        year: '2021',
        category: 'Mobile',
        text: 'Advanced Flutter: Take Your Skills to the Next Level — Udemy',
      },
      {
        year: '2021',
        category: 'Full Stack',
        text: 'React: Real-Time Applications with Socket.io — Udemy',
      },
      {
        year: '2020',
        category: 'Project Management',
        text: 'Scrum Master Certification — Agile Project Management',
      },
      {
        year: '2020',
        category: 'DevOps & Git',
        text: 'Git from Beginner to Expert: GitHub, GitLab, Azure — Udemy',
      },
      {
        year: '2020',
        category: 'Data & Analytics',
        text: 'Technical Diploma in Big Data — Carlos Slim Foundation',
      },
    ],
    socialTitle: 'Social Networks, Community & Direct Contact',
    socialSubtitle:
      'Connect with me for career opportunities, freelance projects (ERP, Electronic Billing, AI, Web & Mobile), IT consulting, or speaking invitations.',
    youtubeTitle: 'YouTube Channel & Featured Content',
    interestsTitle: 'Passions Beyond Code',
    interests: ['Art', 'Music', 'Drums 🥁', 'Scientific Outreach', 'Tech Communities (GDG)'],
  },
}

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    user: 'in/efraindev',
    href: 'https://www.linkedin.com/in/efraindev/',
    icon: IoLogoLinkedin,
    color: '#0A66C2',
    badgeEs: 'Red Profesional',
    badgeEn: 'Professional Network',
  },
  {
    name: 'YouTube',
    user: '@EfraínMay',
    href: 'https://www.youtube.com/@Efra%C3%ADnMay/videos',
    icon: IoLogoYoutube,
    color: '#FF0000',
    badgeEs: 'Tutoriales & Tech',
    badgeEn: 'Tutorials & Tech',
  },
  {
    name: 'Instagram',
    user: '@efraincode',
    href: 'https://www.instagram.com/efraincode/',
    icon: IoLogoInstagram,
    color: '#E1306C',
    badgeEs: 'Contenido Dev',
    badgeEn: 'Dev Content',
  },
  {
    name: 'Facebook',
    user: 'Efrain.May',
    href: 'https://www.facebook.com/Efrain.May/',
    icon: IoLogoFacebook,
    color: '#1877F2',
    badgeEs: 'Comunidad',
    badgeEn: 'Community',
  },
  {
    name: 'GitHub',
    user: '@efraindrummer',
    href: 'https://github.com/efraindrummer',
    icon: IoLogoGithub,
    color: '#6e5494',
    badgeEs: 'Open Source & Código',
    badgeEn: 'Open Source & Code',
  },
]

const SectionHeading = ({ badge, title, subtitle }) => {
  const headingColor = useColorModeValue('gray.900', 'white')
  const subColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Box mb={8}>
      {badge && (
        <Badge
          colorScheme="brand"
          variant="subtle"
          px={3}
          py={1}
          borderRadius="full"
          fontSize="xs"
          fontWeight="700"
          letterSpacing="0.05em"
          mb={3}
        >
          {badge}
        </Badge>
      )}
      <Heading
        as="h2"
        fontSize={{ base: '2xl', md: '3xl' }}
        color={headingColor}
        fontWeight="800"
        letterSpacing="-0.03em"
        mb={2}
      >
        {title}
      </Heading>
      {subtitle && (
        <Text fontSize={{ base: 'sm', md: 'md' }} color={subColor} maxW="3xl" lineHeight="1.7">
          {subtitle}
        </Text>
      )}
      <Box
        mt={3}
        h="3px"
        w="70px"
        bgGradient="linear(to-r, brand.500, purple.500)"
        borderRadius="full"
      />
    </Box>
  )
}

export default function Home() {
  const { lang, toggleLanguage } = useLanguage()
  const t = CONTENT[lang] || CONTENT.es

  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const heroBg = useColorModeValue(
    'linear-gradient(135deg, rgba(238,242,255,0.9) 0%, rgba(255,255,255,0.95) 50%, rgba(243,232,255,0.75) 100%)',
    'linear-gradient(135deg, rgba(18,20,40,0.92) 0%, rgba(12,12,24,0.96) 55%, rgba(35,20,55,0.85) 100%)'
  )
  const heroBorder = useColorModeValue('brand.100', 'whiteAlpha.200')
  const headingColor = useColorModeValue('gray.900', 'white')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const mutedColor = useColorModeValue('gray.600', 'gray.400')
  const cardBg = useColorModeValue('rgba(255,255,255,0.82)', 'rgba(18,18,32,0.75)')
  const cardBorder = useColorModeValue('gray.200', 'whiteAlpha.150')
  const subtleBg = useColorModeValue('gray.50', 'whiteAlpha.50')
  const highlightBg = useColorModeValue('brand.50', 'rgba(92,124,250,0.12)')
  const highlightText = useColorModeValue('brand.700', 'brand.200')

  return (
    <Box>
      {/* ── HERO SECTION ───────────────────────────────────────────── */}
      <MotionBox
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        bg={heroBg}
        border="1px solid"
        borderColor={heroBorder}
        borderRadius="3xl"
        p={{ base: 6, md: 10, lg: 12 }}
        mb={12}
        position="relative"
        overflow="hidden"
        boxShadow={useColorModeValue(
          '0 20px 60px rgba(76, 110, 245, 0.08)',
          '0 20px 60px rgba(0, 0, 0, 0.45)'
        )}
      >
        {/* Top Row: Status + Language Switcher Pill */}
        <Flex
          justify="space-between"
          align="center"
          wrap="wrap"
          gap={3}
          mb={6}
        >
          <HStack spacing={2} flexWrap="wrap">
            <Badge
              colorScheme="green"
              variant="subtle"
              px={3}
              py={1.5}
              borderRadius="full"
              fontSize="xs"
              fontWeight="700"
              display="flex"
              alignItems="center"
              gap={1.5}
            >
              <Box as="span" w={2} h={2} borderRadius="full" bg="green.400" />
              {t.statusBadge}
            </Badge>
            <Badge
              colorScheme="purple"
              variant="subtle"
              px={3}
              py={1.5}
              borderRadius="full"
              fontSize="xs"
              fontWeight="700"
              display="flex"
              alignItems="center"
              gap={1.5}
            >
              <Icon as={IoSchoolOutline} />
              {t.mastersBadge}
            </Badge>
          </HStack>

          <Button
            onClick={toggleLanguage}
            size="sm"
            variant="outline"
            colorScheme="brand"
            borderRadius="full"
            leftIcon={<Icon as={IoGlobeOutline} />}
            fontWeight="700"
          >
            {lang === 'es' ? '🇺🇸 English Version' : '🇲🇽 Versión en Español'}
          </Button>
        </Flex>

        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align={{ base: 'center', lg: 'flex-start' }}
          gap={{ base: 8, lg: 10 }}
        >
          {/* Profile Photos Column */}
          <VStack spacing={4} flexShrink={0}>
            <Box
              p="4px"
              borderRadius="3xl"
              bgGradient="linear(135deg, brand.400, purple.500, teal.400)"
              boxShadow="0 20px 45px rgba(76, 110, 245, 0.25)"
            >
              <Box borderRadius="2xl" overflow="hidden" bg="gray.900">
                <ProfileImage
                  src="/images/google_dev/principalgdg.jpg"
                  alt="Efraín May - Speaker & Software Engineer"
                  width="260"
                  height="260"
                  style={{
                    width: '240px',
                    height: '240px',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                  }}
                />
              </Box>
            </Box>
            <HStack spacing={2}>
              <Badge colorScheme="blue" borderRadius="full" px={3} py={1} fontSize="11px">
                GDG Speaker 2026
              </Badge>
              <Badge colorScheme="teal" borderRadius="full" px={3} py={1} fontSize="11px">
                CIU UNACH 2026
              </Badge>
            </HStack>
          </VStack>

          {/* Bio & CTAs Column */}
          <VStack
            align={{ base: 'center', lg: 'flex-start' }}
            textAlign={{ base: 'center', lg: 'left' }}
            spacing={4}
            flex={1}
          >
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: '3xl', md: '5xl' }}
                color={headingColor}
                fontWeight="800"
                letterSpacing="-0.04em"
                lineHeight="1.1"
              >
                {t.heroTitle}
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'xl' }}
                bgGradient="linear(to-r, brand.500, purple.500)"
                bgClip="text"
                fontWeight="800"
                mt={1}
              >
                {t.heroSubtitle}
              </Text>
              <Text
                fontSize={{ base: 'sm', md: 'md' }}
                color={mutedColor}
                fontWeight="600"
                mt={1}
              >
                {t.heroRole}
              </Text>
            </Box>

            <Text
              fontSize={{ base: 'sm', md: 'md' }}
              color={textColor}
              lineHeight="1.8"
              maxW="3xl"
            >
              {t.heroDescription}
            </Text>

            {/* Core Specialty Badges */}
            <Flex
              wrap="wrap"
              gap={2}
              justify={{ base: 'center', lg: 'flex-start' }}
              pt={1}
            >
              {[
                'Full Stack Web & Mobile',
                'Agentic AI & MCP',
                'ERP & Sistemas de Facturación',
                'Project Management Certified',
                'Data Analytics & BI',
                'Cloud & DevOps',
              ].map(tag => (
                <Badge
                  key={tag}
                  bg={highlightBg}
                  color={highlightText}
                  px={3}
                  py={1.5}
                  borderRadius="full"
                  fontSize="xs"
                  fontWeight="700"
                >
                  {tag}
                </Badge>
              ))}
            </Flex>

            {/* Primary CTA Buttons */}
            <Flex
              wrap="wrap"
              gap={3}
              pt={2}
              justify={{ base: 'center', lg: 'flex-start' }}
            >
              <Button
                as={NextLink}
                href="/works"
                size="lg"
                colorScheme="brand"
                rightIcon={<ChevronRightIcon />}
                borderRadius="xl"
                boxShadow="0 10px 25px rgba(76, 110, 245, 0.3)"
              >
                {t.ctaPortfolio}
              </Button>
              <Button
                as="a"
                href="#freelance-services"
                size="lg"
                variant="outline"
                colorScheme="brand"
                borderRadius="xl"
              >
                {t.ctaContact}
              </Button>
              <Button
                as="a"
                href="https://www.dropbox.com/s/8l0axe4qee8ea0j/Curriculum%20CV%20Simple%20Blanco%20y%20Negro.pdf?dl=0"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="ghost"
                rightIcon={<ExternalLinkIcon />}
                borderRadius="xl"
              >
                {t.ctaCV}
              </Button>
            </Flex>

            {/* Direct Social Links Bar in Hero */}
            <HStack
              spacing={2}
              pt={2}
              flexWrap="wrap"
              justify={{ base: 'center', lg: 'flex-start' }}
            >
              {SOCIAL_LINKS.map(s => (
                <Button
                  key={s.name}
                  as="a"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  variant="solid"
                  bg={cardBg}
                  color={headingColor}
                  border="1px solid"
                  borderColor={cardBorder}
                  borderRadius="xl"
                  leftIcon={<Icon as={s.icon} color={s.color} boxSize={4} />}
                  _hover={{
                    transform: 'translateY(-2px)',
                    borderColor: 'brand.400',
                    boxShadow: 'md',
                  }}
                >
                  {s.name}
                </Button>
              ))}
            </HStack>
          </VStack>
        </Flex>

        {/* Stats Row */}
        <SimpleGrid
          columns={{ base: 2, md: 4 }}
          gap={4}
          mt={10}
          pt={8}
          borderTop="1px solid"
          borderColor={cardBorder}
        >
          {t.stats.map((st, idx) => (
            <Box
              key={idx}
              textAlign="center"
              p={3}
              borderRadius="2xl"
              bg={subtleBg}
            >
              <Text
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight="800"
                bgGradient="linear(to-r, brand.500, purple.500)"
                bgClip="text"
              >
                {st.value}
              </Text>
              <Text fontSize="xs" color={mutedColor} fontWeight="600" mt={1}>
                {st.label}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </MotionBox>

      {/* ── CONFERENCES, RESEARCH & SPEAKING 2026 ──────────────────── */}
      <Section delay={0.1}>
        <Box mb={16} id="conferences-2026">
          <SectionHeading
            badge={lang === 'es' ? 'DESTACADO 2026 • CONFERENCIAS & TESIS' : 'FEATURED 2026 • SPEAKING & RESEARCH'}
            title={t.conferencesTitle}
            subtitle={t.conferencesSubtitle}
          />

          <VStack spacing={8} align="stretch">
            {t.conferences.map(conf => (
              <Box
                key={conf.id}
                bg={cardBg}
                backdropFilter="blur(16px)"
                border="1px solid"
                borderColor={conf.featured ? 'brand.400' : cardBorder}
                borderRadius="3xl"
                p={{ base: 5, md: 8 }}
                boxShadow={
                  conf.featured
                    ? '0 20px 50px rgba(76, 110, 245, 0.14)'
                    : '0 10px 30px rgba(0, 0, 0, 0.06)'
                }
                transition="all 0.25s ease"
              >
                <SimpleGrid columns={{ base: 1, lg: 12 }} gap={8} alignItems="center">
                  {/* Image & Gallery Column */}
                  <Box gridColumn={{ lg: 'span 6' }}>
                    <Box
                      position="relative"
                      borderRadius="2xl"
                      overflow="hidden"
                      cursor="pointer"
                      role="group"
                      onClick={() =>
                        setSelectedPhoto({
                          src: conf.mainImage,
                          caption: conf.title,
                        })
                      }
                      border="1px solid"
                      borderColor={cardBorder}
                      h={{ base: '250px', sm: '330px', md: '360px' }}
                    >
                      <Image
                        src={conf.mainImage}
                        alt={conf.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{
                          objectFit: 'cover',
                          objectPosition: 'center',
                        }}
                      />
                      <Box
                        position="absolute"
                        inset={0}
                        bg="blackAlpha.400"
                        opacity={0}
                        _groupHover={{ opacity: 1 }}
                        transition="opacity 0.2s"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <HStack
                          bg="blackAlpha.800"
                          color="white"
                          px={4}
                          py={2}
                          borderRadius="full"
                          spacing={2}
                        >
                          <Icon as={IoExpandOutline} />
                          <Text fontSize="xs" fontWeight="700">
                            {t.clickPhotoHint}
                          </Text>
                        </HStack>
                      </Box>
                    </Box>

                    {/* Thumbnails if gallery has > 1 image */}
                    {conf.gallery.length > 1 && (
                      <SimpleGrid columns={conf.gallery.length} gap={2.5} mt={3}>
                        {conf.gallery.map((img, i) => (
                          <Box
                            key={i}
                            position="relative"
                            h={{ base: '58px', md: '72px' }}
                            borderRadius="xl"
                            overflow="hidden"
                            cursor="pointer"
                            border="2px solid"
                            borderColor={i === 0 ? 'brand.400' : 'transparent'}
                            opacity={0.9}
                            _hover={{ opacity: 1, transform: 'scale(1.03)' }}
                            transition="all 0.2s"
                            onClick={() => setSelectedPhoto(img)}
                          >
                            <Image
                              src={img.src}
                              alt={img.caption}
                              fill
                              sizes="140px"
                              style={{ objectFit: 'cover' }}
                            />
                          </Box>
                        ))}
                      </SimpleGrid>
                    )}
                  </Box>

                  {/* Text Details Column */}
                  <VStack
                    gridColumn={{ lg: 'span 6' }}
                    align="flex-start"
                    spacing={4}
                  >
                    <HStack spacing={2} flexWrap="wrap">
                      <Badge
                        colorScheme={conf.colorScheme}
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize="xs"
                        fontWeight="700"
                      >
                        {conf.badge}
                      </Badge>
                      <Badge
                        variant="outline"
                        colorScheme={conf.colorScheme}
                        px={2.5}
                        py={1}
                        borderRadius="full"
                        fontSize="xs"
                      >
                        <HStack spacing={1}>
                          <Icon as={IoMicOutline} />
                          <Text>{conf.role}</Text>
                        </HStack>
                      </Badge>
                    </HStack>

                    <Heading
                      as="h3"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      color={headingColor}
                      fontWeight="800"
                      lineHeight="1.25"
                    >
                      {conf.title}
                    </Heading>

                    <HStack
                      spacing={4}
                      fontSize="xs"
                      color={mutedColor}
                      fontWeight="600"
                      flexWrap="wrap"
                    >
                      <HStack spacing={1.5}>
                        <Icon as={IoCalendarOutline} color="brand.400" />
                        <Text>{conf.date}</Text>
                      </HStack>
                      <HStack spacing={1.5}>
                        <Icon as={IoLocationOutline} color="brand.400" />
                        <Text>{conf.location}</Text>
                      </HStack>
                    </HStack>

                    <Text fontSize="sm" color={textColor} lineHeight="1.75">
                      {conf.description}
                    </Text>

                    <VStack align="flex-start" spacing={2} pt={1} w="full">
                      {conf.highlights.map((hl, idx) => (
                        <HStack key={idx} align="flex-start" spacing={2.5}>
                          <Icon
                            as={IoCheckmarkCircle}
                            color={`${conf.colorScheme}.400`}
                            boxSize={4}
                            mt={1}
                            flexShrink={0}
                          />
                          <Text fontSize="xs" color={textColor} lineHeight="1.6" fontWeight="500">
                            {hl}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>
                  </VStack>
                </SimpleGrid>
              </Box>
            ))}
          </VStack>
        </Box>
      </Section>

      {/* ── CORE PILLARS (WEB, MOBILE, BACKEND, AI, PM) ────────────── */}
      <Section delay={0.15}>
        <Box mb={16}>
          <SectionHeading
            badge={lang === 'es' ? 'ESPECIALIZACIÓN TÉCNICA' : 'TECHNICAL EXPERTISE'}
            title={t.pillarsTitle}
            subtitle={t.pillarsSubtitle}
          />

          <StaggerContainer>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
              {t.pillars.map((pillar, idx) => (
                <StaggerItem key={idx}>
                  <GlassCard p={6} h="full" display="flex" flexDirection="column" justifyContent="space-between">
                    <Box>
                      <Flex justify="space-between" align="center" mb={4}>
                        <Flex
                          w={12}
                          h={12}
                          borderRadius="2xl"
                          bg={`${pillar.color}.500`}
                          color="white"
                          align="center"
                          justify="center"
                          boxShadow="md"
                        >
                          <Icon as={pillar.icon} boxSize={6} />
                        </Flex>
                        <Badge
                          colorScheme={pillar.color}
                          variant="subtle"
                          borderRadius="full"
                          px={3}
                          py={1}
                          fontSize="11px"
                        >
                          {pillar.badge}
                        </Badge>
                      </Flex>

                      <Heading as="h3" fontSize="lg" color={headingColor} mb={2}>
                        {pillar.title}
                      </Heading>

                      <Text fontSize="sm" color={textColor} lineHeight="1.7" mb={4}>
                        {pillar.desc}
                      </Text>
                    </Box>

                    <Flex wrap="wrap" gap={1.5} pt={2}>
                      {pillar.tags.map(tag => (
                        <Badge
                          key={tag}
                          variant="outline"
                          colorScheme={pillar.color}
                          fontSize="10px"
                          px={2}
                          py={0.5}
                          borderRadius="md"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </Flex>
                  </GlassCard>
                </StaggerItem>
              ))}
            </SimpleGrid>
          </StaggerContainer>
        </Box>
      </Section>

      {/* ── FREELANCE & IT CONSULTING SERVICES ─────────────────────── */}
      <Section delay={0.2}>
        <Box mb={16} id="freelance-services">
          <SectionHeading
            badge={lang === 'es' ? 'SOLUCIONES FREELANCE & EMPRESARIALES' : 'FREELANCE & ENTERPRISE SOLUTIONS'}
            title={t.freelanceTitle}
            subtitle={t.freelanceSubtitle}
          />

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
            {t.freelanceServices.map((srv, idx) => (
              <Box
                key={idx}
                bg={cardBg}
                backdropFilter="blur(16px)"
                border="1px solid"
                borderColor={cardBorder}
                borderRadius="2xl"
                p={6}
                transition="all 0.25s"
                _hover={{
                  transform: 'translateY(-4px)',
                  borderColor: 'brand.400',
                  boxShadow: 'xl',
                }}
              >
                <HStack spacing={4} mb={4}>
                  <Flex
                    w={12}
                    h={12}
                    borderRadius="xl"
                    bg={`${srv.color}.500`}
                    color="white"
                    align="center"
                    justify="center"
                    flexShrink={0}
                  >
                    <Icon as={srv.icon} boxSize={6} />
                  </Flex>
                  <Heading as="h3" fontSize="lg" color={headingColor}>
                    {srv.title}
                  </Heading>
                </HStack>

                <Text fontSize="sm" color={textColor} lineHeight="1.7" mb={4}>
                  {srv.desc}
                </Text>

                <VStack align="flex-start" spacing={2}>
                  {srv.bullets.map((b, i) => (
                    <HStack key={i} spacing={2} align="flex-start">
                      <Icon
                        as={IoCheckmarkCircle}
                        color={`${srv.color}.400`}
                        boxSize={4}
                        mt={0.5}
                        flexShrink={0}
                      />
                      <Text fontSize="xs" color={mutedColor} fontWeight="600">
                        {b}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Section>

      {/* ── WORK EXPERIENCE TIMELINE ───────────────────────────────── */}
      <Section delay={0.2}>
        <Box mb={16}>
          <Timeline />
        </Box>
      </Section>

      {/* ── GRADUATE STUDIES, PROJECT MANAGEMENT & CERTIFICATIONS ──── */}
      <Section delay={0.25}>
        <Box mb={16}>
          <SectionHeading
            badge={lang === 'es' ? 'POSGRADO & CERTIFICACIONES' : 'GRADUATE STUDIES & CERTIFICATIONS'}
            title={t.educationTitle}
            subtitle={t.educationSubtitle}
          />

          {/* Highlight Cards: Master's Degree + Project Management Certification */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6} mb={8}>
            {/* Master's Card */}
            <Box
              bgGradient={useColorModeValue(
                'linear(135deg, brand.50, purple.50)',
                'linear(135deg, rgba(76,110,245,0.16), rgba(128,90,213,0.16))'
              )}
              border="1px solid"
              borderColor="brand.400"
              borderRadius="2xl"
              p={6}
            >
              <HStack spacing={2} mb={3}>
                <Icon as={IoSchoolOutline} color="brand.400" boxSize={5} />
                <Badge colorScheme="purple" borderRadius="full" px={3} py={0.5} fontSize="xs">
                  {t.mastersCard.badge}
                </Badge>
              </HStack>
              <Heading as="h3" fontSize="xl" color={headingColor} mb={2}>
                {t.mastersCard.title}
              </Heading>
              <Text fontSize="sm" color={textColor} fontWeight="600" mb={2} lineHeight="1.7">
                {t.mastersCard.focus}
              </Text>
              <Text fontSize="xs" color={mutedColor} lineHeight="1.6">
                {t.mastersCard.thesis}
              </Text>
            </Box>

            {/* Certified Project Management Card */}
            <Box
              bgGradient={useColorModeValue(
                'linear(135deg, teal.50, blue.50)',
                'linear(135deg, rgba(49,151,149,0.16), rgba(49,130,206,0.16))'
              )}
              border="1px solid"
              borderColor="teal.400"
              borderRadius="2xl"
              p={6}
            >
              <HStack spacing={2} mb={3}>
                <Icon as={IoRibbonOutline} color="teal.400" boxSize={5} />
                <Badge colorScheme="teal" borderRadius="full" px={3} py={0.5} fontSize="xs">
                  {t.pmCard.badge}
                </Badge>
              </HStack>
              <Heading as="h3" fontSize="xl" color={headingColor} mb={2}>
                {t.pmCard.title}
              </Heading>
              <Text fontSize="sm" color={textColor} mb={3} lineHeight="1.7">
                {t.pmCard.focus}
              </Text>
              <VStack align="flex-start" spacing={1.5}>
                {t.pmCard.highlights.map((h, i) => (
                  <HStack key={i} spacing={2}>
                    <Icon as={IoCheckmarkCircle} color="teal.400" boxSize={4} />
                    <Text fontSize="xs" fontWeight="700" color={headingColor}>
                      {h}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </Box>
          </SimpleGrid>

          {/* Certifications Grid */}
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
            {t.certifications.map((cert, idx) => (
              <Box
                key={idx}
                bg={cardBg}
                border="1px solid"
                borderColor={cert.year === '2026' ? 'brand.400' : cardBorder}
                borderRadius="xl"
                p={4}
                transition="all 0.2s"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
              >
                <HStack justify="space-between" mb={1.5}>
                  <Badge
                    colorScheme={cert.year === '2026' ? 'purple' : 'brand'}
                    borderRadius="full"
                    px={2.5}
                    py={0.5}
                    fontSize="xs"
                    fontFamily="mono"
                  >
                    {cert.year}
                  </Badge>
                  <Badge variant="subtle" colorScheme="gray" fontSize="10px" borderRadius="md">
                    {cert.category}
                  </Badge>
                </HStack>
                <Text fontSize="sm" fontWeight="600" color={headingColor} lineHeight="1.5">
                  {cert.text}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Section>

      {/* ── SOCIAL NETWORKS & YOUTUBE CONTENT ──────────────────────── */}
      <Section delay={0.3}>
        <Box mb={12}>
          <SectionHeading
            badge={lang === 'es' ? 'CONECTEMOS' : "LET'S CONNECT"}
            title={t.socialTitle}
            subtitle={t.socialSubtitle}
          />

          <SimpleGrid columns={{ base: 1, sm: 2, lg: 5 }} gap={4} mb={10}>
            {SOCIAL_LINKS.map(social => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                p={5}
                borderRadius="2xl"
                bg={cardBg}
                backdropFilter="blur(16px)"
                border="1px solid"
                borderColor={cardBorder}
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: 'xl',
                  borderColor: 'brand.400',
                  textDecoration: 'none',
                }}
                transition="all 0.2s"
              >
                <Flex justify="space-between" align="center" mb={3}>
                  <Icon as={social.icon} boxSize={8} color={social.color} />
                  <ExternalLinkIcon color={mutedColor} />
                </Flex>
                <Box>
                  <Badge
                    colorScheme="gray"
                    fontSize="10px"
                    mb={1}
                    borderRadius="full"
                  >
                    {lang === 'es' ? social.badgeEs : social.badgeEn}
                  </Badge>
                  <Text fontWeight="800" color={headingColor} fontSize="md">
                    {social.name}
                  </Text>
                  <Text fontSize="xs" color={mutedColor} noOfLines={1}>
                    {social.user}
                  </Text>
                </Box>
              </Link>
            ))}
          </SimpleGrid>

          {/* Featured YouTube Content */}
          <Box mb={10}>
            <Flex justify="space-between" align="center" mb={4} wrap="wrap" gap={2}>
              <Heading as="h3" size="md" color={headingColor}>
                {t.youtubeTitle}
              </Heading>
              <Button
                as="a"
                href="https://www.youtube.com/@Efra%C3%ADnMay/videos"
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                colorScheme="red"
                leftIcon={<Icon as={IoLogoYoutube} />}
                borderRadius="xl"
              >
                {lang === 'es' ? 'Ver Canal @EfraínMay' : 'Watch @EfraínMay Channel'}
              </Button>
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
              <GridItem
                href="https://www.youtube.com/watch?v=u5PKQMYhYRk&t=3s"
                title="Flutter ChatApp & Real-Time Maps"
                thumbnail={thumbYouTubeChatApp}
              >
                {lang === 'es'
                  ? 'Desarrollo móvil en tiempo real en mi canal de YouTube'
                  : 'Real-time mobile development on my YouTube channel'}
              </GridItem>
              <GridItem
                href="https://www.youtube.com/watch?v=LafxuUXgvuQ"
                title="Giphy App — Angular & REST APIs"
                thumbnail={thumbAngularGiphyAPI}
              >
                {lang === 'es'
                  ? 'Arquitectura web moderna y consumo de APIs en Angular'
                  : 'Modern web architecture and API consumption in Angular'}
              </GridItem>
            </SimpleGrid>
          </Box>

          <Divider mb={8} />

          {/* Personal Interests */}
          <Box>
            <Heading as="h3" size="sm" color={mutedColor} mb={3} textTransform="uppercase" letterSpacing="0.06em">
              {t.interestsTitle}
            </Heading>
            <HStack spacing={3} flexWrap="wrap">
              {t.interests.map(interest => (
                <Badge
                  key={interest}
                  variant="subtle"
                  colorScheme="brand"
                  fontSize="sm"
                  px={4}
                  py={1.5}
                  fontWeight="600"
                  borderRadius="full"
                >
                  {interest}
                </Badge>
              ))}
            </HStack>
          </Box>
        </Box>
      </Section>

      {/* ── PHOTO LIGHTBOX MODAL ───────────────────────────────────── */}
      <Modal
        isOpen={!!selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        size="4xl"
        isCentered
      >
        <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(8px)" />
        <ModalContent bg="gray.900" color="white" borderRadius="2xl" overflow="hidden">
          <ModalCloseButton
            bg="blackAlpha.700"
            color="white"
            borderRadius="full"
            zIndex={10}
            _hover={{ bg: 'blackAlpha.900' }}
          />
          <ModalBody p={0}>
            {selectedPhoto && (
              <Box>
                <Box position="relative" w="100%" h={{ base: '340px', md: '560px' }} bg="black">
                  <Image
                    src={selectedPhoto.src}
                    alt={selectedPhoto.caption || 'Conference photo'}
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
                {selectedPhoto.caption && (
                  <Box p={4} bg="gray.900" borderTop="1px solid" borderColor="whiteAlpha.200">
                    <Text fontSize="sm" fontWeight="600" textAlign="center" color="gray.200">
                      {selectedPhoto.caption}
                    </Text>
                  </Box>
                )}
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}
