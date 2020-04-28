const HTTP = require('../constants/http')
const ResponseAuth = require('../constants/ResponseAuth')
const jwt = require('jsonwebtoken')
const config = require('../config/env')
const GenerateToken = require('../utils/GenerateToken')

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader) return errorToken(res)

    const authParts = authHeader.split(' ')
    if (!authParts.length === 2) return errorToken(res)

    const [scheme, token] = authParts
    if (!/^Bearer/.test(scheme)) return errorToken(res)

    jwt.verify(token, config.appSecret, (err, decoded) => {
      decoded = jwt.decode(token)
      if (err) {
        // refesh token
        if (err.name === 'TokenExpiredError') {
          try {
            req.userId = decoded.id
            req.refeshToken = 'Bearer ' + GenerateToken(req.userId).toString()
            return next()
          } catch (err) { return errorToken(res) }
        }
        return errorToken(res)
      }
      req.userId = decoded.id
      req.refeshToken = authHeader
      return next()
    })
  } catch (err) {
    if (err.name === !'TokenExpiredError') return errorToken(res)
  }
}

function errorToken (res) {
  return res.status(HTTP.UNAUTHENTICATED).json({ error: ResponseAuth.tokenError })
}
