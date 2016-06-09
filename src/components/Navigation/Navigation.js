import React, {Component} from 'react';
import styles from './Navigation.css';
import classnames from 'classnames';
import NavLink from '../../containers/NavLink';

var Navigation = ({ visible, pages }) => {
    var classes = classnames({
        [styles.visible]: visible,
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
    visible: React.PropTypes.bool.isRequired,
    pages: React.PropTypes.array.isRequired
};

export default Navigation;
