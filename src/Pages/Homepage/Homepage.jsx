import React, { Component } from 'react';
import Navbar from '../../Components/Navbar';
import Canvas from '../../Components/Canvas';
import './Homepage.css';

export default class Homepage extends Component {
  render() {
    return (
      <div className="homepage-component">
        <Navbar />
        <Canvas />
      </div>
    )
  }
}
