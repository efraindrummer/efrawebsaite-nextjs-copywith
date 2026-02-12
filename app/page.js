'use client'

import NextLink from 'next/link'
import {
  Link,
  Container,
  Box,
  Heading,
  Button,
  SimpleGrid,
  List,
  Icon,
  ListItem,
  useColorModeValue,
  chakra,
  Text,
  Flex,
  Badge,
  VStack,
  HStack,
} from '@chakra-ui/react'
import { GridItem } from '../components/grid-item'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'
import { Timeline } from '../components/timeline'
import { GlassCard } from '../components/glass-card'
import { StaggerContainer, StaggerItem } from '../components/animations'
import Image from 'next/image'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoFacebook,
} from 'react-icons/io5'
import { motion } from 'framer-motion'

import thumbYouTubeChatApp from '../public/images/links/chatapp.jpg'
import thumbAngularGiphyAPI from '../public/images/links/angular-coding.jpg'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop =>
    ['width', 'height', 'src', 'alt'].includes(prop),
})

const MotionBox = motion(Box)

const SectionHeading = ({ children }) => {
  const gradientFrom = useColorModeValue('brand.500', 'brand.400')
  const gradientTo = useColorModeValue('brand.700', 'brand.600')
  const headingColor = useColorModeValue('gray.800', 'white')

  return (
    <Box mb={6}>
      <Heading
        as="h2"
        fontSize={{ base: 'xl', md: '2xl' }}
        color={headingColor}
        fontWeight="700"
        mb={2}
      >
        {children}
      </Heading>
      <Box
        h="3px"
        w="60px"
        bgGradient={`linear(to-r, ${gradientFrom}, ${gradientTo})`}
        borderRadius="full"
      />
    </Box>
  )
}

const certifications = [
  { year: '2025', text: 'Desarrollo Web con IA: OpenIA - DeepSeek, JS y NodeJS' },
  { year: '2025', text: 'Android Enterprise Certified Professional' },
  { year: '2025', text: 'Android Enterprise Certified Associate' },
  { year: '2024', text: 'Kubernetes & Docker en AWS' },
  { year: '2024', text: 'ABAP Para funcionales - Creación de reportes' },
  { year: '2022', text: 'Ingeniero En Computacion - Universidad Autonoma Del Carmen' },
  { year: '2021', text: 'Cloud Computing - Google Certification' },
  { year: '2021', text: 'Desarrollo de Apps Moviles - Google Certification' },
  { year: '2021', text: 'Flutter Avanzado: Lleva tu conocimiento al siguiente nivel - Udemy' },
  { year: '2021', text: 'React: Aplicaciones en tiempo real con Socket-io - Udemy' },
  { year: '2020', text: 'Git de principiante a experto, GitHub, GitLab, Azure, Commit - Udemy' },
  { year: '2020', text: 'Scrum Master Certificacion - Udemy' },
  { year: '2020', text: 'Diplomado Tecnico en BIG DATA - Fundacion Carlos Slim' },
]

