import React, {Component, PropTypes} from 'react';
import styles from './CaseStudy.scss';
import CaseStudyNav from '../../containers/CaseStudyNav';
import CaseStudyOverview from './CaseStudyOverview/CaseStudyOverview';

class CaseStudy extends Component {
    render() {
        var caseStudy = this.props.caseStudy || {},
            sectionId = this.props.activeView ? this.props.activeView.split(`/our-work/case-studies/${caseStudy.id}/`)[1] : null;

        var section;

        switch(sectionId) {
            case 'overview':
                section = <CaseStudyOverview caseStudy={caseStudy} />
                break;

            default:
                break;
        }
        
        return (
            <section className={styles.content}>
                <h1 className={styles.title}>{caseStudy.name}</h1>
                <div className={styles.sectionContainer}>
                    {section}
                </div>
                <CaseStudyNav caseStudyId={caseStudy.id} />
            </section>
        )
    }
}

export default CaseStudy;
