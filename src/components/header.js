import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
import StripeCheckout from 'react-stripe-checkout'

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

  handlePurchase = token => {
    const amount = 5000
    const description = 'My Course'

    const bodyObject = {
      tokenId: token.id,
      email: token.email,
      name: token.name,
      description,
      amount,
    }

    fetch('http://localhost:9000/stripe-charge', {
      method: 'POST',
      body: JSON.stringify(bodyObject),
    })
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
          <StripeCheckout
            amount={5000}
            image="https://avatars0.githubusercontent.com/u/38115122?s=460&v=4"
            token={this.handlePurchase}
            stripeKey={''}
          >
            <button>Buy</button>
          </StripeCheckout>
        </header>
      </div>
    )
  }
}

export default Header
