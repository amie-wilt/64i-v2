import React from 'react'
import 'semantic-ui-loader/loader.css';

var LoadingSpinner = () => {
    return (
        <div className="ui active inverted dimmer">
            <div className="ui loader"></div>
        </div>
    )
};

export default LoadingSpinner;