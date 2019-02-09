import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'

const AppLink = ({ to, children }) => ({
  render: () => (
    <Link to={to} className="nav-item nav-link" activeClassName="active">
      {children}
    </Link>
  )
})

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <AppLink to="/">Home</AppLink>
              <AppLink to="/features">Features</AppLink>
              <AppLink to="/price">Pricing</AppLink>
            </div>
          </div>
        </nav>
      </Router>
    )
  }
}

export default App;