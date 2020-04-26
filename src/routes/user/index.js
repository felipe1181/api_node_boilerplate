const routes = require('express').Router()

const UserController = require('../../app/controller/UserController')

routes.post('/', UserController.store)

module.exports = routes
