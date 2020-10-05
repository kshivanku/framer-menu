import React from "react"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <div className="App">
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
