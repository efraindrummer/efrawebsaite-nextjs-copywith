import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Nuup = () => {
    return (
        <Layout title="nuup">
            <Container>
                <Title>
                    Nuup <Badge>2024</Badge>
                </Title>
                <P>
                Desarrollo e implementación de un Sistema ERP (Enterprise Resource Planning) interno orientado a la automatización de procesos clave en los diferentes departamentos de la empresa. El sistema permitió optimizar flujos de trabajo, centralizando la gestión de información y facilitando una mayor claridad en la toma de decisiones. Se implementaron módulos personalizados que mejoraron la eficiencia operativa, reduciendo errores manuales y mejorando la colaboración entre equipos. Estas mejoras resultaron en un manejo más eficaz de los recursos, una mayor visibilidad en los procesos internos, y un incremento en la productividad global de la empresa.
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJS, EJS, Sequelize, Bulma CSS, MySQL, Git, Docker</span>
                    </ListItem>
                </List>

                

                <WorkImage src="/images/links/nuup_login.png" alt="nuup_login" />
                <WorkImage src="/images/links/nuup_404.png" alt="nuup_404" />
            </Container>
        </Layout>
    )
}

export default Nuup
export { getServerSideProps } from '../../components/chakra'