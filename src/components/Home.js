import React, { Component } from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import logo from './../assets/logo.svg';
import './Home.scss';

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about')
}, dispatch);

class Home extends Component {

  changePage() {
    console.log('changePage');
    push('/about');
  }

  render() {
    return (
      <div className="home">
        <h4>HOME COMPONENT</h4>
        <div>
          <div className="header">
            <img src={logo} className="logo" alt="logo" />
            <h2>React Home</h2>
            <button onClick={() => this.changePage()}>Go to about page via redux</button>
          </div>
        </div>
      </div>
    );
  }
}


export default connect(null, mapDispatchToProps)(Home);

