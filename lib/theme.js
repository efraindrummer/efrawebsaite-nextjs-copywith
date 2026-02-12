import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#fafafa', '#0a0a0a')(props),
      color: mode('#1a1a2e', '#e8e8e8')(props),
      transition: 'background-color 0.3s ease, color 0.3s ease',
    },
    '*::placeholder': {
      color: mode('gray.400', 'gray.500')(props),
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'gray.700')(props),
    },
  }),
}

const components = {
  Heading: {
    baseStyle: {
      fontWeight: '700',
      letterSpacing: '-0.03em',
    },
    variants: {
      'section-title': {
        fontSize: 20,
        marginTop: 3,
        marginBottom: 4,
        fontWeight: '600',
      },
    },
  },
  Link: {
    baseStyle: props => ({
      color: mode('#4c6ef5', '#748ffc')(props),
      textUnderlineOffset: 3,
      transition: 'all 0.2s',
      _hover: {
        textDecoration: 'none',
        color: mode('#3b5bdb', '#91a7ff')(props),
      },
    }),
  },
  Button: {
    baseStyle: {
      fontWeight: '600',
      borderRadius: 'lg',
      transition: 'all 0.2s',
    },
    variants: {
      solid: props => ({
        bg: mode('brand.600', 'brand.500')(props),
        color: 'white',
        _hover: {
          bg: mode('brand.700', 'brand.600')(props),
          boxShadow: 'lg',
          transform: 'translateY(-1px)',
        },
        _active: {
          bg: mode('brand.800', 'brand.700')(props),
          transform: 'translateY(0)',
        },
      }),
    },
  },
  Badge: {
    baseStyle: {
      fontWeight: '600',
      textTransform: 'none',
    },
  },
}

const fonts = {
  heading:
    "var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
  body: "var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
}

const colors = {
  grassTeal: '#88ccca',
  brand: {
    50: '#eef2ff',
    100: '#dbe4ff',
    200: '#bac8ff',
    300: '#91a7ff',
    400: '#748ffc',
    500: '#5c7cfa',
    600: '#4c6ef5',
    700: '#4263eb',
    800: '#3b5bdb',
    900: '#364fc7',
  },
  glass: {
    light: 'rgba(255, 255, 255, 0.6)',
    dark: 'rgba(20, 20, 35, 0.6)',
  },
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
  colors,
})

export default theme
