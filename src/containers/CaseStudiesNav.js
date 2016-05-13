import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CaseStudyNav from '../components/CaseStudiesNav/CaseStudiesNav';
import { fetchCaseStudiesIfNeeded } from '../actions/caseStudiesList';

function mapStateToProps(state) {
    return {
        caseStudies: state.caseStudiesList.items
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCaseStudiesIfNeeded: () => {
            dispatch(fetchCaseStudiesIfNeeded());
        }
    }
}

class CaseStudiesNavContainer extends Component {
    componentDidMount() {
        this.props.fetchCaseStudiesIfNeeded();
    }

    render() {
        return (
            <CaseStudyNav {...this.props} />
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CaseStudiesNavContainer);
