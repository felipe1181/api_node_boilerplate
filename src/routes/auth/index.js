const routes = require('express').Router()
const UserController = require('../../app/controller/UserController')
const AuthController = require('../../app/controller/AuthController')

routes.post('/', UserController.store)
routes.post('/signin', AuthController.store)

module.exports = routes
