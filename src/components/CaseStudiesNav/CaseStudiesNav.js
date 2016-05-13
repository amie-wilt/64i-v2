import React, {Component, PropTypes} from 'react';
import CaseStudyLink from '../CaseStudyLink/CaseStudyLink';
import CaseStudyModal from '../../containers/CaseStudyModal';
import styles from './CaseStudiesNav.scss';

class CaseStudiesNav extends Component {
    render() {
        var { caseStudies } = this.props;
        
        var caseStudyLinks = caseStudies.map(caseStudy => (
            <CaseStudyLink className={styles.link} caseStudy={caseStudy} key={caseStudy.id}/>
        ));

        return (
            <div>
                <nav className={styles.nav}>
                    {caseStudyLinks}
                </nav>
                <CaseStudyModal />
            </div>
        );
    }
}

CaseStudiesNav.propTypes = {
    caseStudies: React.PropTypes.array.isRequired
};

export default CaseStudiesNav