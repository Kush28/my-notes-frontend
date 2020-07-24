import React from 'react'
import Meta from '../meta/meta'
import Header from '../header/header'
import Container from '../container/container'

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
