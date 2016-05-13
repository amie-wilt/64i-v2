import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.scss';

class InlineModal extends Component {
    static childContextTypes = {
        router: React.PropTypes.object,
        store: React.PropTypes.object
    };

    getChildContext() {
        return {
            router: this.props.router,
            store: this.props.store
        }
    }

    render() {
        return (
            <div className={this.props.classNames || ''}>
                {this.props.children}
            </div>
        )
    }
}

class Modal extends Component {
    _open() {
        this._modalContainer = document.createElement('div');

        var animationListener = () => {
            this._modalContainer.classList.add('modal-entered');
            this._modalContainer.classList.remove('modal-enter');

            document.body.classList.add('no-scroll');

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

        document.body.classList.remove('no-scroll');

        this._modalContainer.classList.add('modal-leave');
    }

    _render() {
        if(this._modalContainer) {
            ReactDOM.render((
                <InlineModal {...this.props}>
                    {this.props.children}
                </InlineModal>
            ), this._modalContainer);
        }
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

    componentWillUnmount() {
        if(this._modalContainer) {
            this._close();
        }
    }

    render() {
        return null;
    }
}

export default Modal;