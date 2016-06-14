import fetch from 'isomorphic-fetch'

export const REQUEST_TESTIMONIALS = 'REQUEST_TESTIMONIALS';
function requestTestimonials() {
    return {
        type: REQUEST_TESTIMONIALS
    }
}

export const RECEIVE_TESTIMONIALS = 'RECEIVE_TESTIMONIALS';
function receiveTestimonials(testimonials) {
    return {
        type: RECEIVE_TESTIMONIALS,
        receivedAt: Date.now(),
        testimonials
    }
}

function fetchTestimonials(baseUrl = '') {
    return dispatch => {
        dispatch(requestTestimonials());

        return fetch(`${baseUrl}/api/testimonials`)
            .then(response => response.json())
            .then(testimonials => dispatch(receiveTestimonials(testimonials)))
            .then(payload => payload.testimonials)
    }
}

export function fetchTestimonialsIfNeeded(baseUrl) {
    return (dispatch, getState) => {
        var { testimonialsList } = getState();
        var testimonials = testimonialsList.items;

        return testimonials.length ? Promise.resolve(testimonials) : dispatch(fetchTestimonials(baseUrl));
    }
}