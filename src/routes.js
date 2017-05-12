import React from 'react'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'

const Home = () => (
<div>Home</div>
)

const About = () => (
<div>
About
</div>
)

export default 
<Router>
  <div>
    <Link to="/">
      Home
    </Link>
    <Link to="about">
      About
    </Link>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
  </div>
</Router>
