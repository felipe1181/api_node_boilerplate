const jwt = require('jsonwebtoken')
const env = require('../config/env')

module.exports = function () {
  return jwt.sign({ id: this.id }, env.appSecret)
}
