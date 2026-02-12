'use client'

import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})

const Section = ({ children, delay = 0 }) => (
  <StyledDiv
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    mb={6}
  >
    {children}
  </StyledDiv>
)

export default Section
