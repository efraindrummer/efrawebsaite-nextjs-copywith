import {
  Box, Flex, Text, VStack, Heading, Avatar, Spinner, SimpleGrid,
  Button, Image, Select, useColorModeValue, HStack
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { Title } from "../components/work";
import { FaGithub, FaUsers, FaCodeBranch } from "react-icons/fa";

const MotionBox = motion(Box);

const Github = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [currentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const perPage = 6;
  const username = "efraindrummer";
  const cardBg = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const headingColor = useColorModeValue("teal.500", "teal.300");
  const years = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - i);

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
    <VStack spacing={10} px={6} py={10} align="center" w="full">
      <Title>Contribuciones en GitHub</Title>

      {profile && (
        <MotionBox
          p={6}
          boxShadow="2xl"
          borderRadius="xl"
          bg={cardBg}
          w="full"
          maxW="lg"
          textAlign="center"
          whileHover={{ scale: 1.03 }}
        >
          <Avatar size="2xl" src={profile.avatar_url} name={profile.name} mx="auto" />
          <Heading mt={4} size="lg" color={headingColor}>
            {profile.name || "Usuario de GitHub"}
          </Heading>
          <Text color={textColor} fontSize="sm" mt={1}>
            {profile.bio || "Desarrollador apasionado por la tecnología"}
          </Text>
          <HStack justify="center" mt={4} spacing={6}>
            <Flex align="center" gap={2}><FaUsers />{profile.followers}</Flex>
            <Flex align="center" gap={2}><FaCodeBranch />{profile.public_repos}</Flex>
            <Flex align="center" gap={2}><FaGithub />@{profile.login}</Flex>
          </HStack>
          <Button
            as="a"
            href={profile.html_url}
            target="_blank"
            mt={4}
            colorScheme="teal"
            size="sm"
            variant="solid"
          >
            Ver perfil en GitHub
          </Button>
        </MotionBox>
      )}

      <Flex direction={{ base: "column", md: "row" }} gap={6} justify="center" align="center">
        <Image
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&include_all_commits=true&count_private=true&theme=dracula&hide_border=false`}
          alt="GitHub Stats"
          boxShadow="lg"
          borderRadius="xl"
          maxW={{ base: "100%", md: "50%" }}
        />
        <Image
          src={`https://github-readme-stats.vercel.app/api/top-langs?username=${username}&layout=compact&langs_count=6&theme=dracula&hide_border=false`}
          alt="Top Languages"
          boxShadow="lg"
          borderRadius="xl"
          maxW={{ base: "100%", md: "50%" }}
        />
      </Flex>

      <Box boxShadow="lg" borderRadius="xl" p={6} w="100%">
        <Heading as="h2" size="lg" color={headingColor} textAlign="center" mb={4}>
          Contribuciones {selectedYear}
        </Heading>
        <Select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          maxW="200px"
          mx="auto"
          mb={4}
        >
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </Select>
        <Image
          src={`https://github-contributions-api.deno.dev/${username}.svg?year=${selectedYear}`}
          alt={`GitHub Contributions ${selectedYear}`}
          width="100%"
          borderRadius="lg"
        />
      </Box>

      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6} w="full">
        {repos.map((repo) => (
          <MotionBox
            key={repo.id}
            bg={cardBg}
            p={5}
            borderRadius="xl"
            boxShadow="lg"
            whileHover={{ scale: 1.03 }}
            transition="0.3s ease"
          >
            <Heading as="h3" size="md" color={headingColor} noOfLines={1} mb={2}>
              {repo.name}
            </Heading>
            <Text fontSize="sm" color={textColor} noOfLines={3} mb={3}>
              {repo.description || "Sin descripción disponible"}
            </Text>
            <Flex justify="space-between" fontSize="xs" color="gray.500">
              <Text>⭐ {repo.stargazers_count}</Text>
              <Text>🍴 {repo.forks_count}</Text>
            </Flex>
            <NextLink href={repo.html_url} passHref>
              <Button mt={4} colorScheme="teal" w="full" size="sm">
                Ver Repositorio
              </Button>
            </NextLink>
          </MotionBox>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default Github;
