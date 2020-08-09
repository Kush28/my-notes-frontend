import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { slideLeftAnim } from '../../animations/slideLeft'

function AddButton() {
  return (
    <Link href="/notes/addnew">
      <motion.a
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        variants={slideLeftAnim}
        className="fixed shadow-large rounded-full bg-primary text-2xl p-4 bottom-0 right-0 mr-8 mb-10 text-white cursor-pointer"
      >
        <FiPlus />
      </motion.a>
    </Link>
  )
}

export default AddButton
