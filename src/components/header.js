import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <Link to="/" className="Logo">
        Pocket.
      </Link>
      <div className="hamburger-menu">
        <span></span>
        <span></span>
      </div>
    </header>
  )
}

export default Header
