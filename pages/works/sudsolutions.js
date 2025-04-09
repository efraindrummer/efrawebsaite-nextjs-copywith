import {
    Container,
    Badge,
    List,
    ListItem,
    Button,
    Link as ChakraLink
  } from '@chakra-ui/react'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  import NextLink from 'next/link'
  
  const Sudsolutions = () => {
    return (
      <Layout title="SudSolutions">
        <Container>
          <Title>
            SudSolutions <Badge>2022</Badge>
          </Title>
  
          <P>
            Fui parte del equipo de <strong>Sud Solutions</strong> como{' '}
            <strong>Desarrollador de Aplicaciones Móviles</strong> utilizando{' '}
            <strong>Flutter</strong>. También colaboré en el desarrollo web de su sistema ERP.
          </P>
  
          <List ml={4} my={4}>
            <ListItem>
              <Meta>Plataforma</Meta>
              <span>Web y Mobile</span>
            </ListItem>
            <ListItem>
              <Meta>Stack Tecnológico</Meta>
              <span>Flutter, Node.js, Express, EJS</span>
            </ListItem>
          </List>
  
          <WorkImage src="/images/works/sudsolutionserp.png" alt="ERP SudSolutions" />
  
          {/* Botón opcional para ver sitio o repo */}
          {
          <NextLink href="https://sudsolutions.mx/" passHref>
            <Button
              as={ChakraLink}
              colorScheme="teal"
              mt={6}
              target="_blank"
              borderRadius="xl"
            >
              Ver sitio
            </Button>
          </NextLink>
         }
        </Container>
      </Layout>
    )
  }
  
  export default Sudsolutions
  export { getServerSideProps } from '../../components/chakra'
  