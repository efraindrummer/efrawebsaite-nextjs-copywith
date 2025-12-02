import NextLink from 'next/link'
import { 
    Link,
    Container, 
    Box, 
    Heading, 
    Button,
    SimpleGrid,
    List,
    Icon,
    ListItem,
    useColorModeValue,
    chakra,
    Text,
    Flex,
    Badge,
    VStack,
    HStack,
} from '@chakra-ui/react'
//components
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import { Timeline } from '../components/timeline';
import Image from "next/image"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoFacebook
} from 'react-icons/io5'

import thumbYouTubeChatApp from '../public/images/links/chatapp.jpg'
import thumbAngularGiphyAPI from '../public/images/links/angular-coding.jpg'

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)

const Home = () => {
    return (
        <Layout>
            <Container maxW="container.lg">
                {/* Hero Section Profesional */}
                <Box
                    borderBottom="1px"
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    pb={8}
                    mb={10}
                    mt={4}
                >
                    <Flex
                        direction={{ base: 'column', md: 'row' }}
                        align={{ base: 'center', md: 'flex-start' }}
                        gap={8}
                    >
                        <Box
                            flexShrink={0}
                            position="relative"
                        >
                            <ProfileImage 
                                border="4px solid"
                                borderColor={useColorModeValue('gray.200', 'gray.700')}
                                maxWidth="180px" 
                                display="inline-block"
                                borderRadius="lg"
                                src="/images/efraindrummer.jpeg"
                                alt="Efrain May - Ingeniero en Computación"
                                width="180"
                                height="180"
                                boxShadow={useColorModeValue('lg', 'dark-lg')}
                            />
                        </Box>
                        
                        <VStack align={{ base: 'center', md: 'flex-start' }} spacing={3} flex={1}>
                            <Heading
                                as="h1"
                                size="2xl"
                                color={useColorModeValue('gray.800', 'white')}
                                fontWeight="700"
                                letterSpacing="tight"
                            >
                                Efrain May
                            </Heading>
                            <Text
                                fontSize="xl"
                                color={useColorModeValue('gray.600', 'gray.400')}
                                fontWeight="500"
                            >
                                Ingeniero en Computación
                            </Text>
                            <Text
                                fontSize="lg"
                                color={useColorModeValue('blue.600', 'blue.300')}
                                fontWeight="600"
                            >
                                Ingeniero de Software | DRAGADOS OFFSHORE MEXICO
                            </Text>
                            <HStack spacing={2} pt={2} flexWrap="wrap">
                                <Badge 
                                    colorScheme="gray" 
                                    fontSize="sm" 
                                    px={3} 
                                    py={1}
                                    fontWeight="600"
                                    textTransform="none"
                                >
                                    Full Stack Developer
                                </Badge>
                                <Badge 
                                    colorScheme="gray" 
                                    fontSize="sm" 
                                    px={3} 
                                    py={1}
                                    fontWeight="600"
                                    textTransform="none"
                                >
                                    Cloud Computing
                                </Badge>
                                <Badge 
                                    colorScheme="gray" 
                                    fontSize="sm" 
                                    px={3} 
                                    py={1}
                                    fontWeight="600"
                                    textTransform="none"
                                >
                                    DevOps
                                </Badge>
                            </HStack>
                        </VStack>
                    </Flex>
                </Box>

                <Section delay={0.2}>
                    <Box mb={10}>
                        <Heading
                            as="h2"
                            size="lg"
                            mb={6}
                            color={useColorModeValue('gray.800', 'white')}
                            borderBottom="2px"
                            borderColor={useColorModeValue('blue.500', 'blue.400')}
                            pb={2}
                            display="inline-block"
                        >
                            Perfil Profesional
                        </Heading>
                        
                        <Box
                            p={6}
                            bg={useColorModeValue('white', 'gray.800')}
                            borderRadius="md"
                            border="1px"
                            borderColor={useColorModeValue('gray.200', 'gray.700')}
                            mb={6}
                        >
                            <Text
                                fontSize="lg"
                                lineHeight="tall"
                                color={useColorModeValue('gray.700', 'gray.300')}
                                textAlign="justify"
                            >
                                Ingeniero de Software con sólida experiencia en el desarrollo de soluciones tecnológicas para diversos sectores industriales. Especializado en la automatización de procesos y optimización de sistemas en los rubros petrolero, O&M, logística y monitoreo GPS. Comprometido con la implementación de tecnologías innovadoras que aporten valor y eficiencia a las organizaciones.
                            </Text>
                        </Box>

                        <Heading
                            as="h3"
                            size="md"
                            mb={4}
                            color={useColorModeValue('gray.700', 'gray.200')}
                        >
                            Áreas de Especialización
                        </Heading>
                        
                        <SimpleGrid columns={[1, 2, 4]} gap={4} mb={6}>
                            <Box
                                p={4}
                                bg={useColorModeValue('blue.50', 'gray.700')}
                                borderRadius="md"
                                borderLeft="4px"
                                borderColor="blue.500"
                            >
                                <Text fontWeight="bold" color={useColorModeValue('blue.700', 'blue.300')}>
                                    Sector Petrolero
                                </Text>
                                <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                                    Sistemas empresariales
                                </Text>
                            </Box>
                            <Box
                                p={4}
                                bg={useColorModeValue('green.50', 'gray.700')}
                                borderRadius="md"
                                borderLeft="4px"
                                borderColor="green.500"
                            >
                                <Text fontWeight="bold" color={useColorModeValue('green.700', 'green.300')}>
                                    O&M
                                </Text>
                                <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                                    Operación y mantenimiento
                                </Text>
                            </Box>
                            <Box
                                p={4}
                                bg={useColorModeValue('orange.50', 'gray.700')}
                                borderRadius="md"
                                borderLeft="4px"
                                borderColor="orange.500"
                            >
                                <Text fontWeight="bold" color={useColorModeValue('orange.700', 'orange.300')}>
                                    Logística
                                </Text>
                                <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                                    Gestión y optimización
                                </Text>
                            </Box>
                            <Box
                                p={4}
                                bg={useColorModeValue('red.50', 'gray.700')}
                                borderRadius="md"
                                borderLeft="4px"
                                borderColor="red.500"
                            >
                                <Text fontWeight="bold" color={useColorModeValue('red.700', 'red.300')}>
                                    Monitoreo GPS
                                </Text>
                                <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                                    Sistemas de tracking
                                </Text>
                            </Box>
                        </SimpleGrid>

                        <Box textAlign="center">
                            <NextLink href="https://www.dropbox.com/s/8l0axe4qee8ea0j/Curriculum%20CV%20Simple%20Blanco%20y%20Negro.pdf?dl=0" passHref>
                                <Button
                                    size="lg"
                                    colorScheme="blue"
                                    rightIcon={<ChevronRightIcon />}
                                    variant="solid"
                                >
                                    Descargar CV
                                </Button>
                            </NextLink>
                        </Box>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Timeline />
                </Section>
                
                <Section delay={0.2}>
                    <Box mb={10}>
                        <Heading
                            as="h2"
                            size="lg"
                            mb={6}
                            color={useColorModeValue('gray.800', 'white')}
                            borderBottom="2px"
                            borderColor={useColorModeValue('blue.500', 'blue.400')}
                            pb={2}
                            display="inline-block"
                        >
                            Formación Académica y Certificaciones
                        </Heading>
                        
                        <SimpleGrid columns={[1, 1, 2]} gap={5} mt={6}>

                        <Box
                            p={5}
                            bg={useColorModeValue('white', 'gray.800')}
                            borderRadius="md"
                            border="1px"
                            borderColor={useColorModeValue('gray.200', 'gray.700')}
                            _hover={{
                                boxShadow: 'md',
                                borderColor: useColorModeValue('blue.400', 'blue.500')
                            }}
                            transition="all 0.2s"
                        >
                            <BioSection>
                                <BioYear>2025</BioYear>
                                Desarrollo Web con IA: OpenIA - DeepSeek, JS y NodeJS
                            </BioSection>
                        </Box>
                        <Box
                            p={5}
                            bg={useColorModeValue('white', 'gray.800')}
                            borderRadius="md"
                            border="1px"
                            borderColor={useColorModeValue('gray.200', 'gray.700')}
                            _hover={{
                                boxShadow: 'md',
                                borderColor: useColorModeValue('blue.400', 'blue.500')
                            }}
                            transition="all 0.2s"
                        >
                            <BioSection>
                                <BioYear>2025</BioYear>
                                Android Enterprise Certified Professional
                            </BioSection>
                        </Box>
                        <Box
                            p={5}
                            bg={useColorModeValue('white', 'gray.800')}
                            borderRadius="md"
                            border="1px"
                            borderColor={useColorModeValue('gray.200', 'gray.700')}
                            _hover={{
                                boxShadow: 'md',
                                borderColor: useColorModeValue('blue.400', 'blue.500')
                            }}
                            transition="all 0.2s"
                        >
                            <BioSection>
                                <BioYear>2025</BioYear>
                                Android Enterprise Certified Associate
                            </BioSection>
                        </Box>
                        <Box
                            p={5}
                            bg={useColorModeValue('white', 'gray.800')}
                            borderRadius="md"
                            border="1px"
                            borderColor={useColorModeValue('gray.200', 'gray.700')}
                            _hover={{
                                boxShadow: 'md',
                                borderColor: useColorModeValue('blue.400', 'blue.500')
                            }}
                            transition="all 0.2s"
                        >
                            <BioSection>
                                <BioYear>2024</BioYear>
                                Kubernetes & Docker en AWS
                            </BioSection>
                        </Box>
                        <Box
                            p={5}
                            bg={useColorModeValue('white', 'gray.800')}
                            borderRadius="md"
                            border="1px"
                            borderColor={useColorModeValue('gray.200', 'gray.700')}
                            _hover={{
                                boxShadow: 'md',
                                borderColor: useColorModeValue('blue.400', 'blue.500')
                            }}
                            transition="all 0.2s"
                        >
                            <BioSection>
                                <BioYear>2024</BioYear>             
                                ABAP Para funcionales - Creación de reportes
                            </BioSection>
                        </Box>
                        <Box
                            p={5}
                            bg={useColorModeValue('white', 'gray.800')}
                            borderRadius="md"
                            border="1px"
                            borderColor={useColorModeValue('gray.200', 'gray.700')}
                            _hover={{
                                boxShadow: 'md',
                                borderColor: useColorModeValue('blue.400', 'blue.500')
                            }}
                            transition="all 0.2s"
                        >
                            <BioSection>
                                <BioYear>2022</BioYear>
                                Ingeniero En Computacion - Universidad Autonoma Del Carmen
                            </BioSection>
                        </Box>
                        <Box
                            p={5}
                            bg={useColorModeValue('white', 'gray.800')}
                            borderRadius="md"
                            border="1px"
                            borderColor={useColorModeValue('gray.200', 'gray.700')}
                            _hover={{
                                boxShadow: 'md',
                                borderColor: useColorModeValue('blue.400', 'blue.500')
                            }}
                            transition="all 0.2s"
                        >
                            <BioSection>
                                <BioYear>2021</BioYear>
                                Cloud Computing - Google Certification
                            </BioSection>
                        </Box>
                        <Box
                            p={5}
                            bg={useColorModeValue('white', 'gray.800')}
                            borderRadius="md"
                            border="1px"
                            borderColor={useColorModeValue('gray.200', 'gray.700')}
                            _hover={{
                                boxShadow: 'md',
                                borderColor: useColorModeValue('blue.400', 'blue.500')
                            }}
                            transition="all 0.2s"
                        >
                            <BioSection>
                                <BioYear>2021</BioYear>
                                Desarrollo de Apps Moviles - Google Certification
                            </BioSection>
                        </Box>
                        <Box
                            p={5}
                            bg={useColorModeValue('white', 'gray.800')}
                            borderRadius="md"
                            border="1px"
                            borderColor={useColorModeValue('gray.200', 'gray.700')}
                            _hover={{
                                boxShadow: 'md',
                                borderColor: useColorModeValue('blue.400', 'blue.500')
                            }}
                            transition="all 0.2s"
                        >
                            <BioSection>
                                <BioYear>2021</BioYear>
                                Flutter Avanzado: Lleva tu conocimiento al siguiente nivel - Udemy
                            </BioSection>
                        </Box>
                        <Box
                            p={5}
                            bg={useColorModeValue('white', 'gray.800')}
                            borderRadius="md"
                            border="1px"
                            borderColor={useColorModeValue('gray.200', 'gray.700')}
                            _hover={{
                                boxShadow: 'md',
                                borderColor: useColorModeValue('blue.400', 'blue.500')
                            }}
                            transition="all 0.2s"
                        >
                            <BioSection>
                                <BioYear>2021</BioYear>
                                React: Aplicaciones en tiempo real con Socket-io - Udemy
                            </BioSection>
                        </Box>
                        <Box
                            p={5}
                            bg={useColorModeValue('white', 'gray.800')}
                            borderRadius="md"
                            border="1px"
                            borderColor={useColorModeValue('gray.200', 'gray.700')}
                            _hover={{
                                boxShadow: 'md',
                                borderColor: useColorModeValue('blue.400', 'blue.500')
                            }}
                            transition="all 0.2s"
                        >
                            <BioSection>
                                <BioYear>2020</BioYear>
                                Git de principiante a experto, GitHub, GitLab, Azure, Commit - Udemy
                            </BioSection>
                        </Box>
                        <Box
                            p={5}
                            bg={useColorModeValue('white', 'gray.800')}
                            borderRadius="md"
                            border="1px"
                            borderColor={useColorModeValue('gray.200', 'gray.700')}
                            _hover={{
                                boxShadow: 'md',
                                borderColor: useColorModeValue('blue.400', 'blue.500')
                            }}
                            transition="all 0.2s"
                        >
                            <BioSection>
                                <BioYear>2020</BioYear>
                                Scrum Master Certificacion - Udemy
                            </BioSection>
                        </Box>
                        <Box
                            p={5}
                            bg={useColorModeValue('white', 'gray.800')}
                            borderRadius="md"
                            border="1px"
                            borderColor={useColorModeValue('gray.200', 'gray.700')}
                            _hover={{
                                boxShadow: 'md',
                                borderColor: useColorModeValue('blue.400', 'blue.500')
                            }}
                            transition="all 0.2s"
                        >
                            <BioSection>
                                <BioYear>2020</BioYear>
                                Diplomado Tecnico en BIG DATA - Fundacion Carlos Slim
                            </BioSection>
                        </Box>
                        </SimpleGrid>
                    </Box>
                </Section>
                
                <Section delay={0.2}>
                    <Box mb={10}>
                        <Heading
                            as="h2"
                            size="lg"
                            mb={6}
                            color={useColorModeValue('gray.800', 'white')}
                            borderBottom="2px"
                            borderColor={useColorModeValue('blue.500', 'blue.400')}
                            pb={2}
                            display="inline-block"
                        >
                            Intereses Personales
                        </Heading>
                        
                        <HStack spacing={4} flexWrap="wrap" mt={6}>
                            <Badge 
                                variant="subtle" 
                                colorScheme="gray" 
                                fontSize="md" 
                                px={4} 
                                py={2}
                                fontWeight="500"
                            >
                                Arte
                            </Badge>
                            <Badge 
                                variant="subtle" 
                                colorScheme="gray" 
                                fontSize="md" 
                                px={4} 
                                py={2}
                                fontWeight="500"
                            >
                                Música
                            </Badge>
                            <Badge 
                                variant="subtle" 
                                colorScheme="gray" 
                                fontSize="md" 
                                px={4} 
                                py={2}
                                fontWeight="500"
                            >
                                Batería
                            </Badge>
                        </HStack>
                    </Box>
                </Section>

                <Section delay={0.3}>
                    <Box mb={10}>
                        <Heading
                            as="h2"
                            size="lg"
                            mb={6}
                            color={useColorModeValue('gray.800', 'white')}
                            borderBottom="2px"
                            borderColor={useColorModeValue('blue.500', 'blue.400')}
                            pb={2}
                            display="inline-block"
                        >
                            Contacto Profesional
                        </Heading>
                        <List spacing={3} mt={6}>
                            <ListItem>
                                <Link 
                                    href="https://github.com/efraindrummer" 
                                    target="_blank"
                                    display="flex"
                                    alignItems="center"
                                    p={3}
                                    borderRadius="md"
                                    border="1px"
                                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                                    bg={useColorModeValue('white', 'gray.800')}
                                    _hover={{
                                        borderColor: useColorModeValue('gray.400', 'gray.500'),
                                        textDecoration: 'none'
                                    }}
                                    transition="all 0.2s"
                                >
                                    <Icon as={IoLogoGithub} boxSize={6} mr={3} />
                                    <Box>
                                        <Text fontWeight="600">GitHub</Text>
                                        <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                                            @efraindrummer
                                        </Text>
                                    </Box>
                                </Link>
                            </ListItem>
                            
                            <ListItem>
                                <Link 
                                    href="https://twitter.com/efraindrummer7" 
                                    target="_blank"
                                    display="flex"
                                    alignItems="center"
                                    p={3}
                                    borderRadius="md"
                                    border="1px"
                                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                                    bg={useColorModeValue('white', 'gray.800')}
                                    _hover={{
                                        borderColor: useColorModeValue('gray.400', 'gray.500'),
                                        textDecoration: 'none'
                                    }}
                                    transition="all 0.2s"
                                >
                                    <Icon as={IoLogoTwitter} boxSize={6} mr={3} color={useColorModeValue('twitter.500', 'twitter.300')} />
                                    <Box>
                                        <Text fontWeight="600">Twitter</Text>
                                        <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                                            @efraindrummer7
                                        </Text>
                                    </Box>
                                </Link>
                            </ListItem>
                            
                            <ListItem>
                                <Link 
                                    href="https://www.instagram.com/efraincode/" 
                                    target="_blank"
                                    display="flex"
                                    alignItems="center"
                                    p={3}
                                    borderRadius="md"
                                    border="1px"
                                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                                    bg={useColorModeValue('white', 'gray.800')}
                                    _hover={{
                                        borderColor: useColorModeValue('gray.400', 'gray.500'),
                                        textDecoration: 'none'
                                    }}
                                    transition="all 0.2s"
                                >
                                    <Icon as={IoLogoInstagram} boxSize={6} mr={3} color={useColorModeValue('pink.500', 'pink.300')} />
                                    <Box>
                                        <Text fontWeight="600">Instagram</Text>
                                        <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                                            @efracode
                                        </Text>
                                    </Box>
                                </Link>
                            </ListItem>
                            
                            <ListItem>
                                <Link 
                                    href="https://www.facebook.com/Efrain.May/" 
                                    target="_blank"
                                    display="flex"
                                    alignItems="center"
                                    p={3}
                                    borderRadius="md"
                                    border="1px"
                                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                                    bg={useColorModeValue('white', 'gray.800')}
                                    _hover={{
                                        borderColor: useColorModeValue('gray.400', 'gray.500'),
                                        textDecoration: 'none'
                                    }}
                                    transition="all 0.2s"
                                >
                                    <Icon as={IoLogoFacebook} boxSize={6} mr={3} color={useColorModeValue('facebook.500', 'facebook.300')} />
                                    <Box>
                                        <Text fontWeight="600">Facebook</Text>
                                        <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                                            Efrain May
                                        </Text>
                                    </Box>
                                </Link>
                            </ListItem>
                        </List>

                        
                        <Box mt={8}>
                            <Heading
                                as="h3"
                                size="md"
                                mb={4}
                                color={useColorModeValue('gray.700', 'gray.200')}
                            >
                                Contenido Destacado
                            </Heading>
                            <SimpleGrid columns={[1, 1, 2]} gap={4}>
                                <GridItem
                                    href="https://www.youtube.com/watch?v=u5PKQMYhYRk&t=3s" 
                                    title="Flutter ChatApp" 
                                    thumbnail={thumbYouTubeChatApp}
                                >
                                    Canal de YouTube
                                </GridItem>
                                <GridItem 
                                    href="https://www.youtube.com/watch?v=LafxuUXgvuQ" 
                                    title="Giphy App" 
                                    thumbnail={thumbAngularGiphyAPI}
                                >
                                    Programando en Angular
                                </GridItem>
                            </SimpleGrid>
                        </Box>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default Home
export { getServerSideProps } from '../components/chakra'
