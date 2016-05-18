import React, {Component, PropTypes} from 'react'
import ImageLoader from '../components/ImageLoader/ImageLoader';

class ImageLoaderContainer extends Component {
    static setListener = false;

    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        var { src } = this.props;
        var img = new Image();

        img.onload = () => {
            this.setState({
                loaded: true
            });
        };

        img.src = src;
    }

    render() {
        var { children } = this.props;

        var refer = (ref) => {
            if (!this.setListener && ref) {
                var img = ref.querySelector('img');

                var animationListener = (e) => {
                    img.style.willChange = '';
                    img.removeEventListener('animationend', animationListener);
                };

                img.style.willChange = 'opacity';
                img.addEventListener('animationend', animationListener, false);
                this.setListener = true;

            }
        };

        return (
            <ImageLoader {...this.props} loaded={this.state.loaded}>
                <div ref={refer}>{children}</div>
            </ImageLoader>
        );
    }
}

export default ImageLoaderContainer;
