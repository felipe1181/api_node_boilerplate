const v = require('validator')

class ValidatorUser {
  validateEmail (email) {
    return v.isEmail(v.trim(email))
  }

  validatePassword (password) {
    return v.isEmpty(v.trim(password))
  }
}
module.exports = ValidatorUser
