'use strict';
var express = require('express'),
    router = express.Router(),
    controller = require('./user.controller');

router.get("/byid", controller.getUser)
router.get("/", controller.getUsers)
router.post("/", controller.createUser)
router.put("/", controller.updateUser)
router.delete("/", controller.deleteUser)
module.exports = router;