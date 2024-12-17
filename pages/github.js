import { Box, Flex, Text, VStack, Heading, Avatar, Spinner, SimpleGrid, Button, Image, Select, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NextLink from "next/link";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Github = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const perPage = 6;
  const username = "efraindrummer";

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${currentPage}`)
      .then((res) => {
        if (!res.ok) throw new Error("Error fetching GitHub data");
        setTotalPages(parseInt(res.headers.get("link")?.match(/page=(\d+)>; rel="last"/)?.[1] || 1, 10));
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [currentPage]);

  const cardBg = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const headingColor = useColorModeValue("blue.500", "blue.300");

  const years = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - i); // Últimos 5 años

  if (loading) return <Spinner size="xl" m="auto" display="block" mt={20} />;
  if (error)
    return (
      <Text color="red.500" textAlign="center" mt={10} fontSize="lg" fontWeight="bold">
        {error}. Verifica que tu nombre de usuario y la API de GitHub sean correctos.
      </Text>
    );

  return (
    <VStack spacing={8} p={8} align="center" w="full">
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "4xl" }}
        color={headingColor}
        textAlign="center"
        fontWeight="bold"
      >
        Mis Contribuciones y Proyectos
      </Heading>
      <Text fontSize={{ base: "sm", md: "md" }} color={textColor} textAlign="center">
        Aquí puedes ver una lista de mis proyectos en GitHub, con detalles de commits, estrellas y forks.
      </Text>

      {/* GitHub Stats */}
      <Flex direction={{ base: "column", md: "row" }} gap={6} justify="center" align="center">
        <Image
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&include_all_commits=true&count_private=true&theme=dracula&hide_border=false`}
          alt="GitHub Stats"
          boxShadow="xl"
          borderRadius="lg"
          maxW={{ base: "100%", md: "50%" }}
        />
        <Image
          src={`https://github-readme-stats.vercel.app/api/top-langs?username=${username}&layout=compact&langs_count=6&theme=dracula&hide_border=false`}
          alt="Top Languages"
          boxShadow="xl"
          borderRadius="lg"
          maxW={{ base: "100%", md: "50%" }}
        />
      </Flex>

      <Box boxShadow="2xl" borderRadius="lg" overflow="hidden" mt={8} p={4} w="100%">
        <Heading as="h2" size="lg" color={headingColor} textAlign="center" mb={4}>
          Contribuciones - {selectedYear}
        </Heading>
        <Select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          maxW="200px"
          mx="auto"
          mb={4}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Select>
        <Image
          src={`https://github-contributions-api.deno.dev/${username}.svg?year=${selectedYear}`}
          alt="GitHub Contributions Calendar"
          width="100%"
        />
      </Box>

      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={8} w="full">
        {data.map((repo) => (
          <MotionBox
            key={repo.id}
            bg={cardBg}
            p={6}
            borderRadius="lg"
            boxShadow="xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Flex justify="space-between" align="center" mb={2}>
              <Heading as="h3" size="md" color={headingColor} noOfLines={1}>
                {repo.name}
              </Heading>
              <Avatar size="sm" src={`https://github.com/${repo.owner.login}.png`} />
            </Flex>
            <Text fontSize="sm" color={textColor} noOfLines={2} mb={4}>
              {repo.description || "No description available"}
            </Text>
            <Flex justify="space-between" fontSize="sm" color="gray.500">
              <Text>⭐ {repo.stargazers_count}</Text>
              <Text>🍴 {repo.forks_count}</Text>
            </Flex>
            <NextLink href={repo.html_url} passHref>
              <Text as="a" color="blue.400" mt={4} display="inline-block" fontWeight="bold" _hover={{ textDecoration: "underline" }}>
                Ver Proyecto →
              </Text>
            </NextLink>
          </MotionBox>
        ))}
      </SimpleGrid>

      {/* Paginación */}
      <Flex justify="center" mt={4} gap={4}>
        <Button
          colorScheme="blue"
          isDisabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          Anterior
        </Button>
        <Text fontWeight="bold" color={textColor}>
          Página {currentPage} de {totalPages}
        </Text>
        <Button
          colorScheme="blue"
          isDisabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        >
          Siguiente
        </Button>
      </Flex>
    </VStack>
  );
};

export default Github;
