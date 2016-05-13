import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, useRouterHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import useScroll from 'scroll-behavior/lib/useStandardScroll'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import routes from './src/routes'
import store from './src/clientStore';

const createScrollHistory = useScroll(createBrowserHistory);
const appHistory = useRouterHistory(createScrollHistory)();
const history = syncHistoryWithStore(appHistory, store);

render(
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>,
    document.getElementById('mount')
);
