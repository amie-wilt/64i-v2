export const SELECT_CASE_STUDY = 'SELECT_CASE_STUDY';
export function selectCaseStudy(caseStudy) {
    return {
        type: SELECT_CASE_STUDY,
        caseStudy
    }
}