import Head from 'next/head'

import React from 'react'

export default function Meta() {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/favicon.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="theme-color" content="#000" />
      <meta name="description" content="Welcome to our world." />
      <meta property="og:image" content="/favicon.png" />
    </Head>
  )
}
