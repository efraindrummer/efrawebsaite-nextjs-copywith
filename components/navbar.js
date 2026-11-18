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
  Button,
  HStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { useLanguage } from '../lib/language-context'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.700', 'gray.300')
  const activeBg = useColorModeValue('brand.600', 'brand.500')
  const hoverActiveBg = useColorModeValue('brand.700', 'brand.600')
  const hoverInactiveBg = useColorModeValue('gray.100', 'whiteAlpha.100')

  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      px={3.5}
      borderRadius="xl"
      bg={active ? activeBg : undefined}
      color={active ? 'white' : inactiveColor}
      fontWeight={active ? '600' : '500'}
      fontSize="sm"
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

const NAV_LABELS = {
  es: {
    home: 'Inicio',
    works: 'Portafolio',
    posts: 'Publicaciones',
    skills: 'Skills',
    coding: 'Coding',
    github: 'Contribuciones',
    langHint: 'Cambiar a Inglés',
  },
  en: {
    home: 'Home',
    works: 'Portfolio',
    posts: 'Publications',
    skills: 'Skills',
    coding: 'Coding',
    github: 'Contributions',
    langHint: 'Switch to Spanish',
  },
}

const Navbar = () => {
  const path = usePathname()
  const { lang, toggleLanguage } = useLanguage()
  const t = NAV_LABELS[lang] || NAV_LABELS.es

  const navBg = useColorModeValue(
    'rgba(250, 250, 252, 0.85)',
    'rgba(10, 10, 18, 0.85)'
  )
  const menuBg = useColorModeValue('white', 'gray.900')
  const menuBorderColor = useColorModeValue('gray.200', 'gray.700')
  const menuHoverBg = useColorModeValue('gray.100', 'gray.800')
  const langBtnBg = useColorModeValue('gray.100', 'whiteAlpha.100')
  const langBtnBorder = useColorModeValue('gray.200', 'whiteAlpha.200')
  const langBtnHover = useColorModeValue('brand.50', 'whiteAlpha.200')
  const langActiveColor = useColorModeValue('brand.600', 'brand.300')

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={navBg}
      backdropFilter="blur(16px) saturate(180%)"
      zIndex={100}
      borderBottom="1px"
      borderColor={useColorModeValue(
        'rgba(0,0,0,0.06)',
        'rgba(255,255,255,0.08)'
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
          spacing={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/" path={path}>
            {t.home}
          </LinkItem>
          <LinkItem href="/works" path={path}>
            {t.works}
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            {t.posts}
          </LinkItem>
          <LinkItem href="/skills" path={path}>
            {t.skills}
          </LinkItem>
          <LinkItem href="/coding" path={path}>
            {t.coding}
          </LinkItem>
          <LinkItem href="/github" path={path}>
            {t.github}
          </LinkItem>
        </Stack>

        <HStack spacing={2} flex={1} justify="flex-end">
          <Button
            onClick={toggleLanguage}
            size="sm"
            bg={langBtnBg}
            border="1px solid"
            borderColor={langBtnBorder}
            borderRadius="xl"
            px={3}
            h="40px"
            fontWeight="700"
            fontSize="xs"
            letterSpacing="0.04em"
            title={t.langHint}
            _hover={{
              bg: langBtnHover,
              borderColor: 'brand.400',
              transform: 'translateY(-1px)',
            }}
            transition="all 0.2s"
          >
            <HStack spacing={1.5}>
              <Text as="span" fontSize="sm">
                {lang === 'es' ? '🇲🇽' : '🇺🇸'}
              </Text>
              <Text
                as="span"
                color={lang === 'es' ? langActiveColor : 'gray.400'}
              >
                ES
              </Text>
              <Text as="span" color="gray.400">
                /
              </Text>
              <Text
                as="span"
                color={lang === 'en' ? langActiveColor : 'gray.400'}
              >
                EN
              </Text>
            </HStack>
          </Button>

          <ThemeToggleButton />

          <Box display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                borderRadius="xl"
                _hover={{ bg: menuHoverBg }}
              />
              <MenuList
                bg={menuBg}
                borderColor={menuBorderColor}
                boxShadow="2xl"
                borderRadius="xl"
              >
                <MenuItem as={MenuLink} href="/" _hover={{ bg: menuHoverBg }}>
                  {t.home}
                </MenuItem>
                <MenuItem
                  as={MenuLink}
                  href="/works"
                  _hover={{ bg: menuHoverBg }}
                >
                  {t.works}
                </MenuItem>
                <MenuItem
                  as={MenuLink}
                  href="/posts"
                  _hover={{ bg: menuHoverBg }}
                >
                  {t.posts}
                </MenuItem>
                <MenuItem
                  as={MenuLink}
                  href="/skills"
                  _hover={{ bg: menuHoverBg }}
                >
                  {t.skills}
                </MenuItem>
                <MenuItem
                  as={MenuLink}
                  href="/coding"
                  _hover={{ bg: menuHoverBg }}
                >
                  {t.coding}
                </MenuItem>
                <MenuItem
                  as={MenuLink}
                  href="/github"
                  _hover={{ bg: menuHoverBg }}
                >
                  {t.github}
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </HStack>
      </Container>
    </Box>
  )
}

export default Navbar
