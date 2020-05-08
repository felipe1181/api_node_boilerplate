const connection = require('../models')
const Response = require('../../constants/ResponseUser')

class UserService {
  constructor () {
    const { Users } = connection.models
    this.user = Users
  }

  async store (body) {
    try {
      // check user exists
      const user = await this.user.findOne({ where: { cpf: body.cpf } })
      if (!user) {
        const userCreated = await this.user.create({ ...body })
        userCreated.cpf = undefined
        return {
          user: userCreated,
          ...Response.userCreated
        }
      }
    } catch (err) {
      return Response.userFound
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

    userUpdate.cpf = undefined
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

    user.cpf = undefined
    return {
      user,
      ...Response.userOk
    }
  }

  check (cpf) {
    return this.user.findOne({ where: { cpf } })
  }
}

module.exports = new UserService()
