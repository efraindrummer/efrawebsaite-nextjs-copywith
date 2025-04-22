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
    Text
} from '@chakra-ui/react'
//components
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import { GridItem } from '../components/grid-item'
import { BioSection, BioYear } from '../components/bio'
import { Timeline } from '../components/timeline';
import Image from "next/image"
import { ChevronRightIcon } from '@chakra-ui/icons'
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

const Home = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3}  mb={8} textAlign="center">
                    Hola, soy  Efrain May, Desarrollador de Software!
                </Box>
                
                <Box display={{md:'flex'}} textAlign={{ base: 'center', md: 'left' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Efrain May
                        </Heading>
                        <Text>Ingeniero en Computación (Musician / Programmer 💛)</Text>
                    </Box>
                </Box>
                
                <Box 
                    flexShrink={0} 
                    mt={{base: 4, md: 6}} 
                    ml={{md: 6}} 
                    textAlign="center"
                >
                    <ProfileImage 
                        borderColor="whiteAlpha.800" 
                        borderWidth={2} 
                        borderStyle="groove" 
                        maxWidth="100px" 
                        display="inline-block"
                        borderRadius="full"
                        src="/images/efraindrummer.jpeg"
                        alt="Profile Image"
                        width="100"
                        height="100"
                    />
                </Box>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Sobre Mi
                    </Heading>
                    <Paragraph>
                        Actualmente soy Ingeniero de Software en DRAGADOS OFFSHORE MEXICO.
                        <br />
                        <br />
                        Soy un apasionado de la tecnologia, he pasado por diversas tecnologias dando solucion a problemas de la vida real, cuento con amplia experiencia en el rubro PETROLERO, O&M, LOGISTICA Y MONITOREO GPS automatizando procesos con tecnologia.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="https://www.dropbox.com/s/8l0axe4qee8ea0j/Curriculum%20CV%20Simple%20Blanco%20y%20Negro.pdf?dl=0" passHref>
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="red">
                                Descarga mi CV
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Timeline />
                </Section>
                
                <Section delay={0.2}>
                    <Heading as="h2" variant="section-title">
                        Estudios & Certificaciones
                    </Heading>
                    <SimpleGrid columns={[1, 2, 2]} gap={6}>

                    <BioSection>
                        <BioYear>2025</BioYear>
                        Desarrollo Web con IA: OpenIA - DeepSeek, JS y NodeJS
                    </BioSection>
                    <BioSection>
                        <BioYear>2025</BioYear>
                        Android Enterprise Certified Professional
                    </BioSection>
                    <BioSection>
                        <BioYear>2025</BioYear>
                        Android Enterprise Certified Associate
                    </BioSection>
                    <BioSection>
                        <BioYear>2024</BioYear>
                        Kubernetes & Docker en AWS
                    </BioSection>
                    <BioSection>
                        <BioYear>2024</BioYear>             
                        ABAP Para funcionales - Creación de reportes
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Ingeniero En Computacion - Universidad Autonoma Del Carmen
                    </BioSection>
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
                        Flutter Avanzado: Lleva tu conocimiento al siguiente nivel - Udemy
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        React: Aplicaciones en tiempo real con Socket-io - Udemy
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Git de principiante a experto, GitHub, GitLab, Azure, Commit - Udemy
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Scrum Master Certificacion - Udemy
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Diplomado Tecnico en BIG DATA - Fundacion Carlos Slim
                    </BioSection>

                        {/* Añade más elementos aquí */}
                    </SimpleGrid>
                </Section>
                
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        I ♥
                    </Heading>
                    <Paragraph>
                        Arte, Musica, Gatos, Baterista.
                    </Paragraph>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        En la Red  
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/efraindrummer" target="_blank">
                                <Button
                                    variant="ghost" 
                                    colorScheme="blackAlpha" 
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
                    </List>

                    <SimpleGrid columns={[1,2,2]} gap={6} mt={6}>
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
                </Section>
            </Container>
        </Layout>
    )
}

export default Home
export { getServerSideProps } from '../components/chakra'
