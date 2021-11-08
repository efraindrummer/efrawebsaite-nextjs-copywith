import NextLink from 'next/link'
import { 
    Container, 
    Box, 
    Heading, 
    Image,
    Link,
    Button,
    SimpleGrid,
    List,
    Icon,
    ListItem,
    useColorModeValue 
} from '@chakra-ui/react'
//components
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import { GridItem } from '../components/grid-item'
import { BioSection, BioYear } from '../components/bio'

import { ChevronRightIcon } from '@chakra-ui/icons'
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoFacebook
} from 'react-icons/io5'

import thumbYouTubeChatApp from '../public/images/links/chatapp.jpg'
import thumbAngularGiphyAPI from '../public/images/links/angular-coding.jpg'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3}  mb={6} aling="center">
                    Hola, soy Desarrollador Web & Mobile en Mexico!
                </Box>
                
                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" varlant="page-title">
                            Efrain May
                        </Heading>
                        <p>Ingeniero En Computacion ( Artista / Programador / Javascript💛 )</p>
                    </Box>
                </Box>
                <Box 
                    flexShrink={0} 
                    mt={{base: 4, md: 6}} 
                    ml={{md: 6}} 
                    align="center"
                >
                    <Image 
                        borderColor="whiteAlpha.800" 
                        borderWidth={2} 
                        borderStyle="groove" 
                        maxWidth="100px" 
                        display="inline-block"
                        borderRadius="full"
                        src="/images/efrain.jpg"
                        alt="Profile Image"
                    />
                </Box>

                <Section delay={0.2}>
                    <Heading as="h3" varlant="section-title">
                        Sobre Mi
                    </Heading>
                    <Paragraph>
                        Efrain es un Ingeniero de Software, creador de contenido y un apasionado por la tecnologia, a lo largo del tiempo
                        a desarrollado productos para las empresas como TuProp, Telecom Bet-Gui, actualmente me desempeño en
                        tecnologias JavaScript, usando React, Next, Node y Angular, tambien desarrollo aplicaciones moviles con Flutter 
                        & Dart.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/pdf" target="_blank">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="yellow">
                                Descarga mi CV
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h2" varlant="section-title">
                        Estudios & Certificaciones
                    </Heading>
                    <br />
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Cloud Computing - Google Certification
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Desarrollo de Apps Moviles - Google Certification
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Flutter Advance Course - Udemy
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Flutter: Tu guía completa de desarrollo para IOS y Android - Udemy
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Flutter Avanzado: Lleva tu conocimiento al siguiente nivel - Udemy
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        React: Aplicaciones en tiempo real con Socket-io - Udemy
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        React: De cero a Experto(Hooks y MERN) - Udemy
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Angular De 0 a Experto (Edicion 2021) - Udemy
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Angular Avanzado: Lleva tus bases al siguiente nivel - MEAN (Edicion 2021) - Udemy
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Visual Studio Code: Mejora tu velocidad para codificar - Udemy
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Git de principiante a experto, GitHub, GitLab, Azure, Commit - Udemy
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Javascript Moderno Guia Definitiva Construye + 15 proyectos - Udemy
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Scrum Master Certificacion - Udemy
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Programador Web: Cookies y Sesiones en PHP - Udemy
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Backend con Node JS y Express - Udemy
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Diplomado Tecnico en BIG DATA - Fundacion Carlos Slim
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Administrador de Servidores - Fundacion Carlos Slim
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Administrador de Bases de Datos - Fundacion Carlos Slim
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Curador de Datos - Fundacion Carlos Slim
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Tecnico en Redes de Datos - Fundacion Carlos Slim
                    </BioSection>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" varlant="section-title">
                        I ♥
                    </Heading>
                    <Paragraph>
                        Arte, Musica, Gatos, Baterista.
                    </Paragraph>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" varlant="section-title">
                        En la Red  
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/efraindrummer" target="_blank">
                                <Button
                                    variant="ghost" 
                                    colorScheme="blackAlpha.900" 
                                    leftIcon={<Icon as={IoLogoGithub} />}
                                >
                                    @efraindrummer
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://twitter.com/efraindrummer7" target="_blank">
                                <Button
                                    variant="ghost" 
                                    colorScheme="teal" 
                                    leftIcon={<Icon as={IoLogoTwitter} />}
                                >
                                    @efraindrummer7
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.instagram.com/efraincode/" target="_blank">
                                <Button
                                    variant="ghost" 
                                    colorScheme="red" 
                                    leftIcon={<Icon as={IoLogoInstagram} />}
                                >
                                    @efracode
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.facebook.com/Efrain.May/" target="_blank">
                                <Button
                                    variant="ghost" 
                                    colorScheme="blue" 
                                    leftIcon={<Icon as={IoLogoFacebook} />}
                                >
                                    Efrain May
                                </Button>
                            </Link>
                        </ListItem>
                        [' ']
                    </List>

                    <br />

                    <SimpleGrid columns={[1,2,2]} gap={6}>
                        <GridItem
                            href="https://www.youtube.com/watch?v=u5PKQMYhYRk&t=3s" 
                            title="Flutter ChatApp" 
                            thumbnail={thumbYouTubeChatApp}
                        >
                            Canal de YouTube
                        </GridItem>
                        <GridItem 
                            href="https://www.youtube.com/watch?v=LafxuUXgvuQ" 
                            title="Inkdrop" 
                            thumbnail={thumbAngularGiphyAPI}
                        >
                            Programando en Angular
                        </GridItem>
                    </SimpleGrid>
                </Section>
            </Container>
        </Layout>
    )
}


export default Page