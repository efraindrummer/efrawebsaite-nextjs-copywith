import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const DragadosOffshore = () => {
    return (
        <Layout title="dragados_offshore">
            <Container>
                <Title>
                    ERP Software para Dragados Offshore <Badge>2025></Badge>
                </Title>

                <P>
                    Actualmente trabajo en el desarrollo de software para aplicaciones relacionadas con dragados offshore. Mi rol principal consiste en migrar código heredado de VB6 a .NET Framework, optimizando tanto el rendimiento como la funcionalidad de la aplicación.
                </P>

                <P>
                    En este proceso, he realizado tareas clave como:
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Migración de Código</Meta>
                        <span>Modernización del código base desde VB6 hacia .NET Framework, asegurando compatibilidad y eliminando dependencias obsoletas.</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Optimización del Rendimiento</Meta>
                        <span>Identificación y resolución de cuellos de botella para mejorar la rapidez y eficiencia de la aplicación.</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Implementación de Mejoras</Meta>
                        <span>Incorporación de nuevas características como interfaces intuitivas, generación de informes automatizados y soporte para tecnologías modernas.</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Mantenimiento y Escalabilidad</Meta>
                        <span>Aseguramiento de que la nueva versión sea escalable, mantenible y alineada con las mejores prácticas de desarrollo de software.</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Migracion Web</Meta>
                        <span>Alguna futura de vbscript a Nodejs.</span>
                    </ListItem>
                </List>

                {/* Características Principales */}
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Plataforma</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Tecnologías</Meta>
                        <span>.NET, SQL Server, Javascript</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Funcionalidad</Meta>
                        <span>Software ERP Interno</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/links/dragados_offshore.png" alt="Dashboard del ERP" />

                <P>
                    Gracias a estas mejoras, la aplicación no solo es más rápida y confiable, sino que también está preparada para integrarse con sistemas modernos y adaptarse a futuras actualizaciones tecnológicas.
                </P>

            </Container>
        </Layout>
    )
}

export default DragadosOffshore
export { getServerSideProps } from '../../components/chakra'