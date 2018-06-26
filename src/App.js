//React Library
import React, { Component } from 'react';

// Components
import Homepage from "./Pages/Homepage";
// import Footer from './Components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage />
      </div>
    );
  }
}

export default App;
