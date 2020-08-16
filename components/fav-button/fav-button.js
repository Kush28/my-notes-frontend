import React from 'react'
import { motion } from 'framer-motion'
import { slideLeftAnim } from '../../animations/slideLeft'
import Button from '../button/button'

function FavButton({ icon, animation, to, onClick }) {
  return (
    <Button to={to} onClick={onClick}>
      <motion.a
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        variants={animation}
        className="fixed shadow-large rounded-full bg-primary text-2xl p-4 bottom-0 right-0 mr-8 mb-10 text-white cursor-pointer"
      >
        {icon}
      </motion.a>
    </Button>
  )
}

FavButton.defaultProps = {
  animation: slideLeftAnim,
}

export default FavButton
