import React from 'react'

import Header from './header'

const Layout = (props) => {
  return (
    <div>
      <Header />
      <p>This is the layout</p>
      {props.children}
    </div>
  )
}

export default Layout
