'use client'

import {
  Container,
  Box,
  Text,
  Flex,
  SimpleGrid,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiDart,
  SiKotlin,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiFlutter,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiDocker,
  SiKubernetes,
  SiAmazonaws,
  SiLinux,
  SiGit,
} from 'react-icons/si'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

// ─── Data ────────────────────────────────────────────────────────────────────

const stack = [
  {
    label: 'LENGUAJES',
    items: [
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Dart', icon: SiDart },
      { name: 'Python', icon: SiPython },
      { name: 'Kotlin', icon: SiKotlin },
      { name: 'SQL', icon: null },
      { name: 'VB.NET', icon: null },
    ],
  },
  {
    label: 'FRONTEND',
    items: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Vue.js', icon: SiVuedotjs },
      { name: 'Angular', icon: SiAngular },
    ],
  },
  {
    label: 'MOBILE',
    items: [
      { name: 'Flutter', icon: SiFlutter },
      { name: 'Kotlin Native', icon: SiKotlin },
    ],
  },
  {
    label: 'BACKEND',
    items: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: null },
      { name: 'Sequelize', icon: null },
      { name: 'TypeORM', icon: null },
    ],
  },
  {
    label: 'BASES DE DATOS',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'SQL Server', icon: null },
      { name: 'Firebase', icon: SiFirebase },
    ],
  },
  {
    label: 'DEVOPS & CLOUD',
    items: [
      { name: 'Docker', icon: SiDocker },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'AWS', icon: SiAmazonaws },
      { name: 'Linux', icon: SiLinux },
      { name: 'Git', icon: SiGit },
    ],
  },
]

const principles = [
  {
    number: '01',
    title: 'Build for observability',
    desc: 'Log, monitoreo y alertas antes de que el sistema falle en producción. Si no puedes medirlo, no puedes mejorarlo.',
  },
  {
    number: '02',
    title: 'Own the full context',
    desc: 'De DB schema a UI mobile — no existe "eso no es mi parte". El ingeniero senior entiende el sistema completo.',
  },
  {
    number: '03',
    title: 'Automate the repetitive',
    desc: 'Si algo se ejecuta más de dos veces, se automatiza o se documenta. El tiempo es el recurso más escaso.',
  },
  {
    number: '04',
    title: 'Readable over clever',
    desc: 'El código se lee diez veces más de lo que se escribe. La claridad es la característica más importante.',
  },
]

