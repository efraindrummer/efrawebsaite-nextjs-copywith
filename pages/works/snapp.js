import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Snapp = () => {
    return (
        <Layout title="snapp">
            <Container>
                <Title>
                    Snapp <Badge>2020</Badge>
                </Title>
                <P>
                    Snapp, es un aplicacion de taxi driver, es un proyecto realizado por diferentes desarrolladores en cualquier parte del mundo
                    aldredeor de todo LATAM, actualmente soy el Lider Tecnico del proyecto
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows, MacOS, Linux, IOS, Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Flutter, Node JS, Hasura IO, GetX, Provider, React</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/links/snapp.jpg" alt="snapp" />
            </Container>
        </Layout>
    )
}

export default Snapp
export { getServerSideProps } from '../../components/chakra'