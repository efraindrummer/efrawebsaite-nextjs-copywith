import { Container, Badge, Button, Icon, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { IoLogoGithub } from 'react-icons/io5'

const School = () => {
    return (
        <Layout title="school">
            <Container>
                <Title>
                    School App <Badge>2019</Badge>
                </Title>
                <P>
                    Esto es una aplicacion de escritorio de un sistema escolar, login/registo de alumnos/calificaciones/reportes.
                    <br />
                    Desktop System School como proyecto de la materia de desarrollo de aplicaciones con .NET
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Visual Studio, VB. NET, MySQL</span>
                    </ListItem>
                </List>

                <P>Code</P>

                <Link href="https://github.com/efraindrummer/School-Visual-Basic.NET" target="_blank">
                    <Button
                        variant="ghost" 
                        colorScheme="blackAlpha.900" 
                        leftIcon={<Icon as={IoLogoGithub} />}
                    >
                        @efraindrummer
                    </Button>
                </Link>

                <WorkImage src="/images/links/school.jpg" alt="school" />
                <WorkImage src="/images/links/school-secondary.jpg" alt="school" />
                <WorkImage src="/images/links/school-code.jpg" alt="school" />
            </Container>
        </Layout>
    )
}

export default School