import React from 'react'
import '../styles/index.css'
import { wrapper } from '../store/store'
import { getAuthCookieFromServer } from '../utils/cookie'
import { authUser } from '../store/auth/auth.action'
import Meta from '../components/meta/meta'
// import Container from '../components/container/container'
// import Header from '../components/header/header'

function App({ Component, pageProps }) {
  return (
    <>
      <Meta />
      {/* <Container> */}
      {/* <Header /> */}
      <Component {...pageProps} />
      {/* </Container> */}
    </>
  )
}

App.getInitialProps = async ({ ctx }) => {
  const accessToken = getAuthCookieFromServer(ctx.req)
  if (accessToken) await ctx.store.dispatch(authUser(accessToken))
}

export default wrapper.withRedux(App)
