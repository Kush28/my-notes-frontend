import React from 'react'
import Login from '../login/login'

function Header() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
        My Notes
        <span role="img" aria-label="love">
          ❤️
        </span>
      </h1>
      <Login />
    </section>
  )
}

export default Header
