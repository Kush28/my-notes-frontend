import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { RiStickyNoteLine } from 'react-icons/ri'
import { motion } from 'framer-motion'
import LoginButton from '../components/login-button/login-button'
import Avatar from '../components/avatar/avatar'
import Button from '../components/button/button'
import Container from '../components/container/container'
import { stagger, fadeInUp } from '../animations/fadeInUp'

function Index({ auth, user }) {
  const [welcomeText, setWelcomeText] = useState('')

  useEffect(() => {
    if (auth.authenticated) {
      const inSession = !!sessionStorage.getItem('session')
      const firstVisit = !!localStorage.getItem('fistVisit')
      if (firstVisit) {
        setWelcomeText('Welcome')
        localStorage.setItem('firstVisit', '')
      } else if (inSession) {
        setWelcomeText('')
      } else {
        setWelcomeText('Welcome back')
        sessionStorage.setItem('session', 'true')
        localStorage.setItem('firstVisit', 'true')
      }
    }
  }, [])

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

        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="flex-row flex"
        >
          {!auth.authenticated && (
            <motion.span variants={fadeInUp}>
              <LoginButton />
            </motion.span>
          )}
          {auth.authenticated && (
            <div className="flex-col flex items-center text-lg text-center">
              <motion.p variants={fadeInUp} className="mb-5">
                {welcomeText}
              </motion.p>
              <Button to="/notes" variant="simple" className="mb-5 text-center">
                <div className="flex flex-col items-center">
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Avatar image={user.avatar} className="mb-3" />
                  </motion.div>
                  <motion.p variants={fadeInUp} className="text-sm">
                    {user.name}
                  </motion.p>
                </div>
              </Button>
              <Button variant="simple">
                <motion.p variants={fadeInUp} className="text-xs text-gray">
                  Not you?
                </motion.p>
              </Button>
            </div>
          )}
        </motion.div>
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
