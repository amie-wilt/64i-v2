import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';
import styles from './CaseStudyNav.scss';

var sections = [
    {
        id: 'overview',
        title: 'Overview'
    },
    {
        id: 'details',
        title: 'Details'
    },
    {
        id: 'tools',
        title: 'Tools'
    },
    {
        id: 'highlights',
        title: 'Highlights'
    }
];

class CaseStudy extends Component {
    render() {
        var links = sections.map(section => {
            var link = `/our-work/case-studies/${this.props.caseStudyId}/${section.id}`,
                isActive = link === this.props.activeView,
                linkClasses = classNames({
                    [styles.navLink]: true,
                    [styles.navLinkActive]: isActive
                });

            return (
                <Link className={linkClasses} to={link} key={section.id}>{section.title}</Link>
            );
        });

        return (
            <div className={styles.navContainer}>
                <nav role="navigation" className={styles.nav}>
                    {links}
                </nav>
            </div>
        )
    }
}

export default CaseStudy;
