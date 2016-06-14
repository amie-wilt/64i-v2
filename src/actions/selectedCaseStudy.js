export const SELECT_CASE_STUDY = 'SELECT_CASE_STUDY';
export function selectCaseStudy(id, caseStudy) {
    return {
        type: SELECT_CASE_STUDY,
        id,
        caseStudy
    }
}

export const RESET_SELECTED_CASE_STUDY = 'RESET_SELECTED_CASE_STUDY';
export function resetSelectedCaseStudy() {
    return {
        type: RESET_SELECTED_CASE_STUDY
    }
}