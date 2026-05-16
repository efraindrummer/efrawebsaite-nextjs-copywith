'use client'

import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Text,
  Flex,
  LinkBox,
  LinkOverlay,
  useColorModeValue,
} from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => {
  return (
    <Box w="100%" align="center">
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}

export const WorkGridItem = ({ children, id, title, thumbnail, category, techs }) => {
  const titleColor = useColorModeValue('gray.900', 'white')
  const tagBg = useColorModeValue('gray.100', 'gray.800')
  const tagColor = useColorModeValue('gray.600', 'gray.400')
  const badgeBg = useColorModeValue('rgba(255,255,255,0.15)', 'rgba(0,0,0,0.3)')
  const borderColor = useColorModeValue('gray.100', 'gray.800')

  return (
    <Box
      as={NextLink}
      href={`/works/${id}`}
      display="block"
      role="group"
      cursor="pointer"
      textDecoration="none"
      _hover={{ textDecoration: 'none' }}
    >
      {/* Image with overlay */}
      <Box
        position="relative"
        overflow="hidden"
        borderRadius="12px"
        border="1px solid"
        borderColor={borderColor}
        sx={{
          aspectRatio: '16/10',
          '&:hover .work-overlay': { opacity: 1 },
          '&:hover .work-img': { transform: 'scale(1.03)' },
        }}
      >
        <Box
          className="work-img"
          transition="transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)"
          h="full"
          position="relative"
        >
          <Image
            src={thumbnail}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            className="grid-item-thumbnail"
            placeholder="blur"
          />
        </Box>

        {/* Category badge – top left */}
        {category && (
          <Box
            position="absolute"
            top={2.5}
            left={2.5}
            bg={badgeBg}
            backdropFilter="blur(8px)"
            px="8px"
            py="3px"
            borderRadius="5px"
            zIndex={1}
          >
            <Text
              fontFamily="mono"
              fontSize="10px"
              fontWeight="600"
              color="white"
              letterSpacing="0.06em"
              textTransform="uppercase"
            >
              {category}
            </Text>
          </Box>
        )}

        {/* Hover overlay */}
        <Flex
          className="work-overlay"
          position="absolute"
          inset={0}
          bg="rgba(10,10,15,0.82)"
          opacity={0}
          transition="opacity 0.25s ease"
          align="center"
          justify="center"
          p={5}
          zIndex={2}
        >
          <Text
            fontSize="13px"
            color="whiteAlpha.900"
            textAlign="center"
            lineHeight="1.6"
            fontWeight="400"
          >
            {children}
          </Text>
        </Flex>
      </Box>

      {/* Info below */}
      <Box pt={3} pb={1}>
        <Flex align="center" justify="space-between" gap={2} mb={1.5}>
          <Text
            fontSize="14px"
            fontWeight="600"
            color={titleColor}
            letterSpacing="-0.015em"
            lineHeight="1.3"
            noOfLines={1}
          >
            {title}
          </Text>
        </Flex>

        {techs && techs.length > 0 && (
          <Flex flexWrap="wrap" gap="4px">
            {techs.slice(0, 4).map(tech => (
              <Box
                key={tech}
                fontFamily="mono"
                fontSize="10px"
                color={tagColor}
                bg={tagBg}
                px="6px"
                py="2px"
                borderRadius="4px"
                fontWeight="500"
              >
                {tech}
              </Box>
            ))}
          </Flex>
        )}
      </Box>
    </Box>
  )
}

export const GridItemStyle = () => {
  return (
    <Global
      styles={`
        .grid-item-thumbnail {
          border-radius: 12px;
        }
      `}
    />
  )
}
