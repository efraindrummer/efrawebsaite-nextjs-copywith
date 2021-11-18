import { Box } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box align="center" opacity={0.4} fontSize="sm">
            &copy; {new Date().getFullYear()} Efrain May. Todos los derechos Reservados.
        </Box>
    )
}

export default Footer