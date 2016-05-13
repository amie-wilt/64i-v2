import React, { Component } from 'react'
import { connect } from 'react-redux'
import CaseStudyNavLink from '../components/CaseStudy/CaseStudyNavLink/CaseStudyNavLink';

function mapStateToProps(state) {
    return {
        caseStudyId: state.selectedCaseStudy.id,
        activeView: state.activeView
    }
}

class CaseStudyNavLinkContainer extends Component {
    render() {
        var { activeView, sectionId, caseStudyId } = this.props;
        var isActive = activeView === `/our-work/case-studies/${caseStudyId}/${sectionId}`;

        return (
            <CaseStudyNavLink {...this.props} isActive={isActive} />
        )
    }
}

export default connect(mapStateToProps)(CaseStudyNavLinkContainer)
