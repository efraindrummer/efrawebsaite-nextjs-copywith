import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="chatapp">
            <Container>
                <Title>
                    ChatApp <Badge>2020</Badge>
                </Title>
                <P>
                    Esta es una app que simula como funciona la aplicacion de Uber, usando Google Maps
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>IOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJS, Flutter</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/links/chatapp.jpg" alt="Chatapp" />
                <WorkImage src="/images/links/flutter.png" alt="Chatapp" />
            </Container>
        </Layout>
    )
}

export default Work