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

const MotionBox = motion(Box)

// ── Knowledge base ──────────────────────────────────────────────
const KB = {
  sobre: `Soy **Efrain May**, tengo 27 años y soy Ingeniero en Computación por la Universidad Autónoma del Carmen (2022). Trabajo en el mundo del desarrollo de software desde 2021. Actualmente soy Desarrollador de Software en **Dragados Offshore México**.`,

  experiencia: `Mi trayectoria laboral:
• **Nov 2024 – Actual** → Dragados Offshore México (VB6, .NET, SQL Server)
• **Nov 2023 – Nov 2024** → 42A Corporativo — Desarrollador Web (Node.js, MySQL, Docker)
• **Feb 2023 – Ago 2023** → Delmer — Líder de Desarrollo (Kotlin, Flutter, Firebase)
• **Mar 2022 – Mar 2023** → SUD Solutions — Software Developer (Node.js, Flutter, TypeScript)
• **Jun 2021 – Sep 2023** → Irium — Ingeniero de Soporte TI (Linux)
• **Oct 2020 – Dic 2020** → Tuprop — Software Developer (ReactJS)`,

  skills: `Mis habilidades técnicas:
• **Flutter** 90% | **Node.js** 85% | **Visual Basic** 100%
• **MySQL** 80% | **Ubuntu/Linux** 80% | **Kali Linux** 80%
• **SQL Server** 75% | **JavaScript** 60% | **Firebase** 60%
• **Android (Kotlin)** 60% | **Angular** 50% | **Next.js** 50%`,

  proyectos: `Algunos proyectos destacados:
• **Lidos Pizza** (2023) — App delivery completa con Vue, Flutter, Firebase, Mercado Pago
• **MI TAXI** (2023) — App de taxis con Kotlin y Google Maps
• **Nuup ERP** (2024) — Sistema ERP interno con Node.js, Docker, MySQL
• **Mar de Amor** (2025) — Web para charcutería premium con Vue.js y Docker
• **Carretino Consultores** (2025) — SPA contable con Next.js 15 y TypeScript
• **ERP Dragados Offshore** (2025) — Migración VB6 → .NET
• **Seguridad360** (2022) — App mobile de monitoreo GPS en Flutter
• **Snapp** (2020) — App estilo Uber, Líder Técnico del proyecto

Puedes ver todos en la sección *Works*.`,

  certificaciones: `Mis certificaciones y formación:
• 2025 → Desarrollo Web con IA (OpenAI, DeepSeek, JS, Node.js)
• 2025 → Android Enterprise Certified Professional
• 2025 → Android Enterprise Certified Associate
• 2024 → Kubernetes & Docker en AWS
• 2024 → ABAP Para funcionales
• 2022 → Ingeniero en Computación — UNACAR
• 2021 → Cloud Computing — Google
• 2021 → Desarrollo de Apps Móviles — Google
• 2021 → Flutter Avanzado — Udemy
• 2020 → Scrum Master — Udemy
• 2020 → Big Data — Fundación Carlos Slim`,

  contacto: `Puedes contactarme por:
• **WhatsApp:** [+52 938 116 9411](https://wa.me/529381169411)
• **Email:** [efrain_may_75@hotmail.com](mailto:efrain_may_75@hotmail.com)
• **GitHub:** [@efraindrummer](https://github.com/efraindrummer)
• **Instagram:** [@efracode](https://www.instagram.com/efraincode/)
• **Twitter:** [@efraindrummer7](https://twitter.com/efraindrummer7)`,

  intereses: `Fuera del código me apasionan el **Arte**, la **Música** y tocar la **Batería** 🥁. También comparto contenido en YouTube sobre programación.`,

  flutter: `Flutter es mi stack principal (90%). He desarrollado varias apps publicadas en Google Play como Seguridad360, Sud Monitoreo y Control, y MI TAXI. También soy Líder Técnico del proyecto Snapp (app tipo Uber para LATAM).`,

  node: `Node.js es mi backend preferido (85%). Lo he usado con Express, Sequelize, TypeORM, MySQL y PostgreSQL en proyectos como el ERP Nuup, Lidos Pizza y SUD Solutions.`,

  web: `En web trabajo con **React, Next.js, Vue.js, Angular y TypeScript**. Algunos proyectos: Carretino Consultores (Next.js 15), Mar de Amor (Vue.js), Tuprop (ReactJS) y esta misma web personal.`,

  mobile: `He desarrollado apps móviles con Flutter (iOS/Android) y Kotlin. Tengo apps en Google Play: Seguridad360, Sud Monitoreo y Control, MI TAXI (pasajero y conductor).`,

  cv: `Puedes descargar mi CV completo desde el botón en la sección principal de la página, o pedirme el link directamente por WhatsApp o email.`,

  empresa: `Actualmente trabajo en **Dragados Offshore México** como Desarrollador de Software, migrando código heredado de VB6 a .NET Framework y optimizando sistemas ERP del sector offshore/petrolero.`,

  default: `No estoy seguro de entender tu pregunta 😅. Puedes preguntarme sobre mi **experiencia**, **proyectos**, **skills**, **certificaciones** o **contacto**. ¡Intenta con una de las sugerencias de abajo!`,
}

