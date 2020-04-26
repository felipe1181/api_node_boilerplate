const routes = require('express').Router()

routes.get('/:id', (req, res) => {
  res.send('olá')
})
