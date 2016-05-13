import {SHOW_BIO_MODAL, HIDE_BIO_MODAL} from '../actions/bioModal';

export default (state = false, action) => {
    switch (action.type) {
        case SHOW_BIO_MODAL:
            return true;
            break;

        case HIDE_BIO_MODAL:
            return false;
            break;

        default:
            return state
    }
};
