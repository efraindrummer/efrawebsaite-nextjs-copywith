import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="efracode">
            <Container>
                <Title>
                    Efracode Website <Badge>2020</Badge>
                </Title>
                <P>
                    Una pagina web simple que cree para reforzar los card y transiciones de css
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>IOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Html, Css, Javascript</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/links/web-efrain.jpg" alt="Chatapp" />
            </Container>
        </Layout>
    )
}

export default Work