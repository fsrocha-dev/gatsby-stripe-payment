import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <header className="HeaderGroup">
      <Link to="/">
        <img
          src={require('../images/logo-designcode.svg')}
          width="30"
          alt="Logo"
        />
      </Link>
      <Link to="/courses">Courses</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/workshop">Workshop</Link>
      <Link to="/buy">
        <button>Buy</button>
      </Link>
    </header>
  </div>
)

export default Header