const Home = () => {
  const cardBg = useColorModeValue('rgba(255,255,255,0.6)', 'rgba(20,20,35,0.6)')
  const cardBorder = useColorModeValue('rgba(255,255,255,0.3)', 'rgba(255,255,255,0.08)')
  const areaTextLight = useColorModeValue('gray.600', 'gray.400')
  const socialTextColor = useColorModeValue('gray.600', 'gray.400')
  const twitterColor = useColorModeValue('twitter.500', 'twitter.300')
  const pinkColor = useColorModeValue('pink.500', 'pink.300')
  const facebookColor = useColorModeValue('facebook.500', 'facebook.300')
  const blueAreaColor = useColorModeValue('blue.700', 'blue.300')
  const greenAreaColor = useColorModeValue('green.700', 'green.300')
  const orangeAreaColor = useColorModeValue('orange.700', 'orange.300')
  const redAreaColor = useColorModeValue('red.700', 'red.300')
  const areaColors = { blue: blueAreaColor, green: greenAreaColor, orange: orangeAreaColor, red: redAreaColor }

  return (
    <Container maxW="container.lg">
      {/* Hero Section */}
      <Box pb={10} mb={12} mt={4}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'center', md: 'flex-start' }}
          gap={8}
        >
          <MotionBox
            flexShrink={0}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ProfileImage
              border="4px solid"
              borderColor={useColorModeValue('gray.200', 'gray.700')}
              maxWidth="180px"
              display="inline-block"
              borderRadius="2xl"
              src="/images/efraindrummer.jpeg"
              alt="Efrain May - Ingeniero en Computación"
              width="180"
              height="180"
              boxShadow={useColorModeValue(
                '0 20px 40px rgba(0,0,0,0.1)',
                '0 20px 40px rgba(0,0,0,0.3)'
              )}
            />
          </MotionBox>

          <VStack
            align={{ base: 'center', md: 'flex-start' }}
            spacing={3}
            flex={1}
          >
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Heading
                as="h1"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                color={useColorModeValue('gray.800', 'white')}
                fontWeight="700"
                letterSpacing="-0.04em"
                lineHeight="1.1"
              >
                Efrain May
              </Heading>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={useColorModeValue('gray.600', 'gray.400')}
                fontWeight="500"
              >
                Ingeniero en Computación
              </Text>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Text
                fontSize="lg"
                color={useColorModeValue('brand.600', 'brand.300')}
                fontWeight="600"
              >
                Ingeniero de Software | DRAGADOS OFFSHORE MEXICO
              </Text>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <HStack spacing={2} pt={2} flexWrap="wrap">
                {['Full Stack Developer', 'Cloud Computing', 'DevOps'].map(
                  badge => (
                    <Badge
                      key={badge}
                      colorScheme="gray"
                      fontSize="sm"
                      px={3}
                      py={1}
                      fontWeight="600"
                      textTransform="none"
                      borderRadius="full"
                    >
                      {badge}
                    </Badge>
                  )
                )}
              </HStack>
            </MotionBox>
          </VStack>
        </Flex>
      </Box>

      <Section delay={0.1}>
        <Box mb={12}>
          <SectionHeading>Perfil Profesional</SectionHeading>

          <GlassCard mb={6}>
            <Text
              fontSize="lg"
              lineHeight="1.8"
              color={useColorModeValue('gray.700', 'gray.300')}
              textAlign="justify"
            >
              Ingeniero de Software con sólida experiencia en el desarrollo de
              soluciones tecnológicas para diversos sectores industriales.
              Especializado en la automatización de procesos y optimización de
              sistemas en los rubros petrolero, O&M, logística y monitoreo GPS.
              Comprometido con la implementación de tecnologías innovadoras que
              aporten valor y eficiencia a las organizaciones.
            </Text>
          </GlassCard>

          <Heading
            as="h3"
            size="md"
            mb={4}
            color={useColorModeValue('gray.700', 'gray.200')}
          >
            Áreas de Especialización
          </Heading>

          <StaggerContainer>
            <SimpleGrid columns={[1, 2, 4]} gap={4} mb={8}>
              {[
                {
                  name: 'Sector Petrolero',
                  desc: 'Sistemas empresariales',
                  color: 'blue',
                },
                {
                  name: 'O&M',
                  desc: 'Operación y mantenimiento',
                  color: 'green',
                },
                {
                  name: 'Logística',
                  desc: 'Gestión y optimización',
                  color: 'orange',
                },
                {
                  name: 'Monitoreo GPS',
                  desc: 'Sistemas de tracking',
                  color: 'red',
                },
              ].map(area => (
                <StaggerItem key={area.name}>
                  <GlassCard p={4}>
                    <Text
                      fontWeight="bold"
                      color={areaColors[area.color]}
                    >
                      {area.name}
                    </Text>
                    <Text
                      fontSize="sm"
                      color={areaTextLight}
                    >
                      {area.desc}
                    </Text>
                  </GlassCard>
                </StaggerItem>
              ))}
            </SimpleGrid>
          </StaggerContainer>

          <Box textAlign="center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{ display: 'inline-block' }}
            >
              <NextLink
                href="https://www.dropbox.com/s/8l0axe4qee8ea0j/Curriculum%20CV%20Simple%20Blanco%20y%20Negro.pdf?dl=0"
                passHref
              >
                <Button
                  size="lg"
                  colorScheme="brand"
                  rightIcon={<ChevronRightIcon />}
                  variant="solid"
                  borderRadius="xl"
                >
                  Descargar CV
                </Button>
              </NextLink>
            </motion.div>
          </Box>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Timeline />
      </Section>

      <Section delay={0.2}>
        <Box mb={12}>
          <SectionHeading>Formación Académica y Certificaciones</SectionHeading>

          <StaggerContainer>
            <SimpleGrid columns={[1, 1, 2]} gap={4} mt={6}>
              {certifications.map((cert, idx) => (
                <StaggerItem key={idx}>
                  <GlassCard p={5}>
                    <BioSection>
                      <BioYear>{cert.year}</BioYear>
                      {cert.text}
                    </BioSection>
                  </GlassCard>
                </StaggerItem>
              ))}
            </SimpleGrid>
          </StaggerContainer>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Box mb={12}>
          <SectionHeading>Intereses Personales</SectionHeading>

          <HStack spacing={4} flexWrap="wrap" mt={6}>
            {['Arte', 'Música', 'Batería'].map(interest => (
              <Badge
                key={interest}
                variant="subtle"
                colorScheme="gray"
                fontSize="md"
                px={4}
                py={2}
                fontWeight="500"
                borderRadius="full"
              >
                {interest}
              </Badge>
            ))}
          </HStack>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Box mb={12}>
          <SectionHeading>Contacto Profesional</SectionHeading>
          <List spacing={3} mt={6}>
            {[
              {
                href: 'https://github.com/efraindrummer',
                icon: IoLogoGithub,
                name: 'GitHub',
                user: '@efraindrummer',
              },
              {
                href: 'https://twitter.com/efraindrummer7',
                icon: IoLogoTwitter,
                name: 'Twitter',
                user: '@efraindrummer7',
                iconColor: twitterColor,
              },
              {
                href: 'https://www.instagram.com/efraincode/',
                icon: IoLogoInstagram,
                name: 'Instagram',
                user: '@efracode',
                iconColor: pinkColor,
              },
              {
                href: 'https://www.facebook.com/Efrain.May/',
                icon: IoLogoFacebook,
                name: 'Facebook',
                user: 'Efrain May',
                iconColor: facebookColor,
              },
            ].map(social => (
              <ListItem key={social.name}>
                <Link
                  href={social.href}
                  target="_blank"
                  display="flex"
                  alignItems="center"
                  p={3}
                  borderRadius="xl"
                  bg={cardBg}
                  backdropFilter="blur(16px)"
                  border="1px solid"
                  borderColor={cardBorder}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                    textDecoration: 'none',
                  }}
                  transition="all 0.2s"
                >
                  <Icon
                    as={social.icon}
                    boxSize={6}
                    mr={3}
                    color={social.iconColor}
                  />
                  <Box>
                    <Text fontWeight="600">{social.name}</Text>
                    <Text
                      fontSize="sm"
                      color={socialTextColor}
                    >
                      {social.user}
                    </Text>
                  </Box>
                </Link>
              </ListItem>
            ))}
          </List>

          <Box mt={8}>
            <Heading
              as="h3"
              size="md"
              mb={4}
              color={useColorModeValue('gray.700', 'gray.200')}
            >
              Contenido Destacado
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={4}>
              <GridItem
                href="https://www.youtube.com/watch?v=u5PKQMYhYRk&t=3s"
                title="Flutter ChatApp"
                thumbnail={thumbYouTubeChatApp}
              >
                Canal de YouTube
              </GridItem>
              <GridItem
                href="https://www.youtube.com/watch?v=LafxuUXgvuQ"
                title="Giphy App"
                thumbnail={thumbAngularGiphyAPI}
              >
                Programando en Angular
              </GridItem>
            </SimpleGrid>
          </Box>
        </Box>
      </Section>
    </Container>
  )
}

export default Home
