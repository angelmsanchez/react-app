import React, { Component } from 'react';
import logo from './../assets/logo.svg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <h4>HOME COMPONENT</h4>
        <div className="Home">
          <div className="Home-header">
            <img src={logo} className="Home-logo" alt="logo" />
            <h2>React Home</h2>
          </div>
          <p className="Home-intro">
            To get started, edit <code>src/Home.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
