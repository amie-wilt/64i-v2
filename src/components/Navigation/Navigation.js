import React, {Component} from 'react';
import {Link} from 'react-router';
import styles from './Navigation.scss';
import classnames from 'classnames';

var pages = [
    {
        id: 'about-us',
        href: '/about-us',
        title: 'About Us'
    },
    {
        id: 'our-work',
        href: '/our-work',
        title: 'Our Work'
    },
    {
        id: 'contact-us',
        href: '/contact-us',
        title: 'Contact Us'
    }
];

class Navigation extends Component {
    render() {
        var classes = classnames({
            [styles['navigation-active']]: this.props.active,
            [styles.navigation]: true
        });

        return (
            <nav role="navigation" className={classes}>
                {pages.map((page, i) => {
                    var delay = `${1.25 + (i*.1)}s`,
                        isActiveView = page.id === this.props.activeView,
                        linkClasses = classnames({
                            [styles.activeView]: isActiveView,
                            [styles.link]: true
                        });

                    return (
                        <Link style={{ animationDelay:  delay}} className={linkClasses} to={page.href} key={page.id}>{page.title}</Link>
                    );
                })}
            </nav>
        )
    }
}

export default Navigation;