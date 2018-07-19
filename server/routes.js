var path = require('path');
var root = path.normalize(__dirname + '/../../..');
var cors = require('cors')
module.exports = function(app) {
    app.use(cors({
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": true,
        "allowedHeaders": ["Access-Control-Allow-Headers", "Origin, X-Requested-With,Client, Content-Type, Accept,Authorization"]
    }))

    app.use('/api/user', require('./api/user'));
    app.use('/api/feedback', require('./api/feedback'));

    app.use(function(err, req, res, next) {
            res.status(err.status || 200);
            res.send({
                err_msg: err.message,
                err_code: err.code || 4,
                err_type: err.type || "danger"
            });
        })
        // app.route('/*')
        //     .get(function(req, res) {
        //         res.sendFile(
        //             app.get('appPath') + '/index.html', {
        //                 root: root
        //             });
        //     });
        app.route('/*').get(function(req, res) {
            res.sendFile(app.get('appPath') + '/index.html', {
                root: path.normalize(__dirname + '/..')
            })
        })
}