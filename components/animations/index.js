'use client'

import { motion } from 'framer-motion'

export const StaggerContainer = ({
  children,
  staggerDelay = 0.08,
  ...props
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-50px' }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: staggerDelay } },
    }}
    {...props}
  >
    {children}
  </motion.div>
)

export const StaggerItem = ({ children, ...props }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30, scale: 0.95 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
      },
    }}
    {...props}
  >
    {children}
  </motion.div>
)

export const TextReveal = ({ text, ...props }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.03 } },
    }}
    style={{ display: 'inline-flex', flexWrap: 'wrap' }}
    {...props}
  >
    {text.split('').map((char, i) => (
      <motion.span
        key={i}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        style={{ display: 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))}
  </motion.div>
)

export const Parallax = ({ children, offset = 50, ...props }) => (
  <motion.div
    initial={{ y: offset }}
    whileInView={{ y: 0 }}
    viewport={{ once: false, margin: '-100px' }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    {...props}
  >
    {children}
  </motion.div>
)

export const hoverLift = {
  whileHover: { y: -8, transition: { duration: 0.3, ease: 'easeOut' } },
  whileTap: { scale: 0.98 },
}

export const buttonTap = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
}
