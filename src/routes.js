import React from 'react'
import { Route, IndexRoute, Link } from 'react-router'

/* container components */
import App from './components/App/App'
import Home from './containers/Home/Home'
import AboutUs from './components/AboutUs/AboutUs.js';
import OurWork from './components/OurWork/OurWork.js';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/about-us" component={AboutUs}/>
    <Route path="/our-work" component={OurWork}/>
  </Route>
);

export default routes
