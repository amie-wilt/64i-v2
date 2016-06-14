import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {fetchTestimonialsIfNeeded} from '../actions/testimonials';
import {fetchTeamListIfNeeded} from '../actions/teamList';
import AboutUs from '../components/AboutUs/AboutUs';

function mapDispatchToProps(dispatch) {
    return {
        fetchTestimonialsIfNeeded: () => {
            return dispatch(fetchTestimonialsIfNeeded());
        },
        dispatch
    }
}

class AboutUsContainer extends Component {
    static fetchData({ dispatch, baseUrl }) {
        return Promise.all([
            dispatch(fetchTestimonialsIfNeeded(baseUrl)),
            dispatch(fetchTeamListIfNeeded(baseUrl))
        ]);
    }

    componentDidMount() {
        let { dispatch } = this.props;

        AboutUsContainer.fetchData({ dispatch });
    }

    render() {
        return (
            <AboutUs {...this.props} />
        )
    }
}

export default connect(null, mapDispatchToProps)(AboutUsContainer)
