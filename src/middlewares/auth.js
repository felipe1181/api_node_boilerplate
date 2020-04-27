const HTTP = require('../constants/http')
const ResponseAuth = require('../constants/ResponseAuth')
const jwt = require('jsonwebtoken')
const config = require('../config/env')

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader) errorToken(res)

    const authParts = authHeader.split(' ')
    if (!authParts.length === 2) errorToken(res)

    const [scheme, token] = authParts
    if (!/^Bearer/.test(scheme)) errorToken(res)

    jwt.verify(token, config.appSecret, (err, decoded) => {
      if (err) return errorToken(res)

      req.userId = decoded.id
      return next()
    })
  } catch (err) {
    return errorToken(res)
  }
}

function errorToken (res) {
  console.log()
  return res.status(HTTP.UNAUTHENTICATED).json({ error: ResponseAuth.tokenError })
}
