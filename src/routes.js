import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './components/App/App'
import Home from './containers/Home/Home'
import AboutUs from './containers/AboutUs';
import OurWork from './components/OurWork/OurWork.js';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="about-us" component={AboutUs}/>
        <Route path="about-us/employees/:employeeId" component={AboutUs}/>
        <Route path="our-work" component={OurWork}/>
    </Route>
);

export default routes
