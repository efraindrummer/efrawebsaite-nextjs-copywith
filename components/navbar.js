'use client'

import Logo from './logo'
import { forwardRef } from 'react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
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
  useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.700', 'gray.300')
  const activeBg = useColorModeValue('brand.600', 'brand.500')
  const hoverActiveBg = useColorModeValue('brand.700', 'brand.600')
  const hoverInactiveBg = useColorModeValue('gray.100', 'gray.700')

  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      px={4}
      borderRadius="lg"
      bg={active ? activeBg : undefined}
      color={active ? 'white' : inactiveColor}
      fontWeight={active ? '600' : '500'}
      target={target}
      transition="all 0.2s"
      _hover={{
        bg: active ? hoverActiveBg : hoverInactiveBg,
        textDecoration: 'none',
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

const Navbar = () => {
  const path = usePathname()

  const navBg = useColorModeValue(
    'rgba(250, 250, 250, 0.8)',
    'rgba(10, 10, 10, 0.8)'
  )
  const menuBg = useColorModeValue('white', 'gray.800')
  const menuBorderColor = useColorModeValue('gray.200', 'gray.700')
  const menuHoverBg = useColorModeValue('gray.100', 'gray.700')

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={navBg}
      backdropFilter="blur(12px) saturate(180%)"
      zIndex={2}
      borderBottom="1px"
      borderColor={useColorModeValue(
        'rgba(0,0,0,0.06)',
        'rgba(255,255,255,0.06)'
      )}
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
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Portafolio
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Publicaciones
          </LinkItem>
          <LinkItem href="/skills" path={path}>
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
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                borderRadius="lg"
                _hover={{ bg: menuHoverBg }}
              />
              <MenuList
                bg={menuBg}
                borderColor={menuBorderColor}
                boxShadow="xl"
                borderRadius="xl"
              >
                <MenuItem as={MenuLink} href="/" _hover={{ bg: menuHoverBg }}>
                  Efrain May
                </MenuItem>
                <MenuItem
                  as={MenuLink}
                  href="/works"
                  _hover={{ bg: menuHoverBg }}
                >
                  Portafolio
                </MenuItem>
                <MenuItem
                  as={MenuLink}
                  href="/posts"
                  _hover={{ bg: menuHoverBg }}
                >
                  Publicaciones
                </MenuItem>
                <MenuItem
                  as={MenuLink}
                  href="/skills"
                  _hover={{ bg: menuHoverBg }}
                >
                  Skills
                </MenuItem>
                <MenuItem
                  as={MenuLink}
                  href="/coding"
                  _hover={{ bg: menuHoverBg }}
                >
                  Coding
                </MenuItem>
                <MenuItem
                  as={MenuLink}
                  href="/github"
                  _hover={{ bg: menuHoverBg }}
                >
                  Contribuciones
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://github.com/efraindrummer/efrawebsaite-nextjs-copywith"
                  _hover={{ bg: menuHoverBg }}
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
