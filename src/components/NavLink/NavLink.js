import React, {Component} from 'react';
import styles from './NavLink.scss';
import classnames from 'classnames';
import { withRouter, Link } from 'react-router'

class NavLink extends Component {
    render() {
        var { page, index, router } = this.props;
        var href = `/${page.id}`;
        var delay = `${1.25 + (index*.1)}s`;
        var isActiveView = router.isActive(page.id),
            linkClasses = classnames({
                [styles.activeView]: isActiveView,
                [styles.link]: true
            });

        return (
            <Link to={href} style={{ animationDelay:  delay}} className={linkClasses}>{page.title}</Link>
        );
    }
}

export default withRouter(NavLink);
