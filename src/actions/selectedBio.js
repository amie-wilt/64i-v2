export const SELECT_BIO = 'SELECT_BIO';
export function selectBio(id, bio) {
    return {
        type: SELECT_BIO,
        id,
        bio
    }
}

export const RESET_SELECTED_BIO = 'RESET_SELECTED_BIO';
export function resetSelectedBio() {
    return {
        type: RESET_SELECTED_BIO
    }
}