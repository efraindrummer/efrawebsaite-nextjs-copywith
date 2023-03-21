import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbCallingApp from '../public/images/contents/calling_app.jpg'
import thumbMapasApp from '../public/images/contents/mapas_app.jpg'
import thumbFlutterBug from '../public/images/contents/flutter_bugs.jpg'
import thumbGithub from '../public/images/contents/github.jpg'

const Posts = () => {
    return (
        <Layout title="Posts">
            <Container>
                <Heading as="h4" fontSize={20} mb={4}>
                    Publicaciones & Videos Favoritos
                </Heading>
                <Section delay={0.1}>
                    <SimpleGrid columns={[1,2,2]} gap={6}>
                        <GridItem 
                            title="Aplicacion de Llamadas" 
                            thumbnail={thumbCallingApp}
                            href="https://www.youtube.com/watch?v=blUy-wAukSw" 
                        />
                        <GridItem 
                            title="Aplicacion de Mapas" 
                            thumbnail={thumbMapasApp}
                            href="https://www.youtube.com/watch?v=zCmrnaMlUvk&t=14s" 
                        />
                    </SimpleGrid>
                </Section>
                <Section delay={0.3}>
                    <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="Reparando Bugs"
                        thumbnail={thumbFlutterBug}
                        href="https://www.youtube.com/watch?v=cQydP1xbJeM"
                    />
                    <GridItem
                        title="Github"
                        thumbnail={thumbGithub}
                        href="https://github.com/efraindrummer"
                    />
                    </SimpleGrid>
                </Section>
            </Container>
        </Layout>
    )
}

export default Posts