import React, {Component, PropTypes} from 'react';
import styles from './CaseStudyNav.css';
import CaseStudyNavLink from '../../../containers/CaseStudyNavLink';

var CaseStudyNav = ({ sections }) => (
    <div className={styles.container}>
        <nav role="navigation" className={styles.nav}>
            {sections.map((section, i) => (
                <CaseStudyNavLink
                    key={section.id}
                    index={i}
                    sectionId={section.id}
                    sectionTitle={section.title}
                />
            ))}
        </nav>
    </div>
);

CaseStudyNav.propTypes = {
    sections: React.PropTypes.array.isRequired
};

export default CaseStudyNav;
