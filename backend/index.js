const express = require('express')
const db = require('./Database/db');
const UserModel = require('./Models/EventModel');
const ImageSchema = require('./Models/ImageModel')
const cors = require('cors')
require('dotenv').config();
const app = express()
const PORT = process.env.PORT || 3000;
app.use(cors())
app.use(express.json())


app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

app.post("/uploadimage", upload.single("image"), async (req, res) => {
    console.log(req.body)
    res.send("uploaded")
})
app.get('/', (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
})


app.listen(PORT, () => {
    console.log(`server running at ${PORT}`)
})