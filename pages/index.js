import React from 'react'
import { connect } from 'react-redux'
import { RiStickyNoteLine } from 'react-icons/ri'
import LoginButton from '../components/login-button/login-button'
import Avatar from '../components/avatar/avatar'
import Button from '../components/button/button'

function Index({ auth, user }) {
  return (
    <div className="flex-col flex fixed h-full w-full top-0 bottom-0 justify-center items-center">
      <div className="flex-col flex mb-40">
        <div className="flex-row flex">
          <h1 className="text-4xl font-extrabold text-warning mr-2 font-ariel">mynotes</h1>
          <RiStickyNoteLine className="text-2xl text-primary" />
        </div>
        <h2 className="">A brilliant way to keep yourself organized</h2>
      </div>

      <div className="flex-row flex">
        {!auth.authenticated && <LoginButton />}
        {auth.authenticated && (
          <div className="flex-col flex items-center text-lg text-center">
            <p className="mb-5">Welcome back</p>
            <Button to="/notes" variant="simple" className="mb-5">
              <Avatar image={user.avatar} className="mb-3" />
              <p className="text-sm">{user.name}</p>
            </Button>
            <Button variant="simple" className="text-xs text-gray">
              Not you?
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    auth: state.auth,
  }
}
export default connect(mapStateToProps, null)(Index)
