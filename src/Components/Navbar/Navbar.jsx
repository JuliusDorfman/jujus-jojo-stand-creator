import React, { Component } from 'react'
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="site-nav">
        <ul className="site-nav-links">
        <li className="nav-link">
            <a  href="#">Jojo</a>
          </li>
          <li className="nav-link">
            <a  href="#">Homepage</a>
          </li>
          <li className="nav-link">
            <a  href="#">Series</a>
          </li>
          <li className="nav-link">
            <a  href="#">Characters</a>
          </li>
          <li className="nav-link">
            <a  href="#">Stands</a>
          </li>
        </ul>
      </nav>
    )
  }
}
