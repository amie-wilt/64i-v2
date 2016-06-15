import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {Provider} from 'react-redux'
import {createMemoryHistory, match, RouterContext} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import {configureStore} from './src/store'
import routes from './src/routes';
import database from './database';

const app = express()

app.set('view engine', 'pug');

app.use('/public', express.static(__dirname + '/public'));

app.get('/api/*', (req, res) => {
    var query = req.params[0];

    database.child(query).once('value').then(snapshot => {
        res.send(snapshot.val());
    });
});

app.use((req, res) => {
    var memoryHistory = createMemoryHistory(req.path),
        store = configureStore(memoryHistory),
        history = syncHistoryWithStore(memoryHistory, store);

    /* react router match history */
    match({ history, routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            var fetchData = () => {
                let { components } = renderProps;
                let { url } = req;
                let comp = components[components.length - 1].WrappedComponent;
                let baseUrl = req.protocol + '://' + req.get('host');
                let { dispatch } = store; 

                return comp && comp.fetchData ? comp.fetchData({ baseUrl, dispatch, url }) : Promise.resolve();
            };

            fetchData().then(()=> {
                store = configureStore(memoryHistory, store.getState());

                var content = renderToString(
                    <Provider store={store}>
                        <RouterContext {...renderProps}/>
                    </Provider>
                );

                res.render('index', {
                    content,
                    initialState: store.getState(),
                    scripts: ['/public/vendor.js']
                });
            }).catch(error => {
                console.log(error.stack);
            });
        }
    });

});

app.listen(3000, '0.0.0.0', err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('listening on http://127.0.0.1:3000')
});
