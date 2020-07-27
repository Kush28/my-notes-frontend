import React from 'react'
import '../styles/index.css'
import { wrapper } from '../store/store'
import Layout from '../components/layout/layout'
import { getAuthCookieFromServer } from '../utils/cookie'
import { authUser } from '../store/auth/auth.action'

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

App.getInitialProps = async ({ ctx }) => {
  const accessToken = getAuthCookieFromServer(ctx.req)
  if (accessToken) await ctx.store.dispatch(authUser(accessToken))
}

export default wrapper.withRedux(App)
