import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import TestimonialList from '../components/TestimonialList/TestimonialList';


const mapStateToProps = (state) => {
    return {
        testimonials: state.testimonialsList.items
    }
};

export default connect(mapStateToProps)(TestimonialList)
