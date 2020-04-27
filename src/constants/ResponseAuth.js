const HTTP = require('./http')

module.exports = {
  tokenError: {
    type: 'tokenError',
    status: HTTP.BAD_REQUEST,
    describe: 'Token error'
  },

  incorretLogin: {
    type: 'incorretLogin',
    status: HTTP.BAD_REQUEST,
    describe: 'Incorrect login'
  },
  successLogin: {
    type: 'successLogin',
    status: HTTP.OK,
    describe: 'Success login'
  }
}