const SUGGESTIONS = [
  { label: '👤 Sobre mí', key: 'sobre' },
  { label: '💼 Experiencia', key: 'experiencia' },
  { label: '🛠 Skills', key: 'skills' },
  { label: '🚀 Proyectos', key: 'proyectos' },
  { label: '🎓 Certificaciones', key: 'certificaciones' },
  { label: '📬 Contacto', key: 'contacto' },
]

// ── Simple intent resolver ───────────────────────────────────────
function resolve(input) {
  const q = input.toLowerCase()

  if (/flutter|dart|mobile|movil|móvil|app/.test(q)) return KB.flutter
  if (/node|backend|express|sequelize/.test(q)) return KB.node
  if (/web|react|next|vue|angular|typescript|frontend/.test(q)) return KB.web
  if (/android|kotlin|google play/.test(q)) return KB.mobile
  if (/empresa|trabaj|actual|offshore|dragados/.test(q)) return KB.empresa
  if (/cv|curriculum|descargar/.test(q)) return KB.cv
  if (/contacto|email|whatsapp|correo|gmail|hotmail|teléfono|telefono/.test(q)) return KB.contacto
  if (/proyect|work|portafolio|portfolio|lidos|taxi|nuup|snapp|seguridad/.test(q)) return KB.proyectos
  if (/skill|tecnolog|conocimiento|sabe|domina/.test(q)) return KB.skills
  if (/certific|diploma|estudios|universidad|unacar|académic|formación/.test(q)) return KB.certificaciones
  if (/experiencia|trabajo|empresa|historial|trayector/.test(q)) return KB.experiencia
  if (/interés|interes|hobby|música|batería|arte|personal/.test(q)) return KB.intereses
  if (/quién|quien|sobre|acerca|presentat|eres|name|nombre/.test(q)) return KB.sobre
  if (/hola|buenos|buenas|hey|hi|hello/.test(q)) return `¡Hola! 👋 Soy el asistente de **Efrain May**. Puedo contarte sobre su experiencia, proyectos, skills o cómo contactarlo. ¿Qué te gustaría saber?`

  return KB.default
}

// ── Markdown-lite renderer ───────────────────────────────────────
function renderText(text, linkColor) {
  const lines = text.split('\n')
  return lines.map((line, i) => {
    // Parse bold + links inline
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

// ── Icons ────────────────────────────────────────────────────────
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

// ── Message bubble ───────────────────────────────────────────────
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

// ── Main component ───────────────────────────────────────────────
export default function ContactBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: '¡Hola! 👋 Soy el asistente de **Efrain May**. Pregúntame cualquier cosa sobre su experiencia, proyectos, skills o cómo contactarlo.' },
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

  function send(text) {
    const trimmed = text.trim()
    if (!trimmed) return
    setInput('')
    setMessages(prev => [...prev, { from: 'user', text: trimmed }])
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [...prev, { from: 'bot', text: resolve(trimmed) }])
    }, 700)
  }

  function handleKey(e) {
    if (e.key === 'Enter') send(input)
  }

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
            w={{ base: '320px', sm: '360px' }}
            bg={cardBg}
            borderRadius="2xl"
            border="1px solid"
            borderColor={borderColor}
            boxShadow="0 24px 64px rgba(0,0,0,0.22), 0 4px 16px rgba(0,0,0,0.1)"
            overflow="hidden"
            display="flex"
            flexDirection="column"
            h="480px"
          >
            {/* Header */}
            <Box bgGradient="linear(135deg, brand.700, brand.400)" px={4} py={3} flexShrink={0}>
              <HStack justify="space-between">
                <HStack spacing={3}>
                  <Avatar size="sm" name="Efrain May" bg="whiteAlpha.300" color="white" fontWeight="bold" />
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="700" color="white" fontSize="sm">Efrain May</Text>
                    <HStack spacing={1}>
                      <Box w={1.5} h={1.5} bg="green.300" borderRadius="full" />
                      <Text fontSize="10px" color="whiteAlpha.800">Asistente virtual</Text>
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
              css={{ '&::-webkit-scrollbar': { width: '4px' }, '&::-webkit-scrollbar-thumb': { background: 'rgba(128,128,128,0.3)', borderRadius: '4px' } }}
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
                {SUGGESTIONS.map(s => (
                  <WrapItem key={s.key}>
                    <Button
                      size="xs"
                      variant="outline"
                      borderColor={suggBorder}
                      color={suggText}
                      fontWeight="500"
                      borderRadius="full"
                      _hover={{ bg: suggHover, borderColor: 'brand.400' }}
                      onClick={() => send(s.key)}
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
                  placeholder="Escribe tu pregunta..."
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
