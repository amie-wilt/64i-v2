import React, { PropTypes, Component } from 'react';
import Clear from 'material-ui/svg-icons/content/clear';
import {Link, withRouter} from 'react-router';
import styles from './Modal.css';

class Modal extends Component {
    constructor(props) {
        super(props);

        this._keyupListener = this._keyupListener.bind(this);
    }

    _keyupListener(e) {
        if(e.keyCode === 27) {
            let { router, backLink } = this.props;

            router.push(backLink);
        }
    }

    _open() {
        var { onOpen } = this.props;

        document.body.classList.add(styles.open);
        document.addEventListener('keyup', this._keyupListener.bind(this));

        if(typeof onOpen === 'function') {
            onOpen();
        }
    }

    _close() {
        var { onClose } = this.props;

        document.body.classList.remove(styles.open);
        document.removeEventListener('keyup', this._keyupListener.bind(this));

        if(typeof onClose === 'function') {
            onClose();
        }
    }

    _onAnimationEnd(event) {
        var { target } = event;

        if(target === this.container) {
            this._open();
        }
    }

    _containerRef(el) {
        if(el) {
            this.container = el;
        }
    }

    componentWillUnmount() {
        this._close();
    }

    render() {
        var { backLink, children } = this.props;

        return (
            <div>
                <div className={styles.container} onAnimationEnd={this._onAnimationEnd.bind(this)} ref={this._containerRef.bind(this)}>
                    <Link className={styles.close} to={backLink}>
                        <span>Close</span>
                    </Link>
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

export default withRouter(Modal);