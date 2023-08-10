import { Container, Badge, Button, Icon, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { IoLogoGooglePlaystore } from 'react-icons/io5'

const School = () => {
    return (
        <Layout title="prontaxi">
            <Container>
                <Title>
                    MI TAXI <Badge>2023</Badge>
                </Title>
                <P>
                    MI TAXI Aplicacion de taxis en modo conductor y modo cliente.
                    <br />
                    
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Kotlin, Firebase, Google Mpas(direction api, maps api, google places api)</span>
                    </ListItem>
                </List>

                <P>Link</P>

                <Link href="https://play.google.com/store/apps/details?id=com.efracode.prontaxiclient" target="_blank">
                    <Button
                        variant="outline" 
                        colorScheme="yellow" 
                        leftIcon={<Icon as={IoLogoGooglePlaystore} />}
                    >
                        MI TAXI PASAJERO
                    </Button>
                </Link>

                <br />

                <Link href="https://play.google.com/store/apps/details?id=com.efracode.prontaxidriver" target="_blank">
                    <Button
                        variant="outline" 
                        colorScheme="yellow" 
                        leftIcon={<Icon as={IoLogoGooglePlaystore} />}
                    >
                        MI TAXI CONDUCTOR
                    </Button>
                </Link>

                <WorkImage src="/images/works/prontaxi-principal.jpg" alt="taxi" />
                <WorkImage src="/images/works/play_taxi.jpg" alt="taxi" />
            </Container>
        </Layout>
    )
}

export default School
export { getServerSideProps } from '../../components/chakra'