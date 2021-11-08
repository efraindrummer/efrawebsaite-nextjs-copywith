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
                        <Meta>Website</Meta>
                        <Link href='https://www.inkdrop.app/'>
                        https://www.inkdrop.app/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>WIOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJS, Flutter</span>
                    </ListItem>
                    <ListItem>
                        <Meta>BlogPost</Meta>
                        <Link href='https://efraindev.netlify.app/' target="_blank">
                            https://efraindev.netlify.app/
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
                <WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />
            </Container>
        </Layout>
    )
}

export default Work