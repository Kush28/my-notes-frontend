import React from 'react'
import SideMenu from '../sidemenu/SideMenu'

export default function Layout({ children }) {
  return (
    <>
      <SideMenu />
      <main>{children}</main>
    </>
  )
}
