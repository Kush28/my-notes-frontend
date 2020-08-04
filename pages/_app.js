import React from 'react'
import '../styles/index.css'
import { wrapper } from '../store/store'
import { getAuthCookieFromServer } from '../utils/cookie'
import { authUser } from '../store/auth/auth.action'
import Meta from '../components/meta/meta'

function App({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
    </>
  )
}

App.getInitialProps = async ({ ctx }) => {
  const { req, res } = ctx

  try {
    const accessToken = getAuthCookieFromServer(req)
    if (accessToken) await ctx.store.dispatch(authUser(accessToken))
    const { auth } = ctx.store.getState()
    if (!auth.authenticated && req.url !== '/') {
      res.writeHead(302, { Location: '/' }).end()
    }
  } catch (error) {
    res.writeHead(302, { Location: '/' }).end()
  }
}

export default wrapper.withRedux(App)
