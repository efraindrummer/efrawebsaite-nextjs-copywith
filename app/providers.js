'use client'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '../lib/theme'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ContactBot from '../components/contact-bot'
import { Box, Container } from '@chakra-ui/react'
import Image from 'next/image'

export function Providers({ children }) {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <Box as="main" pb={9}>
          <Navbar />
          <Container maxW="container.md" pt={14}>
            <Box mb={6} borderRadius="xl" overflow="hidden">
              <Image
                src="/images/javascript.jpg"
                alt="Banner"
                width={768}
                height={432}
                priority
                style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
              />
            </Box>
            {children}
            <Footer />
          </Container>
        </Box>
        <ContactBot />
      </ChakraProvider>
    </>
  )
}
