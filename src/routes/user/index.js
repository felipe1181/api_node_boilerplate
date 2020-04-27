const routes = require('express').Router()

const UserController = require('../../app/controller/UserController')

routes.get('/:id', UserController.get)
routes.put('/:id', UserController.update)
module.exports = routes
