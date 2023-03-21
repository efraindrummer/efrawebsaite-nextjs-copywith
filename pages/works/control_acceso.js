import { Container, Badge, Button, Icon, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { IoLogoGithub } from 'react-icons/io5'

const ControlAcceso = () => {
    return (
        <Layout title="control_acceso">
            <Container>
                <Title>
                    Control de Acceso <Badge>2018</Badge>
                </Title>
                <P>
                    Sistema de control de acceso de alumnos, este es un sistema web que le servira al edificio de la universidad a
                    tomar registro de la entradas y salidas de los alumnos por los diferentes salones y salas usando su tarjeta NFC,
                    cada quien tendra su tarjeta o crendencial NFC que les permitira el acceso a sus salones de clases y diferentes 
                    areas de la universidad.
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web, Local</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Php 7, MySQL, Html, Css, Javascript, Bootstrap 4</span>
                    </ListItem>
                </List>

                <P>Code</P>

                <Link href="https://github.com/efraindrummer/Control-de-acceso-con-NFC" target="_blank">
                    <Button
                        variant="ghost" 
                        colorScheme="blackAlpha.900" 
                        leftIcon={<Icon as={IoLogoGithub} />}
                    >
                        @efraindrummer
                    </Button>
                </Link>

                <WorkImage src="/images/links/control-acceso.jpg" alt="control-acceso" />
                <WorkImage src="/images/links/control-alumnos.jpg" alt="control-acceso" />
            </Container>
        </Layout>
    )
}

export default ControlAcceso
export { getServerSideProps } from '../../components/chakra'