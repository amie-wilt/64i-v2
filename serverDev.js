import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackConfig from './webpack.config.dev'
import webpackHotMiddleware from 'webpack-hot-middleware';
import database from './database';
var compiler = webpack(webpackConfig);

const app = express();

/* api endpoints */

const npmPackages = require('./src/api/routes/npmPackages')
app.use('/api/npmPackages', npmPackages)

app.get('/api/*', (req, res) => {
    var query = req.params[0];

    database.child(query).once('value').then(snapshot => {
        res.send(snapshot.val());
    });
});


const npmPackage = require('./src/api/routes/npmPackage')
app.use('/api/npmPackage', npmPackage)

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    stats: {colors: true}
}));

app.use(webpackHotMiddleware(compiler));

app.use('/public', express.static(__dirname + '/public'))

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, '0.0.0.0', function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('listening on http://127.0.0.1:3000')
});
