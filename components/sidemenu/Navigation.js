import * as React from 'react'
import { motion } from 'framer-motion'
import { connect } from 'react-redux'
import { MenuItem } from './MenuItem'
import Avatar from '../avatar/avatar'
import Button from '../button/button'

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
    <MenuItem>
      <Button className="flex items-center px-10 w-full">
        <Avatar size="Smaller" image={user.avatar} />
        <p className="ml-5 font-bold">{user.name}</p>
      </Button>
    </MenuItem>
    <MenuItem>
      <Button to="/" className="flex items-center px-10 w-full">
        Home
      </Button>
    </MenuItem>
    <MenuItem>
      <Button to="/notes" className="flex items-center px-10 w-full">
        My Notes
      </Button>
    </MenuItem>
    <MenuItem>
      <Button to="/notes/addnew" className="flex items-center px-10 w-full">
        Add a Note
      </Button>
    </MenuItem>
  </motion.ul>
)

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps)(Navigation)
