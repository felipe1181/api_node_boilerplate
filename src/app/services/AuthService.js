const connection = require('../models')
const utilCheckPassword = require('../../utils/CheckPassword')
const utilGenerateToken = require('../../utils/GenerateToken')
const HTTP = require('../../constants/http')
const Response = require('../../constants/ResponseAuth')

const { User } = connection.models
class AuthService {
  constructor (user) {
    this.user = user
  }

  async store (body) {
    const { email, password } = body
    if (email === undefined || password === undefined) return Response.incorretLogin
    const user = await this.user.findOne({ where: { email } })

    if (!user) return Response.incorretLogin
    if (!(await utilCheckPassword(password, user.password))) return Response.incorretLogin

    user.password = undefined
    return {
      user,
      status: HTTP.OK,
      token: utilGenerateToken(user.id).toString()
    }
  }
}

module.exports = new AuthService(User)
