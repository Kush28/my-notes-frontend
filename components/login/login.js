/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect } from 'react'
import { User } from 'react-feather'
import Button from '../button/button'
import { initiateLogin, loginListener } from '../../services/login.service'

export default function Login() {
  const handleLogin = ({ data }) => {
    console.log(data)
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
