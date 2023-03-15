
module.exports =  app => {
    const invit = require("../controllers/flare_invit.controllers.js")
    var router = require('express').Router()
    router.post('/invit',invit.create)
    app.use('/api/flare',router)
}