const routes = require('express').Router()

const routesUser = require('./user/')

routes.use('/users', routesUser)

module.exports = routes
