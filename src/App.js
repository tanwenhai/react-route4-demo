/* eslint-disable */
import Bundle from './bundle.js';

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const routes = [
  { 
    path: '/about',
    component: require('bundle-loader?lazy&name=about!./loadAbout')
  },
  { 
    path: '/dashboard',
    component: require('bundle-loader?lazy&name=dashboard!./loadDashboard')
  }
]
console.log(routes)

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

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    <Bundle load={route.component}>
      {(LazyRoute) => <LazyRoute {...props}/>}
    </Bundle>
  )}/>
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
          <ul>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/dashboard">dashboard</Link>
            </li>
          </ul>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
          ))}
        </div>
      </Router>
    )
  }
}
