/*
import plugins related to middleware, routes and auth
*/
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')

const corsOptions = require('./middlewares/cors')
const routesAuth = require('./routes/auth')
const routesSystem = require('./routes')
const core = require('./config/core')

// import settings env
class AppController {
  constructor () {
    this.express = express()

    // load express

    this.middlewares()
    this.routes()
    this.errorManagement()
  }

  // configure middlewares
  middlewares () {
    this.express.use(cors(corsOptions))
    this.express.use(morgan('combined', { stream: core.stream }))
    this.express.use(helmet())
    this.express.use(express.json())
    this.express.use('/api', routesAuth)
  }

  // import routes to router main
  routes () {
    this.express.use('/api', routesSystem)
  }

  // configure errors
  errorManagement () {
    this.express.use(core.notFoundHandler)
    this.express.use(core.errorMiddleware)

    process.on('unhandledRejection', reason => {
      core.logger.info('Unhandled rejection, throwing')
      throw reason
    })

    process.on('uncaughtException', error => {
      core.logger.info('Unhandled exception, handling')

      core.errorHandler.handleError(error)
      if (!core.errorHandler.isTrustedError(error)) {
        process.exit(1)
      }
    })
  }
}

module.exports = new AppController().express
