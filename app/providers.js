'use client'

import { ChakraProvider, ColorModeScript, Box, Container } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import theme from '../lib/theme'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ContactBot from '../components/contact-bot'
import { LanguageProvider } from '../lib/language-context'

export function Providers({ children }) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <LanguageProvider>
          <Box as="main" pb={12} minH="100vh" position="relative" overflowX="hidden">
            <Navbar />
            <Container
              maxW={isHome ? 'container.xl' : 'container.lg'}
              pt={{ base: 20, md: 24 }}
              px={{ base: 4, md: 8 }}
            >
              {children}
              <Footer />
            </Container>
          </Box>
          <ContactBot />
        </LanguageProvider>
      </ChakraProvider>
    </>
  )
}
