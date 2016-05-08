import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './containers/App'
import Home from './containers/Home/Home'
import AboutUs from './containers/AboutUs';
import OurWork from './containers/OurWork';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="about-us" component={AboutUs}>
            <Route path="employees/:employeeId" component={AboutUs}/>
        </Route>
        <Route path="our-work" component={OurWork}>
            <Route path="case-studies/:caseStudy/:section" component={OurWork} />
        </Route>
    </Route>
);

export default routes
