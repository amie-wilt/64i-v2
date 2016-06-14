import React, { PropTypes, Component } from 'react';
import Clear from 'material-ui/svg-icons/content/clear';
import {Link} from 'react-router';
import styles from './Modal.css';

class Modal extends Component {
    _onAnimationEnd(event) {
        var { animationName } = event,
            { onOpen } = this.props;

        if((animationName === styles.fadeIn || animationName === styles.slideInUp) && typeof onOpen === 'function') {
            onOpen();
        }
    }

    render() {
        var { backLink, children } = this.props;

        return (
            <div>
                <div className={styles.container} onAnimationEnd={this._onAnimationEnd.bind(this)}>
                    <Link className={styles.close} to={backLink}>GO BACK</Link>
                    {children}
                </div>
                <div className={styles.layover}></div>
            </div>
        )
    }
}

Modal.propTypes = {
    backLink: React.PropTypes.string.isRequired,
    children: React.PropTypes.element,
    onOpen: React.PropTypes.func
};

export default Modal;