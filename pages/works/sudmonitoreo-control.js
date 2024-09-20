import { Container, Badge, Button, Icon, List, ListItem, VStack, SlideFade, ScaleFade } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import { useEffect, useState } from 'react'

const SudMonitoreControl = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 3000)
    }, [])
    


    return (
        <Layout title="Sud Monitoreo y Control">
            <Container py={8}>
                <Title>
                    Sud Monitoreo y Control <Badge>2022</Badge>
                </Title>
                <P>
                    Aplicación móvil de monitoreo de unidades GPS consumiendo servicios REST y WebSocket para manejo de notificaciones.
                </P>

                <SlideFade in={isLoaded} offsetY="20px">
                    <VStack align="start" spacing={4} mt={6}>
                        <List>
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
                            href="https://play.google.com/store/apps/details?id=com.sudsolutions.sudmonitoreoycontrol&hl=es" 
                            target="_blank"
                            colorScheme="yellow" 
                            leftIcon={<Icon as={IoLogoGooglePlaystore} />}
                        >
                            Sud Monitoreo y Control en Google Play
                        </Button>
                    </VStack>
                </SlideFade>

                <ScaleFade initialScale={0.9} in={isLoaded}>
                    <WorkImage src="/images/links/panel_sudmonitoreocontrol.jpg" alt="sudmonitoreo-control" mt={8} />
                </ScaleFade>
            </Container>
        </Layout>
    )
}

export default SudMonitoreControl
export { getServerSideProps } from '../../components/chakra'
