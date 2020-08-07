import React from 'react'
import { connect } from 'react-redux'
import { RiStickyNoteLine } from 'react-icons/ri'
import { motion } from 'framer-motion'
import LoginButton from '../components/login-button/login-button'
import Avatar from '../components/avatar/avatar'
import Button from '../components/button/button'
import Container from '../components/container/container'

function FadeInUp({ children, ...other }) {
  const easing = [0.6, -0.05, 0.01, 0.99]
  return (
    <motion.div
      initial={{
        y: 60,
        opacity: 0,
        transition: { duration: 0.6, ease: easing },
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: easing,
        },
      }}
      {...other}
    >
      {children}
    </motion.div>
  )
}

function Index({ auth, user }) {
  return (
    <Container>
      <div className="flex-col flex fixed h-full w-full top-0 bottom-0 left-0 right-0 justify-center items-center">
        <motion.div className="flex-col flex mb-40">
          <motion.div
            className="flex-row flex"
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl font-extrabold text-warning mr-2 font-ariel">mynotes</h1>
            <RiStickyNoteLine className="text-2xl text-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            A brilliant way to keep yourself organized
          </motion.h2>
        </motion.div>

        <FadeInUp className="flex-row flex">
          {!auth.authenticated && <LoginButton />}
          {auth.authenticated && (
            <div className="flex-col flex items-center text-lg text-center">
              <p className="mb-5">Welcome back</p>
              <Button to="/notes" variant="simple" className="mb-5">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Avatar image={user.avatar} className="mb-3" />
                </motion.div>
                <p className="text-sm">{user.name}</p>
              </Button>
              <Button variant="simple" className="text-xs text-gray">
                Not you?
              </Button>
            </div>
          )}
        </FadeInUp>
      </div>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    auth: state.auth,
  }
}
export default connect(mapStateToProps, null)(Index)
