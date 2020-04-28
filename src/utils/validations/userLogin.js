const Joi = require('joi')

module.exports = {
  user: {
    authentication: Joi.object().keys({
      email: Joi.string().regex(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).email().min(8).max(50).required(),
      password: Joi.string().min(6).max(72).required()
    })
  }
}
