const express = require('express')
const bodyParser = require('body-parser')
const contactRoute = require('./contact-us')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()

mongoose.set('useCreateIndex', true);

const uri = process.env.DBConnect;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Successfully connected')
})
.catch((err) => {
    console.log(`Couldn't connect ${err}`)
})

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
  })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/v1/api/contact-us', contactRoute.retrieveData)

//for testing, remove when done
app.get('/', (req, res) => {
    res.send('yeah')
})

module.exports = app
