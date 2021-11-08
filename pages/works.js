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

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Portafolio
                </Heading>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="chatapp" title="ChatApp" thumbnail={thumbYouTubeChatApp}>
                            Una simple aplicacion de Mapas
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="angulargiphy" title="Angular Giphy" thumbnail={thumbAngularGiphyAPI}>
                            Una aplicacion de web para buscar gifs echo en Angular
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="fourpainters" title="The four painters" thumbnail={thumbFourPainters}>
                            A video work generated with deep learning, imitating famous four
                            painters like Van Gogh
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
                            An app that suggests ramen(noodle) shops based on a given photo of
                            the ramen you want to eat
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works