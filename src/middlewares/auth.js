const HTTP = require('../constants/http')
const ResponseAuth = require('../constants/ResponseAuth')
const jwt = require('jsonwebtoken')
const config = require('../config/env')

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader) return errorToken(res)

    if (!authHeader.startsWith('Bearer')) return errorToken(res)

    const authParts = authHeader.split(' ')
    if (!authParts.length === 2) return errorToken(res)

    const [scheme, token] = authParts
    if (!/^Bearer/.test(scheme)) return errorToken(res)

    jwt.verify(token, config.appSecret, (err, decoded) => {
      if (err) return errorToken(res)

      decoded = jwt.decode(token)
      req.userId = decoded.id
      return next()
    })
  } catch (err) {
    return errorToken(res)
  }
}

function errorToken (res) {
  return res.status(HTTP.UNAUTHENTICATED).json({ error: ResponseAuth.tokenError })
}
