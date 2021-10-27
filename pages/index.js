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
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3}  mb={6} aling="center">
                    Hello, I&apos;m a full-stack developer based in Cd del Carmen Mexico!
                </Box>
                
                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" varlant="page-title">
                            Efrain May
                        </Heading>
                        <p>Software Engineer ( Artist / Developer / Designer )</p>
                    </Box>
                </Box>
                <Box 
                    flexShrink={0} 
                    mt={{base: 4, md: 0}} 
                    ml={{md: 6}} 
                    align="center"
                >
                    <Image 
                        borderColor="whiteAlpha.800" 
                        borderWidth={2} 
                        borderStyle="solid" 
                        maxWidth="100px" 
                        display="inline-block"
                        borderRadius="full"
                        src="/images/efrain.jpg"
                        alt="Profile Image"
                    />
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" varlant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        Efrain es un Ingeniero de Software, creador de contenido y un apasionado por la tecnologia, a lo largo del tiempo
                        a desarrollado productos para las empresas como TuProp, Telecom Bet-Gui, actualmente es un full-stack developer en
                        texnologias JavaScript, usando React, Next, Node y Angular, tambien desarrollo aplicaciones moviles con Flutter 
                        & Dart, Contactame {' '}
                        <NextLink href="/works/inkdrop">
                            <Link>Inkdrop</Link>
                        </NextLink>
                        .
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                Mi Potafolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" varlant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>
                            1998
                        </BioYear>
                        Nacio en Carmen, Campeche, Mexico!
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Ingeniero en Computacion&apos; graduado en la Universidad Autonoma del Carmen de la facultad de Ciencias de la Informacion
                    </BioSection>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" varlant="section-title">
                        I ♥
                    </Heading>
                    <Paragraph>
                        Art, Music,{' '}
                        <Link href="https://efraindev.netlify.app/" target="_blank">
                            Music
                        </Link>
                        , Playing Drums,{' '}
                    </Paragraph>
                </Section>
            </Container>
        </Layout>
    )
}


export default Page