import React, { Component } from 'react'
import './Navbar.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleClick(e) {
    if (e.target.nextSibling.style.display === "block") {
      e.target.nextSibling.style.display = "none";
    } else {
      e.target.nextSibling.style.display = "block";
    }
  }


  render() {
    return (
      <nav className="site-nav">
        <ul className="site-nav-links">
          <li className="nav-item">
            <div onClick={this.handleClick.bind(this)} >Jojo</div>
            <ul className="nav-list-items jojo-drop" style={{ display: "none" }}>
              <li>Jonathan</li>
              <li>Joseph</li>
              <li>Jotaro</li>
              <li>Josuke</li>
              <li>Giorno</li>
              <li>Jolyne</li>
              <li>Johnny</li>
              <li>Jo2ske</li>
            </ul>
          </li>
          <li className="nav-item">
            <div onClick={this.handleClick.bind(this)} >Series</div>
            <ul className="nav-list-items series-drop" style={{ display: "none" }}>
              <li>Phantom Blood</li>
              <li>Battle Tendency</li>
              <li>Stardust Crusaders</li>
              <li>Diamond Is Unbreakable</li>
              <li>Vento Aureo</li>
              <li>Stone Ocean</li>
              <li>Steel Ball Run</li>
              <li>Jojolion</li>
            </ul>
          </li>
          <div className="nav-item" />
        </ul>
      </nav>
    )
  }
}
