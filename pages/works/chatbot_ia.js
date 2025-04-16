import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const ChatBotIA = () => {
    return (
        <Layout title="chatbot_ia">
            <Container>
                {/* Título del Proyecto */}
                <Title>
                    ChatBot Interno para Negocio Local <Badge>2025</Badge>
                </Title>

                {/* Descripción General */}
                <P>
                    Desarrollé un chatbot interno para optimizar las operaciones diarias de un negocio local. Este proyecto aprovecha las capacidades avanzadas de los modelos de lenguaje de OpenAI (como GPT) para crear una solución personalizada que resuelve necesidades específicas del negocio.
                </P>
                <P>
                    El chatbot fue diseñado para mejorar la eficiencia operativa, reducir la carga de trabajo repetitivo del equipo y proporcionar respuestas rápidas y precisas a consultas frecuentes. Utilicé las herramientas de asistentes de OpenAI para integrar inteligencia artificial de manera flexible y adaptada a las necesidades del negocio.
                </P>

                {/* Características Principales */}
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Plataforma</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Tecnologías</Meta>
                        <span>Node.js, React, OpenAI API, PostgreSQL</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Repositorio</Meta>
                        <Link href="https://github.com/tu-usuario/chatbot-local" target="_blank">
                            Código Fuente <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Funcionalidad</Meta>
                        <span>Gestión de inventario, programación de turnos, atención al cliente interna</span>
                    </ListItem>
                </List>

                {/* Imágenes del Proyec7to */}
                {/* <WorkImage src="/images/links/asistente_virtual.jpg" alt="Chatbot IA" /> */}
                <WorkImage src="/images/links/chatbot_ia.jpg" alt="Dashboard del Chatbot" />

                {/* Detalles Adicionales */}
                
                <P>
                    En futuras iteraciones, planeo añadir funcionalidades como análisis predictivo, soporte multilingüe y una interfaz de voz para facilitar aún más la interacción.
                </P>
            </Container>
        </Layout>
    )
}

export default ChatBotIA
export { getServerSideProps } from '../../components/chakra'