import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackConfig from './webpack.config.dev'
import webpackHotMiddleware from 'webpack-hot-middleware';
var compiler = webpack(webpackConfig);

const app = express();

/* api endpoints */

const npmPackages = require('./src/api/routes/npmPackages')
app.use('/api/npmPackages', npmPackages)

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

app.listen(3000, 'localhost', function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('listening on http://127.0.0.1:3000')
})
