import {
    Container,
    Heading,
    SimpleGrid
} from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import Layout from '../components/layouts/article'


import thumbYouTubeChatApp from '../public/images/links/chatapp.jpg'
import thumbAngularGiphyAPI from '../public/images/links/angular-coding.jpg'
import thumbEfraCode from '../public/images/links/web-efrain.jpg'
import thumbSchoolApp from '../public/images/links/school.jpg'
import thumbSnappApp from '../public/images/links/snapp.jpg'
import thumbAccessControl from '../public/images/links/control-acceso.jpg'
import thumbAngularAdmin from '../public/images/links/angular-admin.jpg'
import thumbSeguridad360 from '../public/images/links/seguridad360.jpg'
import thumbSudMonitoreoControl from '../public/images/links/panel_sudmonitoreocontrol.jpg'
import thumbLidosPizza from '../public/images/works/weblidos.png';
import thumbPronTaxi from '../public/images/works/prontaxi-principal.jpg';

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
                        <WorkGridItem id="school" title="Desktop App" thumbnail={thumbSchoolApp}>
                            Aplicacion de Registro de alumnos para una escuela
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem id="control_acceso" thumbnail={thumbAccessControl} title="Control de Acceso">
                            Sistema de Control de Acceso
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem id="angularadmin" thumbnail={thumbAngularAdmin} title="Administrador de Pacientes">
                            Sistema de Control de Acceso
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem id="snapp" thumbnail={thumbSnappApp} title="Snapp">
                            Snapp Taxi Driver
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem id="seguridad360" thumbnail={thumbSeguridad360} title="Seguridad360">
                            Seguridad360
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem id="sudmonitoreo-control" thumbnail={thumbSudMonitoreoControl} title="Sud Monitoreo y Control">
                            Sud Monitoreo y Control
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem id="lidosapp" thumbnail={thumbLidosPizza}  title="Lidos Pizza">
                            Lidos Pizza
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem id="prontaxi" thumbnail={thumbPronTaxi}  title="Mi Taxi">
                            Mi Taxi Pasajero y Conductor
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works