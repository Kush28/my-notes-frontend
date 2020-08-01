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
  const accessToken = getAuthCookieFromServer(ctx.req)
  if (accessToken) await ctx.store.dispatch(authUser(accessToken))
}

export default wrapper.withRedux(App)
