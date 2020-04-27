/*
import plugins related to middleware, routes and auth
*/
const express = require('express')
const cors = require('cors')

// import settings env
class AppController {
  constructor () {
    this.express = express()

    // load express

    this.middlewares()
    this.routes()
  }

  // configure middlewares
  middlewares () {
    this.express.use(cors())
    this.express.use(express.json())
    this.express.use('/api', require('./routes/auth'))
  }

  // import routes to router main
  routes () {
    this.express.use('/api', require('./routes'))
  }

  // configure errors
}

module.exports = new AppController().express
