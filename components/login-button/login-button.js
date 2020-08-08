import React, { useEffect } from 'react'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button from '../button/button'
import { initiateLogin, attachLoginListener } from '../../services/login.service'
import { authUser } from '../../store/auth/auth.action'
import { setAuthCookie } from '../../utils/cookie'

function LoginButton({ authUserAction }) {
  const handleLogin = ({ data }) => {
    if (!data || !data.token) throw new Error('Something went wrong!')
    setAuthCookie(data.token)
    authUserAction(data.token)
  }

  useEffect(() => {
    attachLoginListener(handleLogin)
  }, [])

  return (
    <Button
      className="flex-row flex justify-between text-sm p-5 items-center"
      onClick={() => initiateLogin()}
      variant="login"
    >
      <AiFillGoogleCircle className="text-3xl" />
      <span className="pl-5">Continue with Google</span>
    </Button>
  )
}

const mapDispatchToProps = (dispatch) => ({
  authUserAction: bindActionCreators(authUser, dispatch),
})

export default connect(null, mapDispatchToProps)(LoginButton)
