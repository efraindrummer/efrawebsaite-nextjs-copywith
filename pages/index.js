import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3}  mb={6} aling="center">
                Hello, I&apos;m a full-stack developer based in Japan!
            </Box>
            
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" varlant="page-title">
                        Efrain May
                    </Heading>
                    <p>Software Engineer ( Artist / Developer / Designer )</p>
                </Box>
            </Box>
        </Container>
    )
}


export default Page