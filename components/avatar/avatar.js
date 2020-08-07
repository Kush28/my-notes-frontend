import React from 'react'
import { motion } from 'framer-motion'

export default function Avatar({ image, className }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <img src={image} alt="avatar" className={`h-16 w-16 rounded-full ${className || ''}`} />
    </motion.div>
  )
}
