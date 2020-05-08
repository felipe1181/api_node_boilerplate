const req = require('../request')
const statusDescribe = require('../../../constants/ResponseRequestSubscriber')
const config = require('../../../config/env')

module.exports = {
  async request (cep) {
    try {
      const urlViaCep = `https://viacep.com.br/ws/${cep}/json/`
      const response = await req.requestGet(urlViaCep)

      if (!response) return { status: statusDescribe.requestError }
      return { res: response, status: statusDescribe.successResquest }
    } catch (err) {
      return { status: statusDescribe.malformedUrl }
    }
  }
}
