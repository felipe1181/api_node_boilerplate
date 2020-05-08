const HTTP = require('./http')

module.exports = {
  malformedUrl: {
    type: 'malformedUrl',
    status: HTTP.BAD_REQUEST,
    describe: 'malformed url'
  },
  requestError: {
    type: 'notFound',
    status: HTTP.NOT_FOUND,
    describe: 'notFound'
  },
  successResquest: {
    type: 'successResquest',
    status: HTTP.OK,
    describe: 'Success request'
  }
}
