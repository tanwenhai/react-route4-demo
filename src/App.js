/* eslint-disable */
import Bundle from './bundle.js';

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import loadAbout from 'bundle-loader?lazy&name=about!./loadAbout'
import loadDashboard from 'bundle-loader?lazy&name=dashboard!./loadDashboard'
// components load their module for initial visit
const About = (props) => (
  <Bundle load={loadAbout}>
    {(About) => <About {...props}/>}
  </Bundle>
)

const Dashboard = (props) => (
  <Bundle load={loadDashboard}>
    {(Dashboard) => <Dashboard {...props}/>}
  </Bundle>
)

export default class App extends React.Component {
  componentDidMount () {
    // preloads the rest

  }

  render () {
    return (
      <Router>
        <div>
          <h1>Welcome!</h1>
          <Link to="/about">about</Link>
          <Link to="/dashboard">dashboard</Link>
          <Route path="/" component={() => <div>123</div>}/>
          <Route path="/about" component={About}/>
          <Route path="/dashboard" component={Dashboard}/>
        </div>
      </Router>
    )
  }
}
