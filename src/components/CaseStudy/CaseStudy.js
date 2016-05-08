import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import styles from './CaseStudy.scss';

var sections =[
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
        var caseStudy = this.props.caseStudy || {};
        
        var links = sections.map(section => {
            var link = `/our-work/case-studies/${caseStudy.id}/${section.id}`,
                isActive = link === this.props.activeView,
                linkClasses = classNames({
                    [styles.navLink]: true,
                    [styles.navLinkActive]: isActive
                });
            
            return (
                <Link className={linkClasses} to={link} key={section.id}>{section.title}</Link>
            );   
        });

        console.log(this.props.activeView);
        
        return (
            <div className={styles.content}>
                <div className={styles.navContainer}>
                    <nav className={styles.nav}>
                        {links}
                    </nav>
                </div>
            </div>
        )
    }
}

export default CaseStudy;
