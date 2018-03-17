require('dotenv').config()

const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')

const mongo = {

    rentManagerDB: process.env.MONGO_HOST

}

with(mongo) {
    // mongoose.connect(`mongodb://${host}:${port}/${database}`)
    mongoose.connect(`mongodb://${rentManagerDB}`)
}

const app = express()

app.use(cors())

app.use('/api', routes)

const port = process.env.PORT

app.listen(port, () => console.log(`rent-manager api running on port ${port}`))