import { Container, Badge, Button, Icon, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { IoLogoGooglePlaystore } from 'react-icons/io5'

const Seguridad360 = () => {
    return (
        <Layout title="seguridad360">
            <Container>
                <Title>
                    Seguridad360 <Badge>2022</Badge>
                </Title>
                <P>
                    Aplicacion mobile de Buscador de viajes ,Galería de imágenes, Lista de inventarios por destino, desarrollada para la empresa SudSolutions
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
                    href="https://play.google.com/store/apps/details?id=com.sudsolutions.seguridad360&hl=es_MX" target="_blank"
                        variant="ghost" 
                        colorScheme="yellow" 
                        leftIcon={<Icon as={IoLogoGooglePlaystore} />}
                    >
                        Seguridad360
                    </Button>

                <WorkImage src="/images/links/seguridad360panel.jpg" alt="seguridad-360" />
                <WorkImage src="/images/links/seguridad360web.jpg" alt="seguridad-360" />
            </Container>
        </Layout>
    )
}

export default Seguridad360
export { getServerSideProps } from '../../components/chakra'