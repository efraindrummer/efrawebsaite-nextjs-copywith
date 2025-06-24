import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const CCONSULTORES = () => {
  return (
    <Layout title="Carretino Consultores">
      <Container>
        <Title>
          Carretino Consultores <Badge>2025</Badge>
        </Title>

        <P>
          <strong>CCONSULTORES</strong> es una aplicación web tipo SPA (Single Page Application) desarrollada para fortalecer la presencia digital de un despacho contable. El sitio ofrece una experiencia fluida y moderna, permitiendo a los clientes explorar los servicios, establecer contacto y conocer más sobre el enfoque profesional de la firma.
        </P>

        <P>
          El objetivo principal fue crear una plataforma clara, accesible y estéticamente atractiva, que transmita confianza y profesionalismo en cada sección.
        </P>

        <List ml={4} my={4} spacing={3}>
          <ListItem>
            <Meta>Tipo de Proyecto</Meta>
            <span>Aplicación Web SPA</span>
          </ListItem>

          <ListItem>
            <Meta>Plataforma</Meta>
            <span>Web (Responsive)</span>
          </ListItem>

          <ListItem>
            <Meta>Tecnologías</Meta>
            <span>React, Next.js 15, TypeScript, TailwindCSS</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/cconsultores.png" alt="Vista principal de CCONSULTORES" />
        <WorkImage src="/images/works/cconsultores_back1.png" alt="Panel administrativo de CCONSULTORES" />
        <WorkImage src="/images/works/cconsultores_back2.png" alt="Vista de servicios en CCONSULTORES" />
      </Container>
    </Layout>
  )
}

export default CCONSULTORES
export { getServerSideProps } from '../../components/chakra'
