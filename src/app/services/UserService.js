const connection = require('../models')
const Response = require('../../constants/response')

class UserService {
  constructor () {
    const { User } = connection.models
    this.user = User
  }

  async store (body) {
    // check user exists

    const user = await this.check(body.email)

    if (!user) {
      return {
        user: await this.user.create({ ...body }),
        ...Response.userCreated
      }
    }

    return Response.userFound
  }

  async update (body, index) {
    console.log(body.id)
    const user = await this.user.findByPk(index)
    if (!user) {
      return Response.userNotFound
    }

    const userUpdate = await this.user.update(
      { ...body },
      {
        where: { id: index },
        returning: true
      })

    return {
      user: userUpdate,
      ...Response.userOk
    }
  }

  async get (index) {
    const user = await this.user.findByPk(index)
    if (!user) {
      return Response.userNotFound
    }

    return {
      user,
      ...Response.userOk
    }
  }

  check (email) {
    return this.user.findOne({ where: { email } })
  }
}

module.exports = new UserService()
