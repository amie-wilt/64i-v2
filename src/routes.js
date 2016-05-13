import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './containers/App'
import Home from './containers/Home/Home'
import AboutUs from './containers/AboutUs';
import OurWork from './containers/OurWork';
import BioModal from './containers/BioModal';
import ContactUs from './containers/ContactUs';
import CaseStudyOverview from './containers/CaseStudyOverview';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="about-us" component={AboutUs}>
            <Route path="employees/:employeeId" component={BioModal}/>
        </Route>
        <Route path="our-work" component={OurWork}>
            <Route path="case-studies/:caseStudy/overview" component={CaseStudyOverview}/>
        </Route>
        <Route path="contact-us" component={ContactUs} />
    </Route>
);

export default routes
