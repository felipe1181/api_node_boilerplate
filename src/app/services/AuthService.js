const connection = require('../models')
const utilCheckPassword = require('../../utils/CheckPassword')
const utilGenerateToken = require('../../utils/GenerateToken')
const ValidatorUser = require('../../utils/validations/ValidatorUser')
const HTTP = require('../../constants/http')
const Response = require('../../constants/ResponseAuth')

const { User } = connection.models
class AuthService {
  constructor (user) {
    this.user = user
  }

  async store (body) {
    const { email, password } = body
    const validate = new ValidatorUser()

    if (!validate.validateEmail(email) || validate.validatePassword(password)) return Response.incorretLogin

    const user = await this.user.findOne({ where: { email } })

    if (!user) return Response.incorretLogin
    if (!(await utilCheckPassword(password, user.password))) return Response.incorretLogin

    user.password = undefined
    return {
      user,
      status: HTTP.OK,
      token: utilGenerateToken(user.id),
      auth: true
    }
  }
}

module.exports = new AuthService(User)
