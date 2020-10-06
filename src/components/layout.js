import React, { useState } from "react"
import Header from "./header"
import Menu from "./menu"

const Layout = ({ children }) => {
  const [menuState, setMenuState] = useState(false)
  return (
    <div className="App">
      <Header setMenuState={setMenuState} />
      <Menu menuState={menuState} setMenuState={setMenuState} />
      <main>{children}</main>
    </div>
  )
}

export default Layout
