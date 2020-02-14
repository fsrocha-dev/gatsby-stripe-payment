import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? 'Header HeaderScroll' : 'Header'}
      >
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
  }
}

export default Header
