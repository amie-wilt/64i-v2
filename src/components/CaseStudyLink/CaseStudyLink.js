import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import styles from './CaseStudyLink.scss';
import classNames from 'classnames';

class CaseStudyLink extends Component {

    render() {
        var { caseStudy } = this.props;
        var linkClass = classNames(styles.link, this.props.className);
        
        return (
            <Link className={linkClass} to={`/our-work/case-studies/${caseStudy.id}/overview`}>
                <img className={styles.image} src={`/public/case-studies/${caseStudy.id}/overview.jpg`} alt={caseStudy.name} />
                <h3 className={styles.name}>{caseStudy.name}</h3>
            </Link>
        )
    }
}

export default CaseStudyLink