/*
import plugins related to middleware, routes and auth
*/
const express = require('express')
const cors = require('cors')

// import settings env
class AppController {
  constructor () {
    this.express = express()

    this.middlewares()
  }

  middlewares () {
    this.express.use(cors())
    this.express.use(express.json())
  }

  routes () {
    this.express.use('/api', require('./routes'))
  }

  // configure errors
}

module.exports = new AppController().express
