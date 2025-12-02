import {
  Box, Flex, Text, VStack, Heading, Avatar, Spinner, SimpleGrid,
  Button, Image, Select, useColorModeValue, HStack, Container,
  Stat, StatLabel, StatNumber, StatHelpText, Badge, Divider, Link
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaUsers, FaCodeBranch, FaStar, FaCode, FaBookmark } from "react-icons/fa";
import Layout from '../components/layouts/article';

// Componentes Motion
const MotionBox = motion(Box);
const MotionGrid = motion(SimpleGrid);
const MotionHeading = motion(Heading);

// Variantes de animación
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Github = () => {
  // Todos los hooks deben estar al principio
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const headingColor = useColorModeValue('gray.800', 'white');
  const accentColor = useColorModeValue('blue.600', 'blue.400');
  const statBg = useColorModeValue('gray.50', 'gray.700');
  const bgImage = useColorModeValue('github-light', 'github-dark');
  const streakTheme = useColorModeValue('default', 'dark');
  const streakBg = useColorModeValue('ffffff', '1a202c');
  const streakStroke = useColorModeValue('2d3748', 'e2e8f0');
  const streakRing = useColorModeValue('3182ce', '63b3ed');
  const streakFire = useColorModeValue('3182ce', '63b3ed');
  const streakLabel = useColorModeValue('2d3748', 'e2e8f0');
  const trophyTheme = useColorModeValue('flat', 'onedark');

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [currentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const perPage = 9;
  const username = "efraindrummer";
  const textColor = useColorModeValue("gray.600", "gray.300");
  const years = Array.from({ length: 6 }, (_, i) => new Date().getFullYear() - i);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => setError(err.message));

    fetch(`https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${currentPage}`)
      .then(res => {
        if (!res.ok) throw new Error("Error al obtener datos de GitHub");
        return res.json();
      })
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [currentPage]);

  if (loading) return <Spinner size="xl" mt={20} mx="auto" display="block" />;
  if (error)
    return (
      <Box textAlign="center" mt={10}>
        <Text fontSize="lg" color="red.500" fontWeight="bold">
          ⚠️ {error}
        </Text>
        <Text>Verifica que el nombre de usuario y la API de GitHub sean correctos.</Text>
      </Box>
    );

  return (
    <Layout title="GitHub - Efrain May">
      <Container maxW="container.xl" py={8}>
        <VStack spacing={10} align="stretch" w="full">
          {/* Header con animación */}
          <MotionBox 
            textAlign="center" 
            mb={6}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <MotionHeading
              as="h1"
              size="2xl"
              mb={3}
              color={headingColor}
              fontWeight="700"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
            >
              Actividad en GitHub
            </MotionHeading>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Text fontSize="lg" color={textColor}>
                Repositorios, estadísticas y contribuciones al código abierto
              </Text>
            </motion.div>
          </MotionBox>

          {profile && (
            <>
              {/* Profile Section con animaciones */}
              <MotionBox
                bg={cardBg}
                borderRadius="lg"
                border="1px"
                borderColor={borderColor}
                p={8}
                mb={6}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
                whileHover={{ 
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  y: -5
                }}
              >
                <MotionGrid 
                  templateColumns={{ base: "1fr", md: "auto 1fr" }} 
                  gap={8} 
                  alignItems="center"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.5 }
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
                  <VStack align={{ base: "center", md: "flex-start" }} spacing={3}>
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <Heading size="xl" color={headingColor}>
                        {profile.name || "Efrain May"}
                      </Heading>
                    </motion.div>
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <HStack>
                        <motion.div
                          animate={{ 
                            rotate: [0, 360],
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3
                          }}
                        >
                          <FaGithub />
                        </motion.div>
                        <Text color={accentColor} fontWeight="600">
                          @{profile.login}
                        </Text>
                      </HStack>
                    </motion.div>
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      <Text color={textColor} textAlign={{ base: "center", md: "left" }}>
                        {profile.bio || "Ingeniero de Software especializado en desarrollo Full Stack"}
                      </Text>
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={profile.html_url}
                        target="_blank"
                        _hover={{ textDecoration: "none" }}
                      >
                        <Button colorScheme="blue" size="md">
                          Ver Perfil Completo
                        </Button>
                      </Link>
                    </motion.div>
                  </VStack>
                </MotionGrid>

                {/* Stats Grid con animaciones */}
                <Divider my={6} />
                <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 150 }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -10,
                      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                    }}
                  >
                    <Stat textAlign="center" cursor="pointer">
                      <StatLabel color={textColor}>Repositorios</StatLabel>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        <StatNumber color={accentColor} fontSize="3xl">
                          {profile.public_repos}
                        </StatNumber>
                      </motion.div>
                      <StatHelpText>
                        <FaCode style={{ display: "inline", marginRight: "4px" }} />
                        Públicos
                      </StatHelpText>
                    </Stat>
                  </motion.div>
                  
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.7, type: "spring", stiffness: 150 }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -10,
                      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                    }}
                  >
                    <Stat textAlign="center" cursor="pointer">
                      <StatLabel color={textColor}>Seguidores</StatLabel>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                      >
                        <StatNumber color={accentColor} fontSize="3xl">
                          {profile.followers}
                        </StatNumber>
                      </motion.div>
                      <StatHelpText>
                        <FaUsers style={{ display: "inline", marginRight: "4px" }} />
                        Followers
                      </StatHelpText>
                    </Stat>
                  </motion.div>
                  
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 150 }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -10,
                      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                    }}
                  >
                    <Stat textAlign="center" cursor="pointer">
                      <StatLabel color={textColor}>Siguiendo</StatLabel>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.0 }}
                      >
                        <StatNumber color={accentColor} fontSize="3xl">
                          {profile.following}
                        </StatNumber>
                      </motion.div>
                      <StatHelpText>
                        <FaUsers style={{ display: "inline", marginRight: "4px" }} />
                        Following
                      </StatHelpText>
                    </Stat>
                  </motion.div>
                  
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.9, type: "spring", stiffness: 150 }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -10,
                      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                    }}
                  >
                    <Stat textAlign="center" cursor="pointer">
                      <StatLabel color={textColor}>Gists</StatLabel>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1 }}
                      >
                        <StatNumber color={accentColor} fontSize="3xl">
                          {profile.public_gists}
                        </StatNumber>
                      </motion.div>
                      <StatHelpText>
                        <FaBookmark style={{ display: "inline", marginRight: "4px" }} />
                        Públicos
                      </StatHelpText>
                    </Stat>
                  </motion.div>
                </SimpleGrid>
              </MotionBox>
            </>
          )}

          {/* GitHub Stats Cards con animación */}
          <MotionHeading 
            as="h2" 
            size="lg" 
            mb={4} 
            color={headingColor}
            borderBottom="2px"
            borderColor={accentColor}
            pb={2}
            display="inline-block"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Estadísticas de Desarrollo
          </MotionHeading>
          
          

          {/* Contribution Graph con animación */}
          <MotionBox
            bg={cardBg}
            borderRadius="lg"
            border="1px"
            borderColor={borderColor}
            p={6}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            whileHover={{ 
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
              y: -5
            }}
          >
            <Flex 
              justify="space-between" 
              align="center" 
              mb={6}
              direction={{ base: "column", sm: "row" }}
              gap={4}
            >
              <Heading as="h2" size="lg" color={headingColor}>
                Contribuciones en {selectedYear}
              </Heading>
              <Select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                maxW="150px"
                borderColor={borderColor}
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </Select>
            </Flex>
            <Box
              overflow="auto"
              bg={statBg}
              borderRadius="md"
              p={4}
            >
              <Image
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=${bgImage}&hide_border=true&area=true&custom_title=Gráfico%20de%20Actividad%20${selectedYear}`}
                alt={`GitHub Activity ${selectedYear}`}
                w="100%"
                minW="600px"
              />
            </Box>
          </MotionBox>

          {/* Repositories con animación */}
          <Box>
            <MotionHeading 
              as="h2" 
              size="lg" 
              mb={6} 
              color={headingColor}
              borderBottom="2px"
              borderColor={accentColor}
              pb={2}
              display="inline-block"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Repositorios Destacados
            </MotionHeading>
            
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {repos.map((repo, index) => (
                <MotionBox
                  key={repo.id}
                  bg={cardBg}
                  borderRadius="lg"
                  border="1px"
                  borderColor={borderColor}
                  p={6}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    translateY: -8,
                    scale: 1.03,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
                    borderColor: accentColor,
                    transition: { duration: 0.3 }
                  }}
                  display="flex"
                  flexDirection="column"
                  cursor="pointer"
                  position="relative"
                  overflow="hidden"
                  _before={{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "100%",
                    height: "3px",
                    bg: "linear-gradient(90deg, transparent, #3182ce, transparent)",
                    transition: "left 0.5s"
                  }}
                  _hover={{
                    _before: {
                      left: "100%"
                    }
                  }}
                >
                  <Flex align="flex-start" justify="space-between" mb={3}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      style={{ flex: 1 }}
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
                    </motion.div>
                    {repo.language && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                      >
                        <Badge 
                          colorScheme="blue" 
                          ml={2}
                          fontSize="xs"
                          px={2}
                        >
                          {repo.language}
                        </Badge>
                      </motion.div>
                    )}
                  </Flex>
                  
                  <Text 
                    fontSize="sm" 
                    color={textColor} 
                    noOfLines={3} 
                    mb={4}
                    flex={1}
                  >
                    {repo.description || "Sin descripción disponible"}
                  </Text>
                  
                  <HStack spacing={4} fontSize="sm" color={textColor} mb={4}>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Flex align="center" gap={1}>
                        <motion.div
                          animate={{ 
                            rotate: [0, 20, -20, 0],
                            scale: [1, 1.2, 1.2, 1]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3
                          }}
                        >
                          <FaStar color="#f59e0b" />
                        </motion.div>
                        <Text fontWeight="500">{repo.stargazers_count}</Text>
                      </Flex>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Flex align="center" gap={1}>
                        <FaCodeBranch />
                        <Text fontWeight="500">{repo.forks_count}</Text>
                      </Flex>
                    </motion.div>
                  </HStack>
                  
                  <Link
                    href={repo.html_url}
                    target="_blank"
                    _hover={{ textDecoration: "none" }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        colorScheme="blue" 
                        variant="outline"
                        w="full" 
                        size="sm"
                        fontWeight="600"
                      >
                        Ver Código
                      </Button>
                    </motion.div>
                  </Link>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Box>

          {/* GitHub Streak con animación */}
          <MotionBox
            bg={cardBg}
            borderRadius="lg"
            border="1px"
            borderColor={borderColor}
            p={6}
            textAlign="center"
            initial={{ opacity: 0, rotateY: -90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            whileHover={{ 
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
              scale: 1.02
            }}
          >
            <MotionHeading 
              as="h2" 
              size="lg" 
              mb={6} 
              color={headingColor}
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Racha de Contribuciones
            </MotionHeading>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${streakTheme}&hide_border=true&background=${streakBg}&stroke=${streakStroke}&ring=${streakRing}&fire=${streakFire}&currStreakLabel=${streakLabel}`}
                alt="GitHub Streak"
                mx="auto"
                maxW="100%"
              />
            </motion.div>
          </MotionBox>

          {/* Trophy Section con animación */}
          <MotionBox
            bg={cardBg}
            borderRadius="lg"
            border="1px"
            borderColor={borderColor}
            p={6}
            textAlign="center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            whileHover={{ 
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
              scale: 1.02
            }}
          >
            <MotionHeading 
              as="h2" 
              size="lg" 
              mb={6} 
              color={headingColor}
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              🏆 Logros en GitHub
            </MotionHeading>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Image
                src={`https://github-profile-trophy.vercel.app/?username=${username}&theme=${trophyTheme}&no-frame=true&column=4&margin-w=15&margin-h=15`}
                alt="GitHub Trophies"
                mx="auto"
                maxW="100%"
              />
            </motion.div>
          </MotionBox>
        </VStack>
      </Container>
    </Layout>
  );
};

export default Github;
export { getServerSideProps } from '../components/chakra';
