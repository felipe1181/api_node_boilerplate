const jwt = require('jsonwebtoken')
const env = require('../config/env')

module.exports = function (id) {
  return jwt.sign({ id }, env.appSecret)
}
