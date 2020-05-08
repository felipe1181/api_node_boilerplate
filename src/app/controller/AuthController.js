
const AuthService = require('../services/AuthService')
const ErrorService = require('../services/ErrorService')

const HTTP = require('../../constants/http')

class AuthController {
  async store (req, res, next) {
    try {
      const response = await AuthService.store(req.body)
      if (response.status !== HTTP.OK) {
        console.log(response)
        return res.status(response.status)
          .json({ error: new ErrorService(req, response).get(), auth: false })
      }

      return res.status(HTTP.OK).json({ ...response })
    } catch (err) {
      return next(err)
    }
  }
}

module.exports = new AuthController()
