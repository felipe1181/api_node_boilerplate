const bcrypt = require('bcrypt')

module.exports = function (passauth, passbase) {
  return bcrypt.compare(passauth, passbase)
}
