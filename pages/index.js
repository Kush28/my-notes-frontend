import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>
            Rongo House
            <span role="img" aria-label="love">
              {' '}
              ❤️
            </span>
          </title>
        </Head>
      </Layout>
    </>
  )
}
