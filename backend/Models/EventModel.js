const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    Eventname: String,
    Startdate: String,
    Enddate: String,
    Location: String,
    Tickets: String,
    Price: String,
    Capacity: String,


})
const UserModel = mongoose.model("events", UserSchema)
module.exports = UserModel