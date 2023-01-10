const mongoose = require('mongoose')

let FanSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: true,
    },
    lastname: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    timezone: {
        type: String,
        require: true,
    },
    terms: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

const FanModel = mongoose.model('fans', FanSchema)

module.exports = FanModel
