import React, { useEffect } from 'react'
import { User } from 'react-feather'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button from '../button/button'
import { initiateLogin, attachLoginListener } from '../../services/login.service'
import { authUser } from '../../store/auth/auth.action'
import { setAuthCookie } from '../../utils/cookie'

function Login({ authUserAction }) {
  const handleLogin = ({ data }) => {
    if (!data || !data.token) throw new Error('Something went wrong!')
    setAuthCookie(data.token)
    authUserAction(data.token)
  }

  useEffect(() => {
    attachLoginListener(handleLogin)
  }, [])

  return (
    <Button onClick={() => initiateLogin()}>
      <User />
    </Button>
  )
}

const mapDispatchToProps = (dispatch) => ({
  authUserAction: bindActionCreators(authUser, dispatch),
})

export default connect(null, mapDispatchToProps)(Login)
