import React from 'react'
import { RiCloseLine } from 'react-icons/ri'
import { motion } from 'framer-motion'
import Button from '../button/button'
import { fadeIn, fadeInUp } from '../../animations/fadeInUp'

function Modal({
  title,
  children,
  okHandler,
  closeHandler,
  primaryButton,
  secondaryButton,
  color,
}) {
  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 z-10 px-12 py-20 md:px-32 "
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-row-reverse"
      >
        <Button
          className="flex justify-center items-center px-2 py-1 h-10 w-10 rounded-full text-center mb-3 text-xl bg-graylight"
          onClick={closeHandler}
        >
          <RiCloseLine />
        </Button>
      </motion.div>
      <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
        <div className="rounded shadow-small bg-white">
          <div
            className={`flex flex-col justify-center items-center pt-10 pb-8 font-semibold text-center text-${color} text-xl`}
          >
            {title}
          </div>
          <motion.div
            initial="initial"
            animate="animate"
            transition={{ delay: 0.5 }}
            // variants={stagger}
            className="flex flex-col justify-center items-center bg-graylight border-t border-gray-400 py-10 px-10"
          >
            <motion.div variants={fadeIn} className="mb-5 text-gray-800">
              {children}
            </motion.div>
            <div className="flex flex-row justify-center items-center">
              {primaryButton && (
                <motion.div variants={fadeInUp}>
                  <Button variant="secondary-block" className="h-12 w-24" onClick={okHandler}>
                    {primaryButton}
                  </Button>
                </motion.div>
              )}
              {secondaryButton && (
                <motion.div variants={fadeInUp}>
                  <Button variant="transparent" className="h-12 w-24 ml-4" onClick={closeHandler}>
                    {secondaryButton}
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

Modal.defaultProps = {
  okHandler: () => {},
  color: 'secondary',
}

export default Modal
