'use strict';
var crypto = require('crypto'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FeedbackSchema = new Schema({
    User: { type: Schema.ObjectId, ref: "User" },
    Title: { type: String },
    Description: { type: String },
    Rating: { type: Number },
    Is_deleted: { type: String, default: false }
}, { versionKey: false,strict:false });


module.exports = mongoose.model('Feedback', FeedbackSchema);