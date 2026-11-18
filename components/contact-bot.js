'use client'

import { useState, useRef, useEffect } from 'react'
import {
  Box,
  VStack,
  HStack,
  Text,
  Link,
  Avatar,
  useColorModeValue,
  Input,
  IconButton,
  Flex,
  Wrap,
  WrapItem,
  Button,
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../lib/language-context'

const MotionBox = motion(Box)

const KB_ES = {
  sobre: `Soy **Efraín May**, Ingeniero en Computación (UNACAR, 2022) y actualmente curso la **Maestría en Tecnologías de la Información Emergentes**, enfocándome en la integración y desarrollo de **Inteligencia Artificial** para automatizar procesos. Soy Ingeniero de Software en **Dragados Offshore México**, Project Manager Certificado, Conferencista y Consultor TI Freelance.`,

  conferencias: `Mis conferencias y congresos destacados en **2026**:
• **Google Developer Groups (GDG DevFest 2026)** → Conferencia: *"Trayecto IA, conectando MCP con datos y optimizando procesos mediante Agentic Patterns"*.
• **4° Seminario Permanente CREN / Estancia UQROO (19-23 oct 2026)** → Taller *"IA en el aula: herramientas prácticas para la docencia"* y Ponencia *"IA para aprender, enseñar y crear: experiencias desde las tecnologías emergentes"* (Constancias expedidas el 30 de oct 2026).
• **Congreso Internacional UNACH (CIU 2026)** → Presentación de tesis: *"Trayecto IA: Plataforma Web con Inteligencia Artificial para la Gestión Académica Universitaria"*.`,

  freelance: `Como **Freelancer y Consultor TI**, ofrezco soluciones especializadas en:
• **Software ERP a medida** y modernización de sistemas empresariales
• **Integraciones en Sistemas de Facturación** electrónica y pasarelas de pago
• **Análisis de Datos e Inteligencia Artificial** (Agentes IA, MCP, automatización de reportes)
• **Consultoría TI y Gestión de Proyectos** (Web, Mobile, Cloud & Linux)`,

  experiencia: `Mi trayectoria laboral:
• **Nov 2024 – Actual** → Dragados Offshore México (VB6, .NET, SQL Server, ERP)
• **2021 – Actual** → Consultor TI, Desarrollador ERP, Facturación e IA (Freelance)
• **Nov 2023 – Nov 2024** → 42A Corporativo — Desarrollador Web ERP NUUP (Node.js, MySQL, Docker)
• **Feb 2023 – Ago 2023** → Delmer — Líder de Desarrollo & Project Manager (Kotlin, Flutter, Firebase)
• **Mar 2022 – Mar 2023** → SUD Solutions — Software Developer (Node.js, Flutter, TypeScript, PostgreSQL)
• **Jun 2021 – Sep 2023** → Irium — Ingeniero de Soporte TI (Linux)`,

  certificaciones: `Formación y certificaciones destacadas:
• **2025-2026** → Maestría en Tecnologías de la Información Emergentes
• **2026** → Constancias oficiales como Ponente y Tallerista en 4° Seminario Permanente CREN, CIU 2026 UNACH y GDG DevFest 2026
• **2025** → Desarrollo Web con IA (OpenAI, DeepSeek, JS, Node.js)
• **2025** → Android Enterprise Certified Professional & Associate
• **2024** → Kubernetes & Docker en AWS | ABAP para funcionales
• **2021** → Google Cloud Computing & Mobile App Development Certified
• **2020** → Scrum Master Certificado (Gestión de Proyectos) & Big Data`,

  contacto: `Conecta conmigo en mis redes oficiales:
• **LinkedIn:** [in/efraindev](https://www.linkedin.com/in/efraindev/)
• **YouTube:** [@EfraínMay](https://www.youtube.com/@Efra%C3%ADnMay/videos)
• **Instagram:** [@efraincode](https://www.instagram.com/efraincode/)
• **Facebook:** [Efrain.May](https://www.facebook.com/Efrain.May/)
• **WhatsApp:** [+52 938 116 9411](https://wa.me/529381169411)
• **Email:** [efrain_may_75@hotmail.com](mailto:efrain_may_75@hotmail.com)`,

  default: `¡Hola! Puedo contarte sobre mis **conferencias 2026 (GDG, CIU UNACH, CREN/UQROO)**, mi **Maestría en TI Emergentes e IA**, mis **servicios freelance (ERP, Facturación, IA, Consultoría TI)**, mi **experiencia** o mis **redes sociales**. ¡Elige una opción abajo!`,
}

const KB_EN = {
  sobre: `I'm **Efraín May**, Computer Engineer (UNACAR, 2022) currently pursuing a **Master's Degree in Emerging Information Technologies**, focusing on **Artificial Intelligence** integration and business process automation. I work as a Software Engineer at **Dragados Offshore Mexico**, Certified Project Manager, Tech Speaker, and Senior Freelance IT Consultant.`,

  conferencias: `My featured **2026 conferences & academic research**:
• **Google Developer Groups (GDG DevFest 2026)** → Keynote: *"Trayecto IA: Connecting MCP with Data and Optimizing Processes through Agentic Patterns"*.
• **4th Permanent Research Seminar CREN / UQROO (Oct 19-23, 2026)** → Workshop *"AI in the Classroom: Practical Tools for Teaching"* & Paper *"AI for Learning, Teaching, and Creating: Experiences from Emerging Technologies"* (Certified Oct 30, 2026).
• **UNACH International Congress (CIU 2026)** → Master's Thesis Presentation: *"Trayecto IA: AI-Powered Web Platform for University Academic Management"*.`,

  freelance: `As a **Freelancer & IT Consultant**, I specialize in:
• **Custom ERP Software** & legacy system modernization
• **Electronic Billing & Invoicing Integrations** and payment gateways
• **Data Analytics & Artificial Intelligence** (AI Agents, MCP, workflow automation)
• **IT Consulting & Certified Project Management** (Web, Mobile, Cloud & Linux)`,

  experiencia: `My professional career:
• **Nov 2024 – Present** → Dragados Offshore Mexico (VB6, .NET, SQL Server, ERP)
• **2021 – Present** → Freelance IT Consultant, ERP, Billing & AI Developer
• **Nov 2023 – Nov 2024** → 42A Corporativo — Full Stack Developer NUUP ERP (Node.js, MySQL, Docker)
• **Feb 2023 – Aug 2023** → Delmer — Development Lead & Project Manager (Kotlin, Flutter, Firebase)
• **Mar 2022 – Mar 2023** → SUD Solutions — Software Developer (Node.js, Flutter, TypeScript, PostgreSQL)
• **Jun 2021 – Sep 2023** → Irium — IT Support & Linux Engineer`,

  certificaciones: `Education & Certifications:
• **2025-2026** → M.Sc. in Emerging Information Technologies
• **2026** → Official Speaker & Workshop Instructor Certificates at CREN 57th Anniversary, CIU 2026 UNACH & GDG DevFest 2026
• **2025** → Web Development with AI (OpenAI, DeepSeek, JS, Node.js)
• **2025** → Android Enterprise Certified Professional & Associate
• **2024** → Kubernetes & Docker on AWS | SAP ABAP Reporting
• **2021** → Google Cloud Computing & Mobile Development Certified
• **2020** → Certified Scrum Master (Project Management) & Big Data`,

  contacto: `Connect with me on my official channels:
• **LinkedIn:** [in/efraindev](https://www.linkedin.com/in/efraindev/)
• **YouTube:** [@EfraínMay](https://www.youtube.com/@Efra%C3%ADnMay/videos)
• **Instagram:** [@efraincode](https://www.instagram.com/efraincode/)
• **Facebook:** [Efrain.May](https://www.facebook.com/Efrain.May/)
• **WhatsApp:** [+52 938 116 9411](https://wa.me/529381169411)
• **Email:** [efrain_may_75@hotmail.com](mailto:efrain_may_75@hotmail.com)`,

  default: `Hi! I can tell you about my **2026 Conferences (GDG, CIU UNACH, CREN/UQROO)**, my **Master's in Emerging IT & AI**, **Freelance Services (ERP, Billing, AI, IT Consulting)**, **Work Experience**, or **Social Links**. Pick a suggestion below!`,
}

const SUGGESTIONS = {
  es: [
    { label: '👤 Sobre mí & Maestría', key: 'sobre' },
    { label: '🎤 Conferencias 2026', key: 'conferencias' },
    { label: '🚀 Freelance & ERP/IA', key: 'freelance' },
    { label: '💼 Experiencia', key: 'experiencia' },
    { label: '🎓 Certificaciones & PM', key: 'certificaciones' },
    { label: '📬 Redes & Contacto', key: 'contacto' },
  ],
  en: [
    { label: "👤 About & Master's", key: 'sobre' },
    { label: '🎤 2026 Conferences', key: 'conferencias' },
    { label: '🚀 Freelance & ERP/AI', key: 'freelance' },
    { label: '💼 Experience', key: 'experiencia' },
    { label: '🎓 Certifications & PM', key: 'certificaciones' },
    { label: '📬 Socials & Contact', key: 'contacto' },
  ],
}

function resolve(input, lang) {
  const q = input.toLowerCase()
  const kb = lang === 'en' ? KB_EN : KB_ES

  if (q === 'sobre' || /quién|quien|sobre|acerca|maestr|master|ia|ai/.test(q)) return kb.sobre
  if (q === 'conferencias' || /conferenc|gdg|google|ciu|unach|cren|uqroo|seminario|tesis|trayecto/.test(q))
    return kb.conferencias
  if (q === 'freelance' || /freelanc|erp|facturac|billing|consultor|servicio|datos|data/.test(q))
    return kb.freelance
  if (q === 'experiencia' || /experiencia|trabajo|empresa|dragados|delmer|sud/.test(q))
    return kb.experiencia
  if (q === 'certificaciones' || /certific|scrum|project|gestion|gestión|aws|android/.test(q))
    return kb.certificaciones
  if (q === 'contacto' || /contacto|linkedin|youtube|instagram|facebook|whatsapp|email/.test(q))
    return kb.contacto

  return kb.default
}

function renderText(text, linkColor) {
  const lines = text.split('\n')
  return lines.map((line, i) => {
    const parts = []
    let remaining = line
    let key = 0

    while (remaining.length > 0) {
      const boldMatch = remaining.match(/\*\*(.+?)\*\*/)
      const linkMatch = remaining.match(/\[(.+?)\]\((.+?)\)/)

      const boldIdx = boldMatch ? remaining.indexOf(boldMatch[0]) : Infinity
      const linkIdx = linkMatch ? remaining.indexOf(linkMatch[0]) : Infinity

      if (boldIdx === Infinity && linkIdx === Infinity) {
        parts.push(<span key={key++}>{remaining}</span>)
        break
      }

      if (boldIdx <= linkIdx) {
        if (boldIdx > 0) parts.push(<span key={key++}>{remaining.slice(0, boldIdx)}</span>)
        parts.push(<strong key={key++}>{boldMatch[1]}</strong>)
        remaining = remaining.slice(boldIdx + boldMatch[0].length)
      } else {
        if (linkIdx > 0) parts.push(<span key={key++}>{remaining.slice(0, linkIdx)}</span>)
        parts.push(
          <Link key={key++} href={linkMatch[2]} isExternal color={linkColor} fontWeight="600">
            {linkMatch[1]}
          </Link>
        )
        remaining = remaining.slice(linkIdx + linkMatch[0].length)
      }
    }

    const isBullet = line.startsWith('•')
    return (
      <Text key={i} fontSize="sm" lineHeight="1.7" pl={isBullet ? 2 : 0}>
        {parts}
      </Text>
    )
  })
}

const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
)

const PersonIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
)

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
)

function Bubble({ msg, linkColor }) {
  const botBg = useColorModeValue('gray.100', 'whiteAlpha.100')
  const userBg = 'brand.500'

  if (msg.from === 'user') {
    return (
      <Flex justify="flex-end">
        <Box bg={userBg} color="white" px={4} py={2} borderRadius="2xl" borderBottomRightRadius="sm" maxW="80%">
          <Text fontSize="sm">{msg.text}</Text>
        </Box>
      </Flex>
    )
  }

  return (
    <Flex justify="flex-start" align="flex-end" gap={2}>
      <Avatar size="xs" name="EM" bg="brand.500" color="white" fontSize="9px" flexShrink={0} mb="2px" />
      <Box bg={botBg} px={4} py={3} borderRadius="2xl" borderBottomLeftRadius="sm" maxW="85%">
        <VStack align="start" spacing={1}>
          {renderText(msg.text, linkColor)}
        </VStack>
      </Box>
    </Flex>
  )
}

export default function ContactBot() {
  const { lang } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text:
        lang === 'en'
          ? "Hi! 👋 I'm **Efraín May's** AI assistant. Ask me about his 2026 conferences (GDG, CIU UNACH, CREN), Master's in AI, ERP & billing services, or contact info."
          : '¡Hola! 👋 Soy el asistente de **Efraín May**. Pregúntame sobre sus conferencias 2026 (GDG, CIU UNACH, CREN), Maestría en IA, servicios ERP/Facturación o redes sociales.',
    },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef(null)

  const cardBg = useColorModeValue('white', '#12121f')
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100')
  const inputBg = useColorModeValue('gray.50', 'whiteAlpha.50')
  const inputBorder = useColorModeValue('gray.200', 'whiteAlpha.200')
  const linkColor = useColorModeValue('brand.600', 'brand.300')
  const suggBorder = useColorModeValue('gray.200', 'whiteAlpha.200')
  const suggHover = useColorModeValue('brand.50', 'whiteAlpha.100')
  const suggText = useColorModeValue('gray.700', 'gray.300')
  const fabBgClosed = 'linear(135deg, brand.600, brand.400)'
  const fabBgOpen = useColorModeValue('gray.200', 'whiteAlpha.200')

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  function send(text, displayLabel) {
    const trimmed = text.trim()
    if (!trimmed) return
    setInput('')
    setMessages(prev => [...prev, { from: 'user', text: displayLabel || trimmed }])
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [...prev, { from: 'bot', text: resolve(trimmed, lang) }])
    }, 500)
  }

  function handleKey(e) {
    if (e.key === 'Enter') send(input)
  }

  const currentSuggestions = SUGGESTIONS[lang] || SUGGESTIONS.es

  return (
    <Box
      position="fixed"
      bottom={{ base: '20px', md: '30px' }}
      right={{ base: '20px', md: '30px' }}
      zIndex={9999}
    >
      <AnimatePresence>
        {isOpen && (
          <MotionBox
            key="chat"
            initial={{ opacity: 0, y: 24, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.93 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            mb={4}
            w={{ base: '320px', sm: '370px' }}
            bg={cardBg}
            borderRadius="2xl"
            border="1px solid"
            borderColor={borderColor}
            boxShadow="0 24px 64px rgba(0,0,0,0.22), 0 4px 16px rgba(0,0,0,0.1)"
            overflow="hidden"
            display="flex"
            flexDirection="column"
            h="490px"
          >
            {/* Header */}
            <Box bgGradient="linear(135deg, brand.700, purple.500)" px={4} py={3} flexShrink={0}>
              <HStack justify="space-between">
                <HStack spacing={3}>
                  <Avatar size="sm" name="Efraín May" bg="whiteAlpha.300" color="white" fontWeight="bold" />
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="700" color="white" fontSize="sm">
                      Efraín May
                    </Text>
                    <HStack spacing={1}>
                      <Box w={1.5} h={1.5} bg="green.300" borderRadius="full" />
                      <Text fontSize="10px" color="whiteAlpha.800">
                        {lang === 'en' ? 'Virtual Assistant' : 'Asistente Virtual'}
                      </Text>
                    </HStack>
                  </VStack>
                </HStack>
                <IconButton
                  size="xs"
                  variant="ghost"
                  color="whiteAlpha.800"
                  _hover={{ bg: 'whiteAlpha.200', color: 'white' }}
                  icon={<CloseIcon />}
                  aria-label="Cerrar"
                  onClick={() => setIsOpen(false)}
                />
              </HStack>
            </Box>

            {/* Messages */}
            <VStack
              flex={1}
              overflowY="auto"
              spacing={3}
              p={4}
              align="stretch"
              css={{
                '&::-webkit-scrollbar': { width: '4px' },
                '&::-webkit-scrollbar-thumb': {
                  background: 'rgba(128,128,128,0.3)',
                  borderRadius: '4px',
                },
              }}
            >
              {messages.map((msg, i) => (
                <Bubble key={i} msg={msg} linkColor={linkColor} />
              ))}

              {typing && (
                <Flex align="flex-end" gap={2}>
                  <Avatar size="xs" name="EM" bg="brand.500" color="white" fontSize="9px" mb="2px" />
                  <Box bg={inputBg} px={4} py={3} borderRadius="2xl" borderBottomLeftRadius="sm">
                    <HStack spacing={1}>
                      {[0, 1, 2].map(i => (
                        <MotionBox
                          key={i}
                          w={1.5}
                          h={1.5}
                          bg="gray.400"
                          borderRadius="full"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
                        />
                      ))}
                    </HStack>
                  </Box>
                </Flex>
              )}
              <div ref={bottomRef} />
            </VStack>

            {/* Suggestions */}
            <Box px={3} pb={2} flexShrink={0}>
              <Wrap spacing={1}>
                {currentSuggestions.map(s => (
                  <WrapItem key={s.key}>
                    <Button
                      size="xs"
                      variant="outline"
                      borderColor={suggBorder}
                      color={suggText}
                      fontWeight="500"
                      borderRadius="full"
                      _hover={{ bg: suggHover, borderColor: 'brand.400' }}
                      onClick={() => send(s.key, s.label)}
                    >
                      {s.label}
                    </Button>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>

            {/* Input */}
            <Box px={3} pb={3} flexShrink={0}>
              <HStack
                bg={inputBg}
                border="1px solid"
                borderColor={inputBorder}
                borderRadius="xl"
                px={3}
                py={1}
              >
                <Input
                  variant="unstyled"
                  placeholder={lang === 'en' ? 'Ask a question...' : 'Escribe tu pregunta...'}
                  fontSize="sm"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKey}
                />
                <IconButton
                  size="sm"
                  colorScheme="brand"
                  borderRadius="lg"
                  icon={<SendIcon />}
                  aria-label="Enviar"
                  isDisabled={!input.trim()}
                  onClick={() => send(input)}
                />
              </HStack>
            </Box>
          </MotionBox>
        )}
      </AnimatePresence>

      {/* FAB */}
      <MotionBox whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }} display="flex" justifyContent="flex-end">
        <Box
          as="button"
          onClick={() => setIsOpen(p => !p)}
          w={14}
          h={14}
          bgGradient={isOpen ? undefined : fabBgClosed}
          bg={isOpen ? fabBgOpen : undefined}
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="white"
          boxShadow="0 8px 30px rgba(76, 110, 245, 0.4)"
          border="none"
          cursor="pointer"
          transition="all 0.3s"
          aria-label="Chat"
        >
          {isOpen ? <CloseIcon /> : <PersonIcon />}
        </Box>
      </MotionBox>
    </Box>
  )
}
