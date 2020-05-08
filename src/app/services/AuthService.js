const connection = require('../models')
const utilGenerateToken = require('../../utils/GenerateToken')
const ValidatorUser = require('../../utils/validations/ValidatorUser')
const HTTP = require('../../constants/http')
const Response = require('../../constants/ResponseAuth')
const viacep = require('../subscribers/viacep')
const config = require('../../config/env')

const { Users } = connection.models
class AuthService {
  constructor (user) {
    this.user = user
    this.validate = new ValidatorUser()
  }

  async store (body) {
    const { cpf, cep } = body
    try {
      if (!this.validate.validateCpf(cpf) || this.validate.validateCep(cep)) return Response.incorretLogin

      const cityName = await viacep.get(cep)
      if (!config.cidadesAtivas.find(city => city === cityName)) return Response.incorretCity

      const user = await this.user.findOne({
        where: { cpf },
        include: {
          association: 'pacienteConsultasMedicas'
        }
      })

      if (!user) return Response.incorretLogin
      if (user.pacienteConsultasMedicas.length &&
        user.pacienteConsultasMedicas[0].statusConsulta !== 'ESPERA') return Response.consultaBadLogin
      if (!(cep === user.cep)) return Response.incorretLogin

      user.cpf = undefined

      return {
        user,
        status: HTTP.OK,
        token: utilGenerateToken(user.id),
        auth: true
      }
    } catch (err) {
      console.log('errrr')
      return Response.incorretLogin
    }
  }
}

module.exports = new AuthService(Users)
