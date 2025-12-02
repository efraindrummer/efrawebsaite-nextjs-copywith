import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#ffffff', '#0f1419')(props),
            color: mode('#2d3748', '#e2e8f0')(props),
            transition: 'background-color 0.2s ease, color 0.2s ease'
        },
        '*::placeholder': {
            color: mode('gray.400', 'gray.500')(props)
        },
        '*, *::before, &::after': {
            borderColor: mode('gray.200', 'gray.700')(props)
        }
    })
}

const components = {
    Heading: {
        baseStyle: {
            fontWeight: '700',
            letterSpacing: '-0.02em'
        },
        variants: {
            'section-title': {
                fontSize: 20,
                marginTop: 3,
                marginBottom: 4,
                fontWeight: '600'
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3182ce', '#63b3ed')(props),
            textUnderlineOffset: 2,
            transition: 'all 0.2s',
            _hover: {
                textDecoration: 'none',
                color: mode('#2c5282', '#90cdf4')(props)
            }
        })
    },
    Button: {
        baseStyle: {
            fontWeight: '600',
            borderRadius: 'md',
            transition: 'all 0.2s'
        },
        variants: {
            solid: props => ({
                bg: mode('blue.600', 'blue.500')(props),
                color: 'white',
                _hover: {
                    bg: mode('blue.700', 'blue.600')(props),
                    boxShadow: 'md'
                },
                _active: {
                    bg: mode('blue.800', 'blue.700')(props)
                }
            })
        }
    },
    Badge: {
        baseStyle: {
            fontWeight: '600',
            textTransform: 'none'
        }
    }
}

const fonts = {
    heading: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    body: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif"
}

const colors = {
    grassTeal: '#88ccca',
    brand: {
        50: '#e6f2ff',
        100: '#b3d9ff',
        200: '#80bfff',
        300: '#4da6ff',
        400: '#1a8cff',
        500: '#0073e6',
        600: '#005bb3',
        700: '#004280',
        800: '#002a4d',
        900: '#00121a'
    }
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({ 
    config, 
    styles, 
    components, 
    fonts, 
    colors 
})

export default theme