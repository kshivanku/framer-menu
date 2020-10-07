import React, { useEffect } from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"

const Header = ({ setMenuState, setCursorHovered }) => {
  const location = useLocation()
  useEffect(() => setMenuState(false), [location])
  return (
    <header>
      <div className="container fluid">
        <div className="header-inner">
          <Link activeClassName="active" to="/">
            Pocket.
          </Link>
          <div
            onClick={() => setMenuState(true)}
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
            className="hamburger-menu"
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
