/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect } from 'react'
import { User } from 'react-feather'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button from '../button/button'
import { initiateLogin, loginListener } from '../../services/login.service'
import { authUser } from '../../store/auth/auth.action'
import { setAuthCookie } from '../../utils/cookie'

function Login({ authUserAction }) {
  const handleLogin = ({ data }) => {
    if (!data || !data.token) throw new Error('Something went wrong!')
    setAuthCookie(data.token)
    authUserAction(data.token)
  }

  useEffect(() => {
    loginListener(handleLogin)
  }, [])

  return (
    <Button
      className="text-center md:text-left text-lg mt-5 md:pl-8"
      onClick={() => initiateLogin()}
    >
      <User />
    </Button>
  )
}

const mapDispatchToProps = (dispatch) => ({
  authUserAction: bindActionCreators(authUser, dispatch),
})

export default connect(null, mapDispatchToProps)(Login)
