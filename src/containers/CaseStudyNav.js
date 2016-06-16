import React, { Component } from 'react'
import { connect } from 'react-redux'
import CaseStudyNav from '../components/CaseStudy/CaseStudyNav/CaseStudyNav';
import sections from '../components/CaseStudy/caseStudySections';

function mapStateToProps(state) {
    return {
        id: state.selectedCaseStudy.id,
        activeView: state.activeView
    }
}

class CaseStudyNavContainer extends Component {
    static defaultProps = {
        sections
    };

    render() {
        return (
            <CaseStudyNav {...this.props} />
        )
    }
}

export default connect(mapStateToProps)(CaseStudyNavContainer)
