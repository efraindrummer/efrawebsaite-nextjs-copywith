'use client'

import { Box, Flex, HStack, Link, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import {
  IoLogoLinkedin,
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoGithub,
} from 'react-icons/io5'
import { useLanguage } from '../lib/language-context'

const Footer = () => {
  const { lang } = useLanguage()
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.150')
  const textColor = useColorModeValue('gray.500', 'gray.400')

  return (
    <Box
      mt={12}
      pt={8}
      borderTop="1px solid"
      borderColor={borderColor}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        gap={4}
      >
        <Text fontSize="sm" color={textColor}>
          &copy; {new Date().getFullYear()} Efraín May.{' '}
          {lang === 'es'
            ? 'Todos los derechos reservados • Ingeniero de Software & Especialista en IA.'
            : 'All rights reserved • Software Engineer & AI Specialist.'}
        </Text>

        <HStack spacing={4}>
          {[
            { href: 'https://www.linkedin.com/in/efraindev/', icon: IoLogoLinkedin, label: 'LinkedIn' },
            { href: 'https://www.youtube.com/@Efra%C3%ADnMay/videos', icon: IoLogoYoutube, label: 'YouTube' },
            { href: 'https://www.instagram.com/efraincode/', icon: IoLogoInstagram, label: 'Instagram' },
            { href: 'https://www.facebook.com/Efrain.May/', icon: IoLogoFacebook, label: 'Facebook' },
            { href: 'https://github.com/efraindrummer', icon: IoLogoGithub, label: 'GitHub' },
          ].map(s => (
            <Link
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              color={textColor}
              _hover={{ color: 'brand.400', transform: 'translateY(-2px)' }}
              transition="all 0.2s"
            >
              <Icon as={s.icon} boxSize={5} />
            </Link>
          ))}
        </HStack>
      </Flex>
    </Box>
  )
}

export default Footer
