const mongoose = require("mongoose")
const db_url = process.env.DATABASE_URL

const connectDb = async () => {
    try {
        mongoose.connect(db_url, {
            useNewUrlParser: true,
        }, () => console.log("Mongo db connected "))
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = { connectDb }