import fetch from 'isomorphic-fetch'
import { setTestimonials } from './testimonials';

const getTestimonials = () => {
    return fetch(`/api/testimonials`).then(res => res.json());
};

export default (dispatch) => {
    getTestimonials().then(testimonials => {
        dispatch(setTestimonials(testimonials));
    });
}