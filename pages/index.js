import NextLink from 'next/link'
import { 
    Container, 
    Box, 
    Heading, 
    Image,
    Link,
    Button,
    useColorModeValue 
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3}  mb={6} aling="center">
                    Hello, Soy Alejandra Ramirez
                </Box>
                
                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" varlant="page-title">
                            Alejandra Ramirez
                        </Heading>
                        <p>Educadora ( Apasionada por la Educacion )</p>
                    </Box>
                </Box>
                <Box 
                    flexShrink={0} 
                    mt={{base: 4, md: 3}} 
                    ml={{md: 6}} 
                    align="center"
                >
                    <Image 
                        borderColor="whiteAlpha.800" 
                        borderWidth={2} 
                        borderStyle="solid" 
                        maxWidth="150px" 
                        display="inline-block"
                        borderRadius="full"
                        src="/images/alejandra.jpg"
                        alt="Profile Image"
                    />
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" varlant="section-title">
                        Lenguaje & Animacion Audiovisual Digital
                    </Heading>
                    <Paragraph>
                        Este proyecto se trata de la creacion de un contenido audiovisual educativo que incluye el elemento de animado de arriba ↥.
                        <br /> Quieres saber mas acerca de ello, descarga el siguiente archivo ↡
                    </Paragraph>
                    <Box align="center" my={4}>
                        <Link href="https://efraindev.netlify.app/" target="_blank">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="orange">
                                Descargar ↡
                            </Button>
                        </Link>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}


export default Page