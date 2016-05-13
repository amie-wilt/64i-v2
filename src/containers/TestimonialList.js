import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import TestimonialList from '../components/TestimonialList/TestimonialList';
import { fetchTestimonialsIfNeeded } from '../actions/testimonials';

const mapStateToProps = (state) => {
    return {
        testimonials: state.testimonials.items
    }
};
function mapDispatchToProps(dispatch) {
    dispatch(fetchTestimonialsIfNeeded());

    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(TestimonialList)
