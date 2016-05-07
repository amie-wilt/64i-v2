import React, {Component} from 'react';
import {Link} from 'react-router';
import styles from './NavLink.scss';
import classnames from 'classnames';

class NavLink extends Component {
    static contextTypes = {
        router: React.PropTypes.object
    };

    render() {
        var { page, index, onClick } = this.props;
        var router = this.context.router;
        var delay = `${1.25 + (index*.1)}s`;
        var isActiveView = router.isActive(page.id),
            linkClasses = classnames({
                [styles.activeView]: isActiveView,
                [styles.link]: true
            });

        return (
            <Link style={{ animationDelay:  delay}} className={linkClasses} to={`/${page.id}`} key={page.id} onClick={onClick}>{page.title}</Link>
        );
    }
}

export default NavLink;
