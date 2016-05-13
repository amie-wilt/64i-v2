import React, {Component} from 'react';
import styles from './Navigation.scss';
import classnames from 'classnames';
import NavLink from '../../containers/NavLink';

var Navigation = ({ navVisible, pages }) => {
    var classes = classnames({
        [styles['navigation-active']]: navVisible,
        [styles.navigation]: true
    });

    return (
        <nav role="navigation" className={classes}>
            {pages.map((page, i) => (
                <NavLink title={page.title} id={page.id} index={i} key={page.id}/>
            ))}
        </nav>
    )
};

Navigation.propTypes = {
    navVisible: React.PropTypes.bool.isRequired,
    pages: React.PropTypes.array.isRequired
};

export default Navigation;