const metrics = [
  { value: '5+', label: 'años en producción' },
  { value: '7', label: 'empresas' },
  { value: '17+', label: 'proyectos entregados' },
  { value: '20+', label: 'tecnologías' },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

const TechChip = ({ icon, name }) => {
  const bg = useColorModeValue('gray.50', 'gray.900')
  const border = useColorModeValue('gray.200', 'gray.800')
  const color = useColorModeValue('gray.700', 'gray.300')
  const iconColor = useColorModeValue('gray.500', 'gray.400')

  return (
    <Flex
      align="center"
      gap={1.5}
      px={2.5}
      py="6px"
      bg={bg}
      border="1px solid"
      borderColor={border}
      borderRadius="7px"
      fontSize="12px"
      fontWeight="500"
      color={color}
      transition="border-color 0.15s"
      _hover={{ borderColor: useColorModeValue('gray.400', 'gray.600') }}
    >
      {icon && <Icon as={icon} boxSize="12px" color={iconColor} flexShrink={0} />}
      {name}
    </Flex>
  )
}

const DomainGroup = ({ label, items, delay }) => {
  const labelColor = useColorModeValue('gray.400', 'gray.600')

  return (
    <MotionBox
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, delay, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Text
        fontFamily="mono"
        fontSize="10px"
        fontWeight="700"
        color={labelColor}
        letterSpacing="0.12em"
        textTransform="uppercase"
        mb={2.5}
      >
        {label}
      </Text>
      <Flex flexWrap="wrap" gap={2}>
        {items.map(item => (
          <TechChip key={item.name} icon={item.icon} name={item.name} />
        ))}
      </Flex>
    </MotionBox>
  )
}

const Principle = ({ number, title, desc, delay }) => {
  const numberColor = useColorModeValue('gray.300', 'gray.700')
  const titleColor = useColorModeValue('gray.900', 'white')
  const descColor = useColorModeValue('gray.500', 'gray.400')
  const borderColor = useColorModeValue('gray.100', 'gray.800')

  return (
    <MotionBox
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, delay, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      borderTop="1px solid"
      borderColor={borderColor}
      pt={5}
    >
      <Flex gap={4}>
        <Text
          fontFamily="mono"
          fontSize="12px"
          fontWeight="700"
          color={numberColor}
          flexShrink={0}
          mt="2px"
          letterSpacing="0.04em"
        >
          {number}
        </Text>
        <Box>
          <Text
            fontSize="15px"
            fontWeight="600"
            color={titleColor}
            letterSpacing="-0.015em"
            mb={1.5}
          >
            {title}
          </Text>
          <Text fontSize="13px" color={descColor} lineHeight="1.65">
            {desc}
          </Text>
        </Box>
      </Flex>
    </MotionBox>
  )
}

const SectionDivider = ({ children }) => {
  const color = useColorModeValue('gray.900', 'white')
  const lineColor = useColorModeValue('gray.100', 'gray.800')

  return (
    <Flex align="center" gap={5} mb={8}>
      <Text
        fontSize={{ base: 'lg', md: 'xl' }}
        fontWeight="700"
        color={color}
        letterSpacing="-0.025em"
        whiteSpace="nowrap"
      >
        {children}
      </Text>
      <Box flex={1} h="1px" bg={lineColor} />
    </Flex>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Coding() {
  const headingColor = useColorModeValue('gray.900', 'white')
  const subColor = useColorModeValue('gray.500', 'gray.400')
  const metricValueColor = useColorModeValue('gray.900', 'white')
  const metricLabelColor = useColorModeValue('gray.400', 'gray.600')
  const metricBorder = useColorModeValue('gray.100', 'gray.800')
  const terminalBg = useColorModeValue('gray.900', '#0d0d0d')
  const promptColor = '#22c55e'
  const terminalText = '#e5e7eb'
  const terminalMuted = '#6b7280'

  return (
    <Container maxW="container.lg" pt={6} pb={20}>

      {/* ── Header ── */}
      <MotionBox
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        mb={14}
      >
        <Text
          fontFamily="mono"
          fontSize="11px"
          fontWeight="600"
          color={promptColor}
          letterSpacing="0.1em"
          textTransform="uppercase"
          mb={3}
        >
          ~/efrain-may — stack & expertise
        </Text>
        <Text
          as="h1"
          fontSize={{ base: '2xl', md: '3xl' }}
          fontWeight="700"
          color={headingColor}
          letterSpacing="-0.035em"
          lineHeight="1.15"
          mb={3}
        >
          Ingeniero Full Stack
        </Text>
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          color={subColor}
          lineHeight="1.7"
          maxW="520px"
        >
          5 años construyendo software en producción para los sectores petrolero,
          logística, O&M y mobile. De VB6 legacy a arquitecturas cloud-native.
        </Text>
      </MotionBox>

      {/* ── Metrics ── */}
      <SimpleGrid columns={[2, 4]} gap={0} mb={16} borderTop="1px solid" borderBottom="1px solid" borderColor={metricBorder}>
        {metrics.map((m, i) => (
          <MotionBox
            key={m.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
            py={7}
            px={5}
            borderRight={i < metrics.length - 1 ? '1px solid' : 'none'}
            borderColor={metricBorder}
          >
            <Text
              fontSize={{ base: '2xl', md: '3xl' }}
              fontWeight="700"
              color={metricValueColor}
              letterSpacing="-0.04em"
              lineHeight="1"
              mb={1}
            >
              {m.value}
            </Text>
            <Text fontFamily="mono" fontSize="10px" color={metricLabelColor} fontWeight="600" letterSpacing="0.06em" textTransform="uppercase">
              {m.label}
            </Text>
          </MotionBox>
        ))}
      </SimpleGrid>

      {/* ── Stack ── */}
      <Box mb={16}>
        <SectionDivider>Stack tecnológico</SectionDivider>
        <SimpleGrid columns={[1, 2, 3]} gap={8}>
          {stack.map((group, i) => (
            <DomainGroup
              key={group.label}
              label={group.label}
              items={group.items}
              delay={i * 0.06}
            />
          ))}
        </SimpleGrid>
      </Box>

      {/* ── Terminal snippet ── */}
      <MotionBox
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        mb={16}
        bg={terminalBg}
        borderRadius="14px"
        overflow="hidden"
        fontFamily="mono"
        fontSize="13px"
        lineHeight="1.7"
      >
        {/* Window chrome */}
        <Flex align="center" gap={2} px={5} py={3} borderBottom="1px solid rgba(255,255,255,0.06)">
          {['#ff5f57', '#ffbd2e', '#28c840'].map(c => (
            <Box key={c} w="12px" h="12px" borderRadius="full" bg={c} opacity={0.8} />
          ))}
          <Text ml={3} fontSize="11px" color={terminalMuted} letterSpacing="0.04em">
            bash — efrain@dev
          </Text>
        </Flex>

        {/* Content */}
        <Box p={6}>
          {[
            { prompt: '$', cmd: 'whoami', out: 'efrain-may · software-engineer' },
            { prompt: '$', cmd: 'cat skills.json | jq ".focus"', out: '["full-stack", "mobile", "enterprise", "devops"]' },
            { prompt: '$', cmd: 'git log --oneline -5', out: `feat: migrate VB6 ERP → .NET 8 + Clean Architecture
fix: optimize SQL Server queries (1.2s → 90ms)
feat: deploy Flutter app to Play Store & App Store
feat: implement Docker + K8s CI/CD pipeline
refactor: extract microservice from monolith (Node.js)` },
            { prompt: '$', cmd: 'echo $CURRENT_ROLE', out: 'Software Developer @ Dragados Offshore Mexico' },
          ].map(({ prompt, cmd, out }, i) => (
            <Box key={i} mb={i < 3 ? 5 : 0}>
              <Flex align="baseline" gap={2}>
                <Text color={promptColor} flexShrink={0}>{prompt}</Text>
                <Text color={terminalText}>{cmd}</Text>
              </Flex>
              {out.split('\n').map((line, j) => (
                <Text key={j} color={terminalMuted} ml={4}>{line}</Text>
              ))}
            </Box>
          ))}
          <Flex align="center" gap={2} mt={5}>
            <Text color={promptColor}>$</Text>
            <Box w="8px" h="15px" bg={promptColor} opacity={0.7} borderRadius="1px" />
          </Flex>
        </Box>
      </MotionBox>

      {/* ── Principles ── */}
      <Box>
        <SectionDivider>Principios de ingeniería</SectionDivider>
        <Flex direction="column" gap={0}>
          {principles.map((p, i) => (
            <Principle
              key={p.number}
              number={p.number}
              title={p.title}
              desc={p.desc}
              delay={i * 0.07}
            />
          ))}
          {/* bottom border */}
          <Box borderTop="1px solid" borderColor={metricBorder} mt={0} />
        </Flex>
      </Box>

    </Container>
  )
}
