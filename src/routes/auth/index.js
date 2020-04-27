const routes = require('express').Router()
const UserController = require('../../app/controller/UserController')
const AuthController = require('../../app/controller/AuthController')
const AuthMiddleware = require('../../middlewares/auth')

routes.post('/register', UserController.store)
routes.post('/signin', AuthController.store)
routes.use(AuthMiddleware)
module.exports = routes
