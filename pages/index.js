import { Container, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'

const Page = () => {
    return (
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
                <p>Paragraph</p>
            </Section>
        </Container>
    )
}


export default Page