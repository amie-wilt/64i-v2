import fetch from 'isomorphic-fetch'
import toggleBioModal from './bioModal';
import setActiveBio from './setActiveBio';
import toggleBioLoading from './toggleBioLoading';

const getBio  = (id) => {
    return fetch(`/employee/${id}`).then(res => res.json());
};

export default (dispatch, employee) => {
    dispatch(toggleBioModal());
    dispatch(toggleBioLoading());
    dispatch(setActiveBio(employee));

    getBio(employee.id).then(fetchedBio => {
        employee = Object.assign(employee, fetchedBio);

        dispatch(setActiveBio(employee));
        dispatch(toggleBioLoading());
    });
}