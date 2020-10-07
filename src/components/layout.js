import React, { useState } from "react"
import Header from "./header"
import Menu from "./menu"
import useMousePosition from "../hooks/useMousePosition"
import { motion } from "framer-motion"

const Layout = ({ children }) => {
  const [menuState, setMenuState] = useState(false)
  const [cursorHovered, setCursorHovered] = useState(false)
  const { x, y } = useMousePosition()
  return (
    <div className="App">
      <motion.div
        animate={{
          opacity: cursorHovered ? 0.8 : 0,
          scale: cursorHovered ? 1.2 : 1,
          x: x - 16,
          y: y - 16,
        }}
        transition={{ ease: "linear", duration: 0.2 }}
        className="cursor"
      ></motion.div>
      <Header setCursorHovered={setCursorHovered} setMenuState={setMenuState} />
      <Menu
        x={x}
        y={y}
        menuState={menuState}
        setMenuState={setMenuState}
        setCursorHovered={setCursorHovered}
      />
      <main>{children}</main>
    </div>
  )
}

export default Layout
