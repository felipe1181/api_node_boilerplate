const UserService = require('../services/UserService')
const ErrorService = require('../services/ErrorService')

const HTTP = require('../../constants/http')

class UserController {
  async store (req, res, next) {
    try {
      const { body } = req
      const response = await UserService.store(body)

      if (response.status !== HTTP.CREATED) return next(new ErrorService(req, response).get())

      return res
        .status(HTTP.CREATED)
        .json({ user: response.user, message: response.describe })
    } catch (err) {
      return next(err)
    }
  }

  async update (req, res, next) {
    try {
      const { body } = req
      const response = await UserService.update(body, req.params.id)

      if (response.status !== HTTP.OK) {
        return res.status(response.status)
          .json({ error: new ErrorService(req, response).get() })
      }

      return res
        .status(HTTP.OK)
        .json({ user: response.user, message: response.describe })
    } catch (err) {
      return next(err)
    }
  }

  async get (req, res, next) {
    try {
      const _id = req.params.id
      const response = await UserService.get(_id)

      if (response.status !== HTTP.OK) {
        return next(new ErrorService(req, response).get())
      }

      return res
        .status(HTTP.OK)
        .json({ user: response.user, message: response.describe })
    } catch (err) {
      return next(err)
    }
  }
}

module.exports = new UserController()
