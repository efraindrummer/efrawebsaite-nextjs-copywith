'use client'

import { Box, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export const GlassCard = ({ children, hover = true, ...props }) => {
  const bg = useColorModeValue(
    'rgba(255, 255, 255, 0.6)',
    'rgba(20, 20, 35, 0.6)'
  )
  const borderColor = useColorModeValue(
    'rgba(255, 255, 255, 0.3)',
    'rgba(255, 255, 255, 0.08)'
  )

  return (
    <MotionBox
      bg={bg}
      backdropFilter="blur(16px) saturate(180%)"
      border="1px solid"
      borderColor={borderColor}
      borderRadius="2xl"
      p={6}
      transition={{ duration: 0.3 }}
      {...(hover
        ? {
            whileHover: {
              y: -4,
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            },
          }
        : {})}
      {...props}
    >
      {children}
    </MotionBox>
  )
}
