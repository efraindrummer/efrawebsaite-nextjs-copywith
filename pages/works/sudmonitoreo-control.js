import { Container, Badge, Button, Icon, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { IoLogoGooglePlaystore } from 'react-icons/io5'

const SudMonitoreControl = () => {
    return (
        <Layout title="monitoreocontrol">
            <Container>
                <Title>
                Sud Monitoreo y Control <Badge>2022</Badge>
                </Title>
                <P>
                    Aplicacion mobile de monitoreo de unidades GPS consumiendo servicios REST y WebSocket para manejo de notifcaciones.
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Mobile Android & IOS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Flutter</span>
                    </ListItem>
                </List>

                <Link href="https://play.google.com/store/apps/details?id=com.sudsolutions.sudmonitoreoycontrol&hl=es" target="_blank">
                    <Button
                        variant="ghost" 
                        colorScheme="yellow" 
                        leftIcon={<Icon as={IoLogoGooglePlaystore} />}
                    >
                        Seguridad360
                    </Button>
                </Link>

                <WorkImage src="/images/links/panel_sudmonitoreocontrol.png" alt="sudmonitoreo-control" />
                <WorkImage src="/images/links/seguridad360web.jpg" alt="seguridad-360" />
            </Container>
        </Layout>
    )
}

export default SudMonitoreControl