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
  import thumbLidosPizza from '../public/images/works/weblidos.png'
  import thumbPronTaxi from '../public/images/works/prontaxi-principal.jpg'
  import thumbNuup from '../public/images/works/nuup_login.png'
  import thumbTesla from '../public/images/works/tesla.png'
  import thumbChatIA from '../public/images/links/chatbot_ia.jpg'
  import thumbDragadosOffshore from '../public/images/links/dragados_offshorelogo.jpg'
  import thumbMardeAmor from '../public/images/works/mardeamor.png'
  import thumbCCONSULTORES from '../public/images/works/cconsultores.png'


  
  const projects = [
    {
      id: 'chatapp',
      title: 'ChatApp',
      thumbnail: thumbYouTubeChatApp,
      description: 'Aplicación simple de mapas con chat integrado'
    },
    {
      id: 'giphy',
      title: 'Buscador de Gifs',
      thumbnail: thumbAngularGiphyAPI,
      description: 'App en Angular para buscar GIFs con Giphy API'
    },
    {
      id: 'efracode',
      title: 'Sitio Web EfraCode',
      thumbnail: thumbEfraCode,
      description: 'Sitio web hecho con HTML, CSS y JavaScript puro'
    },
    {
      id: 'school',
      title: 'School Desktop App',
      thumbnail: thumbSchoolApp,
      description: 'App de escritorio para registro de alumnos'
    },
    {
      id: 'control_acceso',
      title: 'Sistema de Control de Acceso',
      thumbnail: thumbAccessControl,
      description: 'Plataforma para gestionar accesos y usuarios'
    },
    {
      id: 'angularadmin',
      title: 'Administrador de Pacientes',
      thumbnail: thumbAngularAdmin,
      description: 'Dashboard Angular para gestión médica'
    },
    {
      id: 'snapp',
      title: 'Snapp Taxi Driver',
      thumbnail: thumbSnappApp,
      description: 'App móvil para conductores tipo Uber'
    },
    {
      id: 'seguridad360',
      title: 'Seguridad 360',
      thumbnail: thumbSeguridad360,
      description: 'Sistema completo de monitoreo y seguridad'
    },
    {
      id: 'sudmonitoreo-control',
      title: 'Sud Monitoreo y Control',
      thumbnail: thumbSudMonitoreoControl,
      description: 'Panel para control industrial y seguridad'
    },
    {
      id: 'lidosapp',
      title: 'Lidos Pizza',
      thumbnail: thumbLidosPizza,
      description: 'Landing page para restaurante de pizzas'
    },
    {
      id: 'prontaxi',
      title: 'Mi Taxi (Pasajero & Conductor)',
      thumbnail: thumbPronTaxi,
      description: 'App para movilidad urbana con dos perfiles'
    },
    {
      id: 'nuup',
      title: 'Sistema NUUP ERP',
      thumbnail: thumbNuup,
      description: 'Sistema de gestión empresarial completo'
    },
    {
      id: 'tesla',
      title: 'Clon Web de Tesla',
      thumbnail: thumbTesla,
      description: 'Clon responsivo del sitio oficial de Tesla'
    },
    {
      id: 'chatbot_ia',
      title: 'ChatBotIA',
      thumbnail: thumbChatIA,
      description: 'Assistant IA para negocio local'
    },
    {
      id: 'dragados_offshore',
      title: 'Dragados Offshore',
      thumbnail: thumbDragadosOffshore,
      description: 'ERP para dragados offshore, migrando de VB6 a .NET(en proceso)'
    },
    {
      id: 'mardeamor',
      title: 'Mar de Amor',
      thumbnail: thumbMardeAmor,
      description: 'Sitio web para gestionar charcutería premium, con módulos de catálogo, cursos y productos.'
    },
    {
      id: 'cconsultores',
      title: 'Carretino Consultores',
      thumbnail: thumbCCONSULTORES,
      description: 'Sitio web SPA para potenciar la presencia digital de un despacho contable.'
    }
  ]
  
  const Works = () => {
    return (
      <Layout>
        <Container maxW="container.lg" pt={6}>
          <Heading as="h3" fontSize="2xl" mb={6} textAlign="center">
            Portafolio de Proyectos
          </Heading>
  
          <SimpleGrid columns={[1, 2, 3]} gap={6}>
            {projects.map((proj, idx) => (
              <Section key={proj.id} delay={0.1 * (idx + 1)}>
                <WorkGridItem
                  id={proj.id}
                  title={proj.title}
                  thumbnail={proj.thumbnail}
                >
                  {proj.description}
                </WorkGridItem>
              </Section>
            ))}
          </SimpleGrid>
        </Container>
      </Layout>
    )
  }
  
  export default Works
  