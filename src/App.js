//React Library
import React, { Component } from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';

// Components
import Homepage from "./Pages/Homepage";
import Navbar from "./Components/Navbar";

import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
        <Navbar />
        <Homepage />
        </div>
    );
  }
}

export default App;
