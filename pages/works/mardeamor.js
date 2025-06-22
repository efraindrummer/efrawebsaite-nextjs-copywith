import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Mardeamor = () => {
  return (
    <Layout title="mardeamor">
      <Container>
        <Title>
          Mar de Amor <Badge>2025</Badge>
        </Title>

        <P>
          <strong>Mar de Amor</strong> es un sitio web desarrollado para potenciar la presencia digital de una charcutería premium. Este proyecto busca combinar elegancia, funcionalidad y una experiencia de usuario envolvente para reflejar la calidad artesanal de sus productos gourmet.
        </P>

        <List ml={4} my={4} spacing={3}>
          <ListItem>
            <Meta>Tipo de Proyecto</Meta>
            <span>Sitio Web Dinámico con panel de gestión</span>
          </ListItem>
          <ListItem>
            <Meta>Funcionalidades</Meta>
            <span>
              Gestión de catálogos, creación y venta de cursos, sistema de productos, menú interactivo y área privada para clientes.
            </span>
          </ListItem>
          <ListItem>
            <Meta>Plataforma</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Tecnologías</Meta>
            <span>Vue.js, Pinia, Node.js, Docker, CI/CD, MySQL</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/mardeamor.png" alt="Dashboard MARDEAMOR" />

        <P>
          Este es solo el comienzo: en futuras versiones se integrará una plataforma completa de formación en línea, donde los usuarios podrán acceder a cursos sobre charcutería, cocina artesanal y maridaje, elevando aún más la experiencia de los clientes.
        </P>
      </Container>
    </Layout>
  )
}

export default Mardeamor
export { getServerSideProps } from '../../components/chakra'
