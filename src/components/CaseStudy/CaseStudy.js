import React, {Component, PropTypes} from 'react';
import styles from './CaseStudy.scss';
import CaseStudyNav from '../../containers/CaseStudyNav';

class CaseStudy extends Component {
    render() {
        var caseStudy = this.props.caseStudy || {};

        return (
            <section className={styles.content}>
                <h1 className={styles.projectTitle}>{caseStudy.name}</h1>
                <CaseStudyNav caseStudyId={caseStudy.id} />
            </section>
        )
    }
}

export default CaseStudy;
