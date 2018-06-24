import React, { Component } from 'react';
import Navbar from '../../Components/Navbar';
import Canvas from '../../Components/Canvas';
import './Homepage.css';

export default class Homepage extends Component {
  render() {
    return (
      <div className="homepage-component">
      <Navbar />
        <section>
          <h1 className="homepage-headline">
        </h1>
          <div className="stand-generator">
            <div className="stand-image-wrapper">
              <Canvas />
            </div>
          </div>
        </section>
      </div>
    )
  }
}
