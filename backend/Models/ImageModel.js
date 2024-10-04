const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema({

    Image: String


})
const ImageModel = mongoose.model("image", ImageSchema)
module.exports = ImageModel