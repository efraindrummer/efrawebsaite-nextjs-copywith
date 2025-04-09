import { Container, Badge, List, ListItem, Button, Link as ChakraLink, Icon } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import NextLink from 'next/link'
import { FaBolt } from 'react-icons/fa'



const Tesla = () => {
    return (
        <Layout title="tesla">
            <Container>
                <Title>
                    tesla <Badge>2025</Badge>
                </Title>
                <P>
                    Pagina Web Clon de Tesla
                </P>

                <NextLink href="https://cloneteslaweb.netlify.app/" passHref>
                    <Button
                        as={ChakraLink}
                        rightIcon={<Icon as={FaBolt} />}
                        colorScheme="pink"
                        bgGradient="linear(to-r, pink.400, red.400)"
                        color="white"
                        _hover={{
                        bgGradient: "linear(to-r, red.400, pink.400)",
                        transform: 'scale(1.05)'
                        }}
                        transition="all 0.3s ease-in-out"
                        mt={6}
                        px={6}
                        py={6}
                        fontSize="lg"
                        borderRadius="2xl"
                        boxShadow="lg"
                        target="_blank"
                    >
                        Ver Clon de Tesla
                    </Button>
                </NextLink>


                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Astro Framework</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/tesla.png" alt="tesla" />

                
            </Container>
        </Layout>
    )
}

export default Tesla
export { getServerSideProps } from '../../components/chakra'
