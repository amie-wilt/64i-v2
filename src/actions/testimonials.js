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

function fetchTestimonials() {
    return dispatch => {
        dispatch(requestTestimonials());

        return fetch(`/api/testimonials`)
            .then(response => response.json())
            .then(testimonials => dispatch(receiveTestimonials(testimonials)))
    }
}

function shouldFetchTestimonials(state) {
    var { testimonials } = state;

    return !testimonials.items.length;
}

export function fetchTestimonialsIfNeeded() {
    // Note that the function also receives getState()
    // which lets you choose what to dispatch next.

    // This is useful for avoiding a network request if
    // a cached value is already available.

    return (dispatch, getState) => {
        if (shouldFetchTestimonials(getState())) {
            // Dispatch a thunk from thunk!
            return dispatch(fetchTestimonials())
        } else {
            // Let the calling code know there's nothing to wait for.
            return Promise.resolve()
        }
    }
}