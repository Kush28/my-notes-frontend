import React from 'react'
import { connect } from 'react-redux'
import Login from '../login/login'
import Avatar from '../avatar/avatar'

function Header({ user, userAuthenticated }) {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
        My Notes
        <span role="img" aria-label="love">
          ❤️
        </span>
      </h1>
      <div className="text-center md:text-left text-lg mt-5 md:pl-8">
        {userAuthenticated ? <Avatar image={user.avatar} /> : <Login />}
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    userAuthenticated: state.auth.authenticated,
  }
}

export default connect(mapStateToProps, null)(Header)
