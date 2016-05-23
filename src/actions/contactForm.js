import fetch from 'isomorphic-fetch'

export const UPDATE_CONTACT_FORM_FIELD = 'SET_CONTACT_FORM_FIELD';
export const updateContactFormField = (name, value) => {
    return {
        type: UPDATE_CONTACT_FORM_FIELD,
        name,
        value
    }
};

export const CONTACT_FORM_SUBMIT_REQUEST = 'CONTACT_FORM_SUBMIT_REQUEST';
export const contactFormSubmitRequest = () => {
    return {
        type: CONTACT_FORM_SUBMIT_REQUEST
    }
};

export const CONTACT_FORM_SUBMIT_SUCCESS = 'CONTACT_FORM_SUBMIT_SUCCESS';
export const contactFormSubmitSuccess = (response) => {
    return {
        type: CONTACT_FORM_SUBMIT_SUCCESS,
        response
    }
};

export const CONTACT_FORM_SHOW_SUCCESS_MESSAGE = 'CONTACT_FORM_SHOW_SUCCESS_MESSAGE';
export const contactFormShowSuccessMessage = (response) => {
    return {
        type: CONTACT_FORM_SHOW_SUCCESS_MESSAGE,
        response
    }
};

export const CONTACT_FORM_HIDE_SUCCESS_MESSAGE = 'CONTACT_FORM_HIDE_SUCCESS_MESSAGE';
export const contactFormHideSuccessMessage = (response) => {
    return {
        type: CONTACT_FORM_HIDE_SUCCESS_MESSAGE,
        response
    }
};

function submitForm(fields) {
    return dispatch => {
        dispatch(contactFormSubmitRequest());

        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        return fetch('/contact-form', {
            method: 'POST',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(fields)
        }).then(() => {
            dispatch(contactFormSubmitSuccess());
        });
    };
}

export const submitContactForm = () => {
    return (dispatch, getState) => {
        var { fields } = getState().contactForm;

        return dispatch(submitForm(fields));
    }
};

