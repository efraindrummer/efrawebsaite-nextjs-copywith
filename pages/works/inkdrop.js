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

                <WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
                <WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />
            </Container>
        </Layout>
    )
}

export default Work