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
                    Angular Giphy <Bagde>2020</Bagde>
                </Title>
                <p>
                    Este es una aplicacion para buscar tus gifs favoritos, guardalo en tu localStorage, y podras tenerlo
                    disponibles en cualquier momento y en todo lugar
                </p>
            </Container>
        </Layout>
    )
}

export default Giphy