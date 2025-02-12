import Head from 'next/head'
import Navbar from '../navbar'
import NoSsr from './no-ssr'
import { Box, Container, Image } from '@chakra-ui/react'
import Footer from '../footer'



const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={9}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Efrain May - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <NoSsr>
                    <Image src='/images/javascript.jpg' mb={6} borderRadius={10} alt="js"/>
                </NoSsr>
                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main