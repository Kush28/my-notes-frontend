import React from 'react'
import { User } from 'react-feather'

export default function Header() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
        Rongo House
        <span role="img" aria-label="love">
          ❤️
        </span>
      </h1>
      <button className="text-center md:text-left text-lg mt-5 md:pl-8">
        <User />
      </button>
    </section>
  )
}
