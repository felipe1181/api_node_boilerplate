const connection = require('../models')
const Response = require('../../constants/ResponseUser')

class UserService {
  constructor () {
    const { User } = connection.models
    this.user = User
  }

  async store (body) {
    // check user exists

    const user = await this.check(body.email)

    if (!user) {
      const userCreated = await this.user.create({ ...body })
      userCreated.password = undefined
      return {
        user: userCreated,
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

    userUpdate.password = undefined
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

    user.password = undefined
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
