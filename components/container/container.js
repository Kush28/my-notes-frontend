import React from 'react'
import { motion } from 'framer-motion'

const animation = {
  defaultInitial: {
    opacity: 0,
  },
  defaultAnimate: {
    opacity: 1,
  },
  defaultExit: {
    opacity: 0,
  },
  fromTopInitial: {
    y: -50,
    opacity: 0,
  },
  fromTopAnimate: {
    y: 0,
    opacity: 1,
  },
  fromTopExit: {
    y: -50,
    opacity: 0,
  },
}

export default function Container({ children, animationType }) {
  return (
    <motion.div
      className="container mt-12 mx-auto p-5 md:px-32 lg:64 break-words "
      initial={`${animationType}Initial`}
      animate={`${animationType}Animate`}
      exit={`${animationType}Exit`}
      variants={animation}
    >
      {children}
    </motion.div>
  )
}

Container.defaultProps = {
  animationType: 'default',
}
