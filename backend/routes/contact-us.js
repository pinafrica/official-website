const SubscribeModel = require('../models/contactModel')
const retrieveData = (req, res) => {
    const newSubscribers = new SubscribeModel(req.body)
    newSubscribers.save()
    .then(() => {
        res.status(201)
        res.redirect('https://pinafrica.org/we-got-you/')
    })
    .catch((err) => {
        res.status(400).json({
            message: 'Error subscribing to news letter'
        })
    })
}

exports.retrieveData = retrieveData