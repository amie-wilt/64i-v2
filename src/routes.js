import React from 'react'
import { Route, IndexRoute, Link } from 'react-router'

/* container components */
import App from './components/App/App'
import Home from './containers/Home/Home'
import AboutUs from './components/AboutUs/AboutUs.js';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/about-us" component={AboutUs}/>
  </Route>
);

export default routes
