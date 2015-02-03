var path = require('path'),
    render = require('./render'),
    express = require('express'),
    request = require('request'),
    compress = require('compression');

var appConfig = function(app) {
    app.use(compress());
    app.get('/', render);
    app.get(['/api', '/api*'], function(req, res) {
        var apiUrl = 'http://www.foodbot.io/api';
        var relativeUrl = req.url.replace(/^\/api/, '');
        var url = apiUrl + relativeUrl;
        request(url).pipe(res);
    });
    app.use(express.static(path.join(__dirname, '/../public')));
    app.get('*', render);

    app.set('port', process.env.PORT || 8000);

    return app;
};

module.exports = appConfig;