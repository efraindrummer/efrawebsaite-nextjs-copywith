import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Inkdrop">
            <Container>
                <Title>
                    Inkdrop <Badge>2016</Badge>
                </Title>
                <P>
                    A markdown  note-taking app with 100+ plugins, cross-platform and encrypted data sync support
                </P>
            </Container>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href='https://www.inkdrop.app/'>
                    https://www.inkdrop.app/ <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux/IOS/Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>NodeJS, React, Angular, Flutter, VB.NET, Next JS</span>
                </ListItem>
                <ListItem>
                    <Meta>BlogPost</Meta>
                    <Link href='https://efraindev.netlify.app/' target="_blank">
                        https://efraindev.netlify.app/
                    </Link>
                </ListItem>
            </List>
        </Layout>
    )
}

export default Work