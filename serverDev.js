import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackConfig from './webpack.config.dev'
import webpackHotMiddleware from 'webpack-hot-middleware';
import database from './database';
import bodyParser from 'body-parser';
import api from './src/api/index';

var compiler = webpack(webpackConfig);

const app = express();

app.set('view engine', 'pug');

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: false
}));

app.use('/api', api);

app.post('/contact-form', (req, res) => {
    var now = (new Date).getTime(),
        fields = req.body;

    database.child(`contactFormSubmissions/${now}`).set(fields).then(() => {
        res.send('Success dan!');
    });
});

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true
    }
}));

app.use(webpackHotMiddleware(compiler));

app.use('/public', express.static(__dirname + '/public'));

app.get('*', (req, res) => {
    res.render('index', {
        initialState: {},
        scripts: []
    });
});

app.listen(3000, '0.0.0.0', err => {
    if (err) {
        console.log(err);
        return;
    }

    console.log('listening on http://127.0.0.1:3000')
});
