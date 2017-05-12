import React, { Component } from 'react';
import logo from './../assets/logo.svg';
import routes from './../routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          { routes }
        </div>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>React App</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
