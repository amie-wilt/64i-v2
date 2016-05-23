import {
    UPDATE_CONTACT_FORM_FIELD,
    CONTACT_FORM_SUBMIT_REQUEST,
    CONTACT_FORM_SUBMIT_SUCCESS,
    CONTACT_FORM_HIDE_SUCCESS_MESSAGE,
    CONTACT_FORM_SHOW_SUCCESS_MESSAGE
} from '../actions/contactForm';

import reasons from '../../data/contact-reason-options';

var fields = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_CONTACT_FORM_FIELD:
            return Object.assign({}, state, {
                [action.name]: action.value
            });
            break;

        default:
            return state
    }
};

export default (state = {
    isSubmitting: false,
    showSuccessMessage: false,
    fields: {
        reason: reasons.find(reason => reason.default).value
    }
}, action) => {
    switch (action.type) {
        case UPDATE_CONTACT_FORM_FIELD:
            return Object.assign({}, state, {
                fields: fields(state.fields, action)
            });
            break;

        case CONTACT_FORM_SUBMIT_REQUEST:
            return Object.assign({}, state, {
                isSubmitting: true
            });
            break;

        case CONTACT_FORM_SUBMIT_SUCCESS:
            return Object.assign({}, state, {
                isSubmitting: false,
                showSuccessMessage: true
            });
            break;

        case CONTACT_FORM_HIDE_SUCCESS_MESSAGE:
            return Object.assign({}, state, {
                showSuccessMessage: false
            });
            break;

        case CONTACT_FORM_SHOW_SUCCESS_MESSAGE:
            return Object.assign({}, state, {
                showSuccessMessage: true
            });
            break;

        default:
            return state
    }
};
