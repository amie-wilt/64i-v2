import React, {Component, PropTypes} from 'react'
import ImageLoader from '../components/ImageLoader/ImageLoader';

class ImageLoaderContainer extends Component {
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
        return (
            <ImageLoader {...this.props} loaded={this.state.loaded} />
        );
    }
}

export default ImageLoaderContainer;
