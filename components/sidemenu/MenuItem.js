import * as React from 'react'
import { motion } from 'framer-motion'
import Button from '../button/button'

const variants = {
  initial: {
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export const MenuItem = ({ to, icon, text }) => {
  return (
    <motion.li
      className="flex items-center mb-5 w-full"
      initial="initial"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button to={to} className="flex items-center px-10 w-full">
        {icon}
        <p className="ml-5 font-bold">{text}</p>
      </Button>
    </motion.li>
  )
}
