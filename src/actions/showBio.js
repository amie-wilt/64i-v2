import fetch from 'isomorphic-fetch'
import { showCaseStudyModal } from './bioModal';
import setActiveBio from './activeBio';
import toggleBioLoading from './toggleBioLoading';

const getBio  = (id) => {
    return fetch(`/employee/${id}`).then(res => res.json());
};

export default (dispatch, employee) => {
    dispatch(showCaseStudyModal());
    dispatch(toggleBioLoading());
    dispatch(setActiveBio(employee));

    getBio(employee.id).then(fetchedBio => {
        employee = Object.assign(employee, fetchedBio);

        dispatch(setActiveBio(employee));
        dispatch(toggleBioLoading());
    });
}