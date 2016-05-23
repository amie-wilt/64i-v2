import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import ContactForm from '../components/ContactForm/ContactForm';
import {
    updateContactFormField,
    submitContactForm,
    contactFormShowSuccessMessage,
    contactFormHideSuccessMessage
} from '../actions/contactForm';

function mapStateToProps(state) {
    var { contactForm } = state;
    var { fields } = contactForm;

    return {
        isSubmitting: contactForm.isSubmitting,
        showSuccessMessage: contactForm.showSuccessMessage,
        name: fields.name,
        reason: fields.reason,
        comments: fields.comments
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChange: (e) => {
            e.preventDefault();

            var element = e.target,
                { value, name } = element;

            dispatch(updateContactFormField(name, value));
        },
        onSubmit: e => {
            e.preventDefault();

            dispatch(submitContactForm()).then(() => {
                dispatch(contactFormShowSuccessMessage());

                setTimeout(() => {
                    dispatch(contactFormHideSuccessMessage())
                }, 3000);
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
