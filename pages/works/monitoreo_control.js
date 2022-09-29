import { Container, Badge, Button, Icon, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { IoLogoGooglePlaystore } from 'react-icons/io5'

const MonitoreoControl = () => {
    return (
        <Layout title="monitoreo_control">
            <Container>
                <Title>
                    Monitoreo y Control <Badge>2022</Badge>
                </Title>
                <P>
                    Aplicacion mobile para la empresa SudSolutions, es la continuacion de la aplicacion de seguridad 360 solo que esta app esta modificada para un cliente en especifico
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Mobile</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Flutter</span>
                        <span>Django</span>
                    </ListItem>
                </List>

                <Link href="https://play.google.com/store/apps/details?id=com.sudsolutions.seguridad360&hl=es_MX" target="_blank">
                    <Button
                        variant="ghost" 
                        colorScheme="yellow" 
                        leftIcon={<Icon as={IoLogoGooglePlaystore} />}
                    >
                        Seguridad360
                    </Button>
                    <br />
                </Link>

                <WorkImage src="/images/links/comp.jpg" alt="seguridad-360" />
                <WorkImage src="/images/links/seguridad360web.jpg" alt="seguridad-360" />
            </Container>
        </Layout>
    )
}

export default MonitoreoControl