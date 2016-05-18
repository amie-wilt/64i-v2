import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, browserHistory, applyRouterMiddleware} from 'react-router'
import useScroll from 'react-router-scroll';
import routes from './src/routes'
import store from './src/clientStore';

render(
    <Provider store={store}>
        <Router
            history={browserHistory}
            routes={routes}
            render={applyRouterMiddleware(useScroll)}
        />
    </Provider>,
    document.getElementById('mount')
);
