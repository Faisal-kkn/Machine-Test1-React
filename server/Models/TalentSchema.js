const mongoose = require('mongoose')

const TalentSchema = new mongoose.Schema({

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


}, { timestamps: true })

const TalentModel = mongoose.model('talents', TalentSchema)
module.exports = TalentModel
