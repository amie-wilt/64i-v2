import React, {Component} from 'react';
import styles from './Navigation.scss';
import classnames from 'classnames';
import NavLink from '../../containers/NavLink';

var pages = [
    {
        id: 'about-us',
        title: 'About Us'
    },
    {
        id: 'our-work',
        title: 'Our Work'
    },
    {
        id: 'contact-us',
        title: 'Contact Us'
    }
];

class Navigation extends Component {
    render() {
        var classes = classnames({
            [styles['navigation-active']]: this.props.navVisible,
            [styles.navigation]: true
        });

        return (
            <nav role="navigation" className={classes}>
                {pages.map((page, i) => {
                    return (
                        <NavLink page={page} index={i} key={page.id} />
                    );
                })}
            </nav>
        )
    }
}

export default Navigation;
