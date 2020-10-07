import React, { useState } from "react"
import Header from "./header"
import Menu from "./menu"
import useMousePosition from "../hooks/useMousePosition"

const Layout = ({ children }) => {
  const [menuState, setMenuState] = useState(false)
  const { x, y } = useMousePosition()
  return (
    <div className="App">
      <Header setMenuState={setMenuState} />
      <Menu x={x} y={y} menuState={menuState} setMenuState={setMenuState} />
      <main>{children}</main>
    </div>
  )
}

export default Layout
