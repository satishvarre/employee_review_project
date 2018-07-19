var usermodel = require("./user.model");

exports.getUsers = function (req, res, next) {
    usermodel.find({ Is_deleted: false }, function (err, data) {
        if (err) return next(new Error(err))
        return res.send(data);
    })
}


exports.getUser = function (req, res, next) {
    usermodel.findOne({ Is_deleted: false,_id:req.query.id }, function (err, data) {
        if (err) return next(new Error(err))
        return res.send(data);
    })
}

exports.createUser = function (req, res, next) {
    usermodel.create(req.body, function (err, data) {
        if (err) return next(new Error(err))
        return res.send({
            "Status": 200,
            "message": "Successfully Inserted"
        });
    })
}
exports.updateUser = function (req, res, next) {
    var options = {};
    usermodel.update({ "_id": req.body._id }, req.body, options, function (err, data) {
        return res.send({
            "Status": 200,
            "message": "Successfully Updated User "
        });
    });
}
exports.deleteUser = function (req, res, next) {
    var options =  { Is_deleted: true } ;
    usermodel.update({ "_id": req.query._id }, options, function (err, data) {
        return res.send({
            "Status": 200,
            "message": "User Deleted Successfully "
        });
    });
}