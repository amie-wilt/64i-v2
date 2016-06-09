import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.css';

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
        // capture scroll position
        this._scrollY = window.scrollY;

        this._modal = document.createElement('div');

        this._modalContainer = document.createElement('div');
        this._modalContainer.classList.add('modal-container');

        this._overlayContainer = document.createElement('div');
        this._overlayContainer.classList.add('modal-layover');

        this._modal.appendChild(this._overlayContainer);
        this._modal.appendChild(this._modalContainer);

        var animationListener = (e) => {
            if(e.target === this._modalContainer) {
                this._modal.classList.add('modal-entered');
                this._modal.classList.remove('modal-enter');

                document.body.classList.add('no-scroll');

                this._modalContainer.removeEventListener('animationend', animationListener);

                if(typeof this.props.onOpen === 'function') {
                    this.props.onOpen();
                }
            }
        };

        this._modalContainer.addEventListener('animationend', animationListener, false);

        document.body.appendChild(this._modal);

        this._modal.classList.add('modal-enter');
    }

    _close() {
        var animationListener = () => {
            this._modalContainer.removeEventListener('animationend', animationListener);

            ReactDOM.unmountComponentAtNode(this._modalContainer);
            document.body.removeChild(this._modal);
            this._modal = null;
        };


        this._modalContainer.addEventListener('animationend', animationListener, true);

        document.body.classList.remove('no-scroll');

        // restore scroll position
        window.scrollTo(0, this._scrollY);

        this._modal.classList.add('modal-leave');
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
        this._render();
    }

    componentWillMount() {
        this._open();

        this._render();
    }

    componentWillUnmount() {
        if(this._modal) {
            this._close();
        }
    }

    render() {
        return null;
    }
}

export default Modal;