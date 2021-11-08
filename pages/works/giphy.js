import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Giphy = () => {
    return (
        <Layout title="angulargiphy">
            <Container>
                <Title>
                    Angular Giphy <Badge>2020</Badge>
                </Title>
                <P>
                    Este es una aplicacion para buscar tus gifs favoritos, guardalo en tu localStorage, y podras tenerlo
                    disponibles en cualquier momento y en todo lugar
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows, MacOS, Linux, IOS, Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Angular, Giphyapi, PWA</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/links/angular-coding.jpg" alt="Chatapp" />
            </Container>
        </Layout>
    )
}

export default Giphy