import React from 'react'
import '../styles/index.css'
import { wrapper } from '../store/store'
import Layout from '../components/layout/layout'

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

App.getInitialProps = async () => {
  // ctx.store.dispatch(addCount())
}

export default wrapper.withRedux(App)
