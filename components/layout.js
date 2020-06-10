import React from 'react'
import Meta from './meta'
import Header from './header'
import Container from './container'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Container>
        <Header />
        <main>{children}</main>
      </Container>
    </>
  )
}
