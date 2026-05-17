'use client'

import NextLink from 'next/link'
import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage } from '../../../components/work'
import Section from '../../../components/section'
import { GlassCard } from '../../../components/glass-card'

export default function WorkDetailClient({ work }) {
  const descColor = useColorModeValue('gray.700', 'gray.300')

  if (!work) {
    return (
      <Container>
        <Heading>Proyecto no encontrado</Heading>
        <Link as={NextLink} href="/works">
          Volver al portafolio
        </Link>
      </Container>
    )
  }

  return (
    <Container maxW="container.md">
      <Title>{work.title}</Title>

      <Section delay={0.1}>
        <GlassCard mb={6}>
          <Text fontSize="lg" lineHeight="1.8" color={descColor} textAlign="justify">
            {work.description}
          </Text>
        </GlassCard>
      </Section>

      <Section delay={0.2}>
        <List spacing={3} mb={6}>
          {work.meta.map((m, i) => (
            <ListItem key={i}>
              <Badge colorScheme="green" mr={2} borderRadius="full">
                {m.label}
              </Badge>
              <Text as="span">{m.value}</Text>
            </ListItem>
          ))}
        </List>
      </Section>

      {work.links.length > 0 && (
        <Section delay={0.3}>
          <VStack align="stretch" spacing={2} mb={6}>
            {work.links.map((link, i) => (
              <Link key={i} href={link.url} target="_blank" display="flex" alignItems="center" gap={2}>
                {link.label} <ExternalLinkIcon mx="2px" />
              </Link>
            ))}
          </VStack>
        </Section>
      )}

      <Section delay={0.4}>
        <SimpleGrid columns={[1, 1, 2]} gap={4}>
          {work.images.map((img, i) => (
            <WorkImage key={i} src={img} alt={`${work.title} screenshot ${i + 1}`} />
          ))}
        </SimpleGrid>
      </Section>
    </Container>
  )
}
