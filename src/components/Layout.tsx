import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <>
      <Header />
      <main className="h-full bg-slate-100">
        <Outlet />
      </main>
    </>
  )
}

export default Layout