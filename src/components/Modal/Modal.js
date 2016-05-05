import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import styles from './Modal.scss';

class Modal extends Component {

    _open() {
        this._scrollY = window.scrollY;
        this._mount = document.getElementById('mount');
        this._modalContainer = document.createElement('div');

        var animationListener = () => {
            this._modalContainer.classList.add('modal-entered');
            this._modalContainer.classList.remove('modal-enter');

            if (this.props.onEnter) {
                this.props.onEnter();
            }

            this._mount.classList.add('hide');
            this._modalContainer.removeEventListener('animationend', animationListener);
        };

        this._modalContainer.addEventListener('animationend', animationListener);

        this._modalContainer.classList.add('modal');

        document.body.appendChild(this._modalContainer);

        this._modalContainer.classList.add('modal-enter');
    }

    _close() {
        var animationListener = () => {
            this._modalContainer.removeEventListener('animationend', animationListener, false);

            ReactDOM.unmountComponentAtNode(this._modalContainer);
            document.body.removeChild(this._modalContainer);
            this._modalContainer = null;
        };

        this._modalContainer.addEventListener('animationend', animationListener, false);

        this._mount.classList.remove('hide');
        window.scrollTo(0, this._scrollY);

        this._modalContainer.classList.add('modal-leave');
    }

    _render() {
        let modal = (
            <div className={this.props.classNames || ''}>
                {this.props.children}
            </div>
        );

        ReactDOM.render(modal, this._modalContainer);
    }

    componentDidUpdate() {
        var open = this.props.open;

        if (open && !this._modalContainer) {
            this._open();
        }

        if (!open && this._modalContainer) {
            this._close();
        }

        this._render();
    }

    render() {
        return null;
    }
}

export default Modal;