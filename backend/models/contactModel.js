const mongoose = require('mongoose')

const emailSubscribe = mongoose.Schema({
    name : {type: String},
    email: {type: Object, required: true}
})

module.exports = mongoose.model("EmailSubscribe", emailSubscribe)
