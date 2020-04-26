const routes = require('express').Router()

routes.get('/', (req, res) => {
  res.send('olá')
})

module.exports = routes
