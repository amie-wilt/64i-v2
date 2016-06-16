import React, {Component, PropTypes} from 'react'
import ImageLoader from '../components/ImageLoader/ImageLoader';

class ImageLoaderContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        };
    }

    componentDidMount() {
        if (this.img) {
            this.img.onload = () => {
                this.setState({
                    loaded: true
                });
            };
        }
    }

    _ref(el) {
        if (el) {
            this.img = el.querySelector('img');
        }
    }

    render() {
        return (
            <ImageLoader {...this.props} loaded={this.state.loaded} refEl={this._ref.bind(this)}>
                {this.props.children}
            </ImageLoader>
        );
    }
}

export default ImageLoaderContainer;
