import React from 'react'
import Profile from '../features/Profile/Profile'
import Works from '../features/Works/Works'
import Alert from '../features/Alert/Alert'

const Layout = () => {
  return (
    <main>
      <Alert />
      <Profile />
      <Works />
    </main>
  )
}

export default Layout
