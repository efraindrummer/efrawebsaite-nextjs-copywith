import { Container, Badge, Button, Icon, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { IoLogoGithub } from 'react-icons/io5'

const AngularAdmin = () => {
    return (
        <Layout title="angularadmin">
            <Container>
                <Title>
                    Administrador de Pacientes <Badge>2020</Badge>
                </Title>
                <P>
                    Administrador de Pacientes, sistema de hospital para administrar a los pacientes
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web, Local</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>MEAN (MongoDB + Express + Angular + Node JS)</span>
                    </ListItem>
                </List>

                <P>Code</P>

                <Link href="https://github.com/efraindrummer/angular-adv-AdminPro" target="_blank">
                    <Button
                        variant="ghost" 
                        colorScheme="blackAlpha.900" 
                        leftIcon={<Icon as={IoLogoGithub} />}
                    >
                        @efraindrummer
                    </Button>
                </Link>

                <WorkImage src="/images/links/angular-admin.jpg" alt="control-acceso" />
                <WorkImage src="/images/links/angular-admin-1.jpg" alt="control-acceso" />
            </Container>
        </Layout>
    )
}

export default AngularAdmin