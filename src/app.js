/*
import plugins related to middleware, routes and auth
*/
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const corsOptions = require('./middlewares/cors')
const routesAuth = require('./routes/auth')
const routesSystem = require('./routes')

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
    this.express.use(cors(corsOptions))
    this.express.use(helmet())
    this.express.use(express.json())
    this.express.use('/api', routesAuth)
  }

  // import routes to router main
  routes () {
    this.express.use('/api', routesSystem)
  }

  // configure errors
}

module.exports = new AppController().express
