const UserService = require('../services/UserService')
const ErrorService = require('../services/ErrorService')

const HTTP = require('../../constants/http')

class UserController {
  async store (req, res, next) {
    try {
      const { body } = req
      console.log(body)
      const response = await UserService.store(body)

      if (response.status !== HTTP.CREATED) {
        const e = new ErrorService(req, response)
        return next(e.get())
      }

      return res
        .status(HTTP.CREATED)
        .json({ user: response.user, message: response.describe })
    } catch (err) {
      return next(err)
    }
  }
}

module.exports = new UserController()
