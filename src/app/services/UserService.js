const { User } = require('../models')
const Response = require('../../constants/response')

class UserService {
  constructor () {
    this.user = User
  }

  async store (body) {
    // check user exists
    /*
      const user = await this.check(body.email)

      if (!user) {
        return {
          user: await this.user.create({ ...body }),
          ...Response.userCreated
        }
      }
    */
    const user = await this.user.create({ ...body })

    if (user) {
      return Response.userCreated
    }

    return Response.userFound
  }
}

module.exports = new UserService()
