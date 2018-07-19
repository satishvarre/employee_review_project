'use strict';
var express = require('express'),
    router = express.Router(),
    controller = require('./feedback.controller');
router.get("/", controller.getFeedback)
router.post("/", controller.createFeedback)
router.put("/", controller.updateFeedback)
router.delete("/", controller.deleteFeedback)
module.exports = router;