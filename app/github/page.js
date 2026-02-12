'use client'

import {
  Box,
  Flex,
  Text,
  VStack,
  Heading,
  Avatar,
  Spinner,
  SimpleGrid,
  Button,
  Image,
  Select,
  useColorModeValue,
  HStack,
  Container,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Badge,
  Divider,
  Link,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaGithub,
  FaUsers,
  FaCodeBranch,
  FaStar,
  FaCode,
  FaBookmark,
} from 'react-icons/fa'
import { GlassCard } from '../../components/glass-card'
import {
  StaggerContainer,
  StaggerItem,
} from '../../components/animations'

const MotionBox = motion(Box)

const Github = () => {
  const borderColor = useColorModeValue('rgba(255,255,255,0.3)', 'rgba(255,255,255,0.08)')
  const headingColor = useColorModeValue('gray.800', 'white')
  const accentColor = useColorModeValue('brand.600', 'brand.400')
  const statBg = useColorModeValue('gray.50', 'gray.700')
  const bgImage = useColorModeValue('github-light', 'github-dark')
  const streakTheme = useColorModeValue('default', 'dark')
  const streakBg = useColorModeValue('ffffff', '1a202c')
  const streakStroke = useColorModeValue('2d3748', 'e2e8f0')
  const streakRing = useColorModeValue('4c6ef5', '748ffc')
  const streakFire = useColorModeValue('4c6ef5', '748ffc')
  const streakLabel = useColorModeValue('2d3748', 'e2e8f0')
  const trophyTheme = useColorModeValue('flat', 'onedark')
  const textColor = useColorModeValue('gray.600', 'gray.300')

  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState(null)
  const [error, setError] = useState(null)
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())

  const perPage = 9
  const username = 'efraindrummer'
  const years = Array.from(
    { length: 6 },
    (_, i) => new Date().getFullYear() - i
  )

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => setError(err.message))

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${perPage}&page=1`
    )
      .then(res => {
        if (!res.ok) throw new Error('Error al obtener datos de GitHub')
        return res.json()
      })
      .then(data => {
        setRepos(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading)
    return <Spinner size="xl" mt={20} mx="auto" display="block" />
  if (error)
    return (
      <Box textAlign="center" mt={10}>
        <Text fontSize="lg" color="red.500" fontWeight="bold">
          {error}
        </Text>
      </Box>
    )

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={10} align="stretch" w="full">
        {/* Header */}
        <MotionBox
          textAlign="center"
          mb={6}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heading
            as="h1"
            fontSize={{ base: '2xl', md: '4xl' }}
            mb={3}
            color={headingColor}
            fontWeight="700"
          >
            Actividad en GitHub
          </Heading>
          <Text fontSize="lg" color={textColor}>
            Repositorios, estadísticas y contribuciones al código abierto
          </Text>
        </MotionBox>

        {profile && (
          <GlassCard p={8} mb={6}>
            <SimpleGrid
              templateColumns={{ base: '1fr', md: 'auto 1fr' }}
              gap={8}
              alignItems="center"
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 },
                }}
              >
                <Avatar
                  size="2xl"
                  src={profile.avatar_url}
                  name={profile.name}
                  border="4px solid"
                  borderColor={borderColor}
                  boxShadow="lg"
                />
              </motion.div>
              <VStack
                align={{ base: 'center', md: 'flex-start' }}
                spacing={3}
              >
                <Heading size="xl" color={headingColor}>
                  {profile.name || 'Efrain May'}
                </Heading>
                <HStack>
                  <FaGithub />
                  <Text color={accentColor} fontWeight="600">
                    @{profile.login}
                  </Text>
                </HStack>
                <Text
                  color={textColor}
                  textAlign={{ base: 'center', md: 'left' }}
                >
                  {profile.bio ||
                    'Ingeniero de Software especializado en desarrollo Full Stack'}
                </Text>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={profile.html_url}
                    target="_blank"
                    _hover={{ textDecoration: 'none' }}
                  >
                    <Button colorScheme="brand" size="md" borderRadius="xl">
                      Ver Perfil Completo
                    </Button>
                  </Link>
                </motion.div>
              </VStack>
            </SimpleGrid>

            <Divider my={6} />
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
              {[
                {
                  label: 'Repositorios',
                  value: profile.public_repos,
                  icon: FaCode,
                  help: 'Públicos',
                },
                {
                  label: 'Seguidores',
                  value: profile.followers,
                  icon: FaUsers,
                  help: 'Followers',
                },
                {
                  label: 'Siguiendo',
                  value: profile.following,
                  icon: FaUsers,
                  help: 'Following',
                },
                {
                  label: 'Gists',
                  value: profile.public_gists,
                  icon: FaBookmark,
                  help: 'Públicos',
                },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.3 + i * 0.1,
                    type: 'spring',
                    stiffness: 150,
                  }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <Stat textAlign="center" cursor="pointer">
                    <StatLabel color={textColor}>{stat.label}</StatLabel>
                    <StatNumber color={accentColor} fontSize="3xl">
                      {stat.value}
                    </StatNumber>
                    <StatHelpText>
                      <stat.icon
                        style={{ display: 'inline', marginRight: '4px' }}
                      />
                      {stat.help}
                    </StatHelpText>
                  </Stat>
                </motion.div>
              ))}
            </SimpleGrid>
          </GlassCard>
        )}

        {/* Contribution Graph */}
        <GlassCard p={6}>
          <Flex
            justify="space-between"
            align="center"
            mb={6}
            direction={{ base: 'column', sm: 'row' }}
            gap={4}
          >
            <Heading as="h2" size="lg" color={headingColor}>
              Contribuciones en {selectedYear}
            </Heading>
            <Select
              value={selectedYear}
              onChange={e => setSelectedYear(e.target.value)}
              maxW="150px"
            >
              {years.map(year => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </Select>
          </Flex>
          <Box overflow="auto" bg={statBg} borderRadius="xl" p={4}>
            <Image
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=${bgImage}&hide_border=true&area=true&custom_title=Gráfico%20de%20Actividad%20${selectedYear}`}
              alt={`GitHub Activity ${selectedYear}`}
              w="100%"
              minW="600px"
            />
          </Box>
        </GlassCard>

        {/* Repositories */}
        <Box>
          <Heading
            as="h2"
            size="lg"
            mb={6}
            color={headingColor}
          >
            Repositorios Destacados
            <Box
              h="3px"
              w="60px"
              bgGradient={`linear(to-r, ${accentColor}, brand.700)`}
              borderRadius="full"
              mt={2}
            />
          </Heading>

          <StaggerContainer>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {repos.map(repo => (
                <StaggerItem key={repo.id}>
                  <GlassCard
                    p={6}
                    display="flex"
                    flexDirection="column"
                    cursor="pointer"
                    h="100%"
                  >
                    <Flex
                      align="flex-start"
                      justify="space-between"
                      mb={3}
                    >
                      <Heading
                        as="h3"
                        size="md"
                        color={headingColor}
                        noOfLines={1}
                        fontWeight="600"
                      >
                        {repo.name}
                      </Heading>
                      {repo.language && (
                        <Badge
                          colorScheme="brand"
                          ml={2}
                          fontSize="xs"
                          px={2}
                          borderRadius="full"
                        >
                          {repo.language}
                        </Badge>
                      )}
                    </Flex>

                    <Text
                      fontSize="sm"
                      color={textColor}
                      noOfLines={3}
                      mb={4}
                      flex={1}
                    >
                      {repo.description || 'Sin descripción disponible'}
                    </Text>

                    <HStack spacing={4} fontSize="sm" color={textColor} mb={4}>
                      <Flex align="center" gap={1}>
                        <FaStar color="#f59e0b" />
                        <Text fontWeight="500">{repo.stargazers_count}</Text>
                      </Flex>
                      <Flex align="center" gap={1}>
                        <FaCodeBranch />
                        <Text fontWeight="500">{repo.forks_count}</Text>
                      </Flex>
                    </HStack>

                    <Link
                      href={repo.html_url}
                      target="_blank"
                      _hover={{ textDecoration: 'none' }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          colorScheme="brand"
                          variant="outline"
                          w="full"
                          size="sm"
                          fontWeight="600"
                          borderRadius="xl"
                        >
                          Ver Código
                        </Button>
                      </motion.div>
                    </Link>
                  </GlassCard>
                </StaggerItem>
              ))}
            </SimpleGrid>
          </StaggerContainer>
        </Box>

        {/* Streak */}
        <GlassCard p={6} textAlign="center">
          <Heading as="h2" size="lg" mb={6} color={headingColor}>
            Racha de Contribuciones
          </Heading>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${streakTheme}&hide_border=true&background=${streakBg}&stroke=${streakStroke}&ring=${streakRing}&fire=${streakFire}&currStreakLabel=${streakLabel}`}
              alt="GitHub Streak"
              mx="auto"
              maxW="100%"
            />
          </motion.div>
        </GlassCard>

        {/* Trophies */}
        <GlassCard p={6} textAlign="center">
          <Heading as="h2" size="lg" mb={6} color={headingColor}>
            Logros en GitHub
          </Heading>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={`https://github-profile-trophy.vercel.app/?username=${username}&theme=${trophyTheme}&no-frame=true&column=4&margin-w=15&margin-h=15`}
              alt="GitHub Trophies"
              mx="auto"
              maxW="100%"
            />
          </motion.div>
        </GlassCard>
      </VStack>
    </Container>
  )
}

export default Github
