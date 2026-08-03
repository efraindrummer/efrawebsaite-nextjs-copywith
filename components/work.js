'use client'

import NextLink from 'next/link'
import { useState } from 'react'
import { Heading, Box, Image, Link, Badge, Button, VStack } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => {
    
    return (
        <Box>
            <Link as={NextLink} href="/works">Works</Link>
            
        <span>
            &nbsp;
            <ChevronRightIcon />
            &nbsp;
        </span>
            <Heading 
                display="inline-block" 
                as="h3" 
                fontSize={20}
                mb={4}
                >
                {children}
            </Heading>
        </Box>
    )
}

export const WorkImage = ({ src, alt, priority = false }) => (
    <Image 
        borderRadius="lg"
        w="full"
        src={src}
        alt={alt}
        mb={4}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
    />
)

export const Meta = ({ children }) => (
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge> 
)