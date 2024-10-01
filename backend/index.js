const express = require('express')
const db = require('./Database/db');
const UserModel = require('./Models/EventModel');
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000;
app.use(cors())
app.use(express.json())

app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.listen(PORT, () => {
    console.log(`server running at ${PORT}`)
})