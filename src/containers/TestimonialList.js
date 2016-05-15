import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import TestimonialList from '../components/TestimonialList/TestimonialList';
import { fetchTestimonialsIfNeeded } from '../actions/testimonials';

const mapStateToProps = (state) => {
    return {
        testimonials: state.testimonialsList.items
    }
};

function mapDispatchToProps(dispatch) {
    return {
        fetchTestimonialsIfNeeded: () => {
            dispatch(fetchTestimonialsIfNeeded());
        }
    }
}

class TestimonialListContainer extends Component {
    componentDidMount() {
        this.props.fetchTestimonialsIfNeeded();
    }

    render() {
        return (
            <TestimonialList {...this.props} />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestimonialListContainer)
