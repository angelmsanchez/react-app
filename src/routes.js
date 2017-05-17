import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';

export default 
<Router>
  <App>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
  </App>
</Router>
