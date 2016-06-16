import React, { Component } from 'react'
import { connect } from 'react-redux'
import CaseStudyNavLink from '../components/CaseStudy/CaseStudyNavLink/CaseStudyNavLink';

function mapStateToProps(state) {
    return {
        id: state.selectedCaseStudy.id,
        activeView: state.activeView
    }
}

class CaseStudyNavLinkContainer extends Component {
    render() {
        var { activeView, sectionId, id, sectionTitle } = this.props;
        var url = `/our-work/case-studies/${id}/${sectionId}`;
        var isActive = activeView === url;

        return (
            <CaseStudyNavLink text={sectionTitle} isActive={isActive} url={url} />
        )
    }
}

export default connect(mapStateToProps)(CaseStudyNavLinkContainer)
