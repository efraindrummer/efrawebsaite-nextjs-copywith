import {
    Container,
    Heading,
    SimpleGrid,
    Divider
} from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import Layout from '../components/layouts/article'

//images
/* import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png' */
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'

import thumbYouTubeChatApp from '../public/images/links/chatapp.jpg'
import thumbAngularGiphyAPI from '../public/images/links/angular-coding.jpg'
import thumbEfraCode from '../public/images/links/web-efrain.jpg'
import thumbSnappApp from '../public/images/links/snapp.jpg'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Portafolio
                </Heading>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section delay={0.1}>
                        <WorkGridItem id="chatapp" title="ChatApp" thumbnail={thumbYouTubeChatApp}>
                            Una simple aplicacion de Mapas
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem id="giphy" title="Angular Giphy" thumbnail={thumbAngularGiphyAPI}>
                            Una aplicacion de web para buscar gifs echo en Angular
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem id="efracode" title="Website efracode" thumbnail={thumbEfraCode}>
                            Una pagina web echa en html, css, js
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem id="snapp" thumbnail={thumbSnappApp} title="Snapp">
                            Snapp Taxi Driver
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works