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
import { motion } from 'framer-motion'

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.700', 'gray.300')

    return (
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            p={2}
            px={4}
            borderRadius="md"
            bg={active ? useColorModeValue('blue.600', 'blue.500') : undefined}
            color={active ? 'white' : inactiveColor}
            fontWeight={active ? '600' : '500'}
            target={target}
            transition="all 0.2s"
            _hover={{
                bg: active 
                    ? useColorModeValue('blue.700', 'blue.600') 
                    : useColorModeValue('gray.100', 'gray.700'),
                textDecoration: 'none'
            }}
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
            bg={useColorModeValue('white', '#0f1419')}
            zIndex={2}
            boxShadow="sm"
            borderBottom="1px"
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            {...props}
        >
            <Container 
                display="flex" 
                p={3} 
                maxW="container.xl" 
                wrap="wrap" 
                align="center" 
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing="tight" fontWeight="700">
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
                    <LinkItem href="/works" path={path}>
                        Portafolio
                    </LinkItem>
                    <LinkItem href="/posts" path={path}>
                        Publicaciones
                    </LinkItem>
                    <LinkItem href="/others" path={path}>
                        Skills
                    </LinkItem>
                    <LinkItem href="/coding" path={path}>
                        Coding
                    </LinkItem>
                    <LinkItem href="/github" path={path}>
                        Contribuciones
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{base: 'inline-block', md:'none'}}>
                        <Menu>
                            <MenuButton 
                                as={IconButton} 
                                icon={<HamburgerIcon />} 
                                variant="outline" 
                                aria-label="Options"
                                borderRadius="md"
                                _hover={{
                                    bg: useColorModeValue('gray.100', 'gray.700')
                                }}
                            />
                            <MenuList
                                bg={useColorModeValue('white', 'gray.800')}
                                borderColor={useColorModeValue('gray.200', 'gray.700')}
                                boxShadow="lg"
                            >
                                <MenuItem 
                                    as={MenuLink} 
                                    href="/"
                                    _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
                                >
                                    Efrain May
                                </MenuItem>
                                <MenuItem 
                                    as={MenuLink} 
                                    href="/works"
                                    _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
                                >
                                    Portafolio
                                </MenuItem>
                                <MenuItem 
                                    as={MenuLink} 
                                    href="/posts"
                                    _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
                                >
                                    Publicaciones
                                </MenuItem>
                                <MenuItem 
                                    as={MenuLink} 
                                    href="/others"
                                    _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
                                >
                                    Skills
                                </MenuItem>
                                <MenuItem 
                                    as={MenuLink} 
                                    href="/coding"
                                    _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
                                >
                                    Coding
                                </MenuItem>
                                <MenuItem 
                                    as={MenuLink} 
                                    href="/github"
                                    _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
                                >
                                    Contribuciones
                                </MenuItem>
                                <MenuItem 
                                    as={Link} 
                                    href="https://github.com/efraindrummer/efrawebsaite-nextjs-copywith"
                                    _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
                                >
                                    View Code
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}


export default Navbar