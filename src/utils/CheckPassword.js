const bcrypt = require('bcryptjs')

module.exports = function (passauth, passbase) {
  return bcrypt.compare(passauth, passbase)
}
