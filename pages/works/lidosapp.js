import { Container, Badge, List, ListItem, Box, Image, SimpleGrid } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Giphy = () => {
    return (
        <Layout title="lidosapp">
            <Container>
                <Title>
                    Lidos Pizza Web & App<Badge>2023</Badge>
                </Title>
                <P>
                    Sistema Web y Aplicacion de delivery con los roles de cliente, repartidor y restaurante, manejo de pedidos, cataolog de productos, carrito de compras,
                    pasarela de pago con mercado pago, google maps api, geolocalizacion del pedido en tiempo real, web service admin para restaurante, manejo de notificaciones
                    con firebase, comunicacion fcm, PUSH NOTIFICATIONS(APP CERRADA, ABIERTA, SEGUNDO PLANO) entre otras funcionalidades.
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>IOS, Android, Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJS, Vue, TypeScript, MySQL, Flutter, Firebase</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/weblidos.png" alt="lidos-web" />
                <WorkImage src="/images/works/weblidos2.png" alt="lidos-web" />

                <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
                    <Box width='240px'>
                        <Image src='/images/works/Screenshot_1679384967.png' alt='splashscreen' />
                    </Box>
                    <Box width='240px'>
                        <Image src='/images/works/Screenshot_1679384975.png' alt='permission' />
                    </Box>
                    <Box width='240px'>
                        <Image src='/images/works/Screenshot_1679384982.png' alt='login' />
                    </Box>
                    <Box width='240px'>
                        <Image src='/images/works/Screenshot_1679385000.png' alt='roles' />
                    </Box>
                    <Box width='240px'>
                        <Image src='/images/works/Screenshot_1679385084.png' alt='catalogo' />
                    </Box>
                    <Box width='240px'>
                        <Image src='/images/works/Screenshot_1679385097.png' alt='order' />
                    </Box>
                </SimpleGrid>

                

            </Container>
        </Layout>
    )
}

export default Giphy
export { getServerSideProps } from '../../components/chakra'