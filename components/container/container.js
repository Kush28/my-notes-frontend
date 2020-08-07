import React from 'react'
import { motion } from 'framer-motion'

export default function Container({ children }) {
  return (
    <motion.div
      className="container mx-auto p-5 break-words"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}
