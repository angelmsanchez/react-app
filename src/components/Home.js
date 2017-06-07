import React, { Component } from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import logo from './../assets/logo.svg';
import './Home.scss';
import { incrementCounter } from './../store/actions';

/*const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about')
}, dispatch);*/


class Home extends Component {

  constructor(props) {
    super(props);
    console.log('Home', props);
  }

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
          <div className="header">
            <button onClick={this.props.incrementCounter}>Increment via redux</button>
          {/*  <button onClick={() => this.props.actions.incrementCounter()}>Increment via redux</button>*/}
            <p>Counter: {this.props.counter}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
    incrementCounter: bindActionCreators(incrementCounter, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

