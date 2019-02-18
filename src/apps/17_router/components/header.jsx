import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <Fragment>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">Navbar</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">Home <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/posts">Posts</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </Fragment>
);

export default Header;