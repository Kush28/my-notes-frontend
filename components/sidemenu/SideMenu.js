import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MenuToggle } from './MenuToggle'
import Navigation from './Navigation'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 0px 0px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at 0px 0px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

const SideMenu = () => {
  const [isOpen, setOpen] = useState(false)
  const [showMenu, setMenu] = useState(false)

  const toggleOpen = () => {
    if (isOpen) {
      setOpen(false)
      setTimeout(() => {
        setMenu(() => {
          setMenu(false)
        })
      }, 1000)
    } else {
      setOpen(true)
      setMenu(true)
    }
  }

  return (
    <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
      <div
        className={`absolute top-0 left-0 bottom-0 w-300 z-99 text-white font-bold ${
          !showMenu && 'hidden'
        }`}
      >
        <motion.div
          className="absolute top-0 left-0 bottom-0 w-full"
          style={{ background: 'linear-gradient(180deg, #0055ff 0%, rgb(153, 204, 238) 100%)' }}
          variants={sidebar}
        />
        <Navigation />
      </div>
      <MenuToggle isOpen={isOpen} toggle={() => toggleOpen()} />
    </motion.nav>
  )
}

export default SideMenu
