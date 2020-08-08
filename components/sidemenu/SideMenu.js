import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MenuToggle } from './MenuToggle'
import Navigation from './Navigation'

const SideMenu = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
      <AnimatePresence exitBeforeEnter>
        {isOpen && (
          <div className="absolute top-0 left-0 bottom-0 w-300 z-99 text-white font-bold">
            <motion.div
              className="absolute top-0 left-0 bottom-0 w-full"
              style={{ background: 'linear-gradient(180deg, #0055ff 0%, rgb(153, 204, 238) 100%)' }}
              initial={null}
              animate={{
                clipPath: `circle(${1000 * 2 + 200}px at 0px 0px)`,
                transition: {
                  type: 'spring',
                  stiffness: 20,
                  restDelta: 2,
                },
              }}
              exit={{
                clipPath: 'circle(0px at 0px 0px)',
                transition: {
                  delay: 0.5,
                  type: 'spring',
                  stiffness: 400,
                  damping: 40,
                },
              }}
            />
            <Navigation />
          </div>
        )}
      </AnimatePresence>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
    </motion.nav>
  )
}

export default SideMenu
