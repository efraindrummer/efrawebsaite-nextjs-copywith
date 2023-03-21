import { Container, Badge, Button, Icon, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { IoLogoGooglePlaystore } from 'react-icons/io5'

const SudMonitoreControl = () => {


    return (
        <Layout title="sudmonitoreo-control">
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
                        <span>Mobile</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Flutter</span>
                    </ListItem>
                </List>
                    <Button
                        href="https://play.google.com/store/apps/details?id=com.sudsolutions.sudmonitoreoycontrol&hl=es" target="_blank"
                        variant="ghost" 
                        colorScheme="yellow" 
                        leftIcon={<Icon as={IoLogoGooglePlaystore} />}
                    >
                        Sud Monitoreo y Control
                    </Button>

                <WorkImage src="/images/links/panel_sudmonitoreocontrol.jpg" alt="sudmonitoreo-control" />
            </Container>

        </Layout>
    )
}

export default SudMonitoreControl
export { getServerSideProps } from '../../components/chakra'