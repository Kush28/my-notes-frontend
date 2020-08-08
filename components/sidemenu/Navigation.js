import * as React from 'react'
import { motion } from 'framer-motion'
import { connect } from 'react-redux'
import { RiHome2Line, RiMenuAddLine, RiStickyNoteLine } from 'react-icons/ri'
import { MenuItem } from './MenuItem'
import Avatar from '../avatar/avatar'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const Navigation = ({ user }) => (
  <motion.ul className="absolute p-25 mt-20 w-full" variants={variants}>
    <MenuItem icon={<Avatar size="Smaller" image={user.avatar} />} text={user.name} />
    <MenuItem to="/" icon={<RiHome2Line />} text="Home" />
    <MenuItem to="/" icon={<RiStickyNoteLine />} text="My Notes" />
    <MenuItem to="/" icon={<RiMenuAddLine />} text="Add a Note" />
  </motion.ul>
)

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps)(Navigation)
