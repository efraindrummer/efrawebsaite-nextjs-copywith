import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Mardeamor = () => {
    return (
        <Layout title="mardeamor">
            <Container>
                <Title>
                    Mar de Amor <Badge>2025</Badge>
                </Title>

                {/* Descripción General */}
                <P>
                    Sitio Web para gestionar la imagen de un negocio de un Charcuteria Premiun.
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Sitio Web Dinamico</Meta>
                        <span>Sitio web echo para gestionar difetentes catalogos, Cursos, Productos y Menu</span>
                    </ListItem>
   
                </List>

                {/* Características Principales */}
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Plataforma</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Tecnologías</Meta>
                        <span>VueJS, Pinia, Nodejs, Docker, CU/CD, MySQL</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/mardeamor.png" alt="Dashboard MARDEAMOR" />

                <P>
                    En futuras iteraciones, se planea contuniar con el desarrollo de una plataofrma de cursos.
                </P>
            </Container>
        </Layout>
    )
}

export default Mardeamor
export { getServerSideProps } from '../../components/chakra'