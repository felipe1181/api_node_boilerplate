const HTTP = require('./http')

module.exports = {
  tokenError: {
    type: 'tokenError',
    status: HTTP.UNAUTHENTICATED,
    describe: 'Token error'
  },

  incorretLogin: {
    type: 'incorretLogin',
    status: HTTP.BAD_REQUEST,
    describe: 'Incorrect login'
  },
  incorretCity: {
    type: 'incorretCity',
    status: HTTP.BAD_REQUEST,
    describe: 'Incorrect login city'
  },
  consultaBadLogin: {
    type: 'consultaBadLogin',
    status: HTTP.BAD_REQUEST,
    describe: 'consulta médica já realizada'
  },
  successLogin: {
    type: 'successLogin',
    status: HTTP.OK,
    describe: 'Success login'
  }
}
