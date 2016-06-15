import React, { PropTypes, Component } from 'react';
import Clear from 'material-ui/svg-icons/content/clear';
import {Link} from 'react-router';
import styles from './Modal.css';

class Modal extends Component {
    _onAnimationEnd(event) {
        var { animationName } = event,
            { onOpen } = this.props;

        if((animationName === styles.fadeInUp || animationName === styles.slideInUp) && typeof onOpen === 'function') {
            document.body.classList.add(styles.open);
            onOpen();
        }
    }

    componentWillUnmount() {
        var { onClose } = this.props;

        if(typeof onClose === 'function') {
            document.body.classList.remove(styles.open);
            onClose();
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
    onOpen: React.PropTypes.func,
    onClose: React.PropTypes.func,
};

export default Modal;