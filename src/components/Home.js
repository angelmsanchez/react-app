import React, { Component } from 'react';
import logo from './../assets/logo.svg';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h4>HOME COMPONENT</h4>
        <div>
          <div className="header">
            <img src={logo} className="logo" alt="logo" />
            <h2>React Home</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
