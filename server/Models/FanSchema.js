const mongoose = require('mongoose')

let FanSchema = new mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    }
}, {timestamps: true});

const FanModel = mongoose.model('fans', FanSchema)

module.exports = FanModel
