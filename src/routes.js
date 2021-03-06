import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './containers/App'

import Home from './components/Home/Home';

import AboutUs from './containers/AboutUs';
import BioModal from './containers/BioModal';

import OurWork from './components/OurWork/OurWork';
import CaseStudyModal from './containers/CaseStudyModal';
import CaseStudyOverview from './containers/CaseStudyOverview';
import CaseStudyDetails from './containers/CaseStudyDetails';

import ContactUs from './components/ContactUs/ContactUs';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about-us" component={AboutUs}>
            <Route path="employees/:employeeId" component={BioModal}/>
        </Route>
        <Route path="our-work" component={OurWork}>
            <Route path="case-studies/:caseStudyId" component={CaseStudyModal}>
                <Route path="overview" component={CaseStudyOverview}/>
                <Route path="details" component={CaseStudyDetails}/>
            </Route>
        </Route>
        <Route path="contact-us" component={ContactUs} />
    </Route>
);

export default routes
