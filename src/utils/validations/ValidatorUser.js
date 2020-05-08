const strValidator = require('validator')
const { cpf } = require('cpf-cnpj-validator')

class ValidatorUser {
  validateCpf (cpfUser) {
    return cpf.isValid(strValidator.trim(cpfUser))
  }

  validateCep (cep) {
    return strValidator.isEmpty(strValidator.trim(cep))
  }
}
module.exports = ValidatorUser
