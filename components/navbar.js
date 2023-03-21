import Logo from "./logo"
import { forwardRef } from 'react'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from "./theme-toggle-button"

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    return (
      <Link
        as={NextLink}
        href={href}
        scroll={false}
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    )
  }

const MenuLink = forwardRef((props, ref) => (
    <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
    const { path } = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{backdropFilter: 'blur(10px)'}}
            zIndex={1}
            {...props}
        >
            <Container 
                display="flex" 
                p={2} 
                maxW="container.md" 
                wrap="wrap" 
                align="center" 
                justify="space-between"
            >
                <Flex aling="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{base: 'column', md: 'row'}}
                    display={{base: 'none', md: 'flex'}}
                    width={{base: 'full', md: 'auto'}}
                    alignItems="center"
                    flexGrow={1}
                    mt={{base: 4, nmd: 0}}
                >
                    <MenuItem as={MenuLink} href="/">
                        About
                    </MenuItem>
                    <MenuItem as={MenuLink} href="/works" path={path}>
                        Portafolio
                    </MenuItem>
                    <MenuItem as={MenuLink} href="/posts" path={path}>
                        Publicaciones
                    </MenuItem>
                    <MenuItem as={MenuLink} href="/others" path={path}>
                        Otras
                    </MenuItem>
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{base: 'inline-block', md:'none'}}>
                      
                            <MenuButton 
                                as={IconButton} 
                                icon={<HamburgerIcon />} 
                                variant="outline" 
                                aria-label="Options" 
                            />
                            <MenuList>
                                <MenuItem as={Link}>Efrain May</MenuItem>
                               
                                <MenuItem as={Link} href="/works">Portafolio</MenuItem>
                               
                                <MenuItem as={Link} href="/posts" >Publicaciones</MenuItem>
                               
                                <MenuItem as={Link} href="/others">Otras</MenuItem>
                                
                                <MenuItem 
                                    as={Link} 
                                    href="https://github.com/efraindrummer/efrawebsaite-nextjs-copywith"
                                >
                                    View Code
                                </MenuItem>
                            </MenuList>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}


export default Navbar