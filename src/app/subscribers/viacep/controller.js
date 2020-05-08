const service = require('./service')
const HTTP = require('../../../constants/http')

/**
 * @description controller function to get city data by cep.
 * @memberof subscribers
 * @async
 * @function
 * @throws {CustomError}
 * @param {string} cep - cep xxxxxxxx
 * @returns {response json} json viacep city data.
 */

class ControllerViaCep {
  async get (cep) {
    const response = await service.request(cep)

    if (response.status.status !== HTTP.OK) return { error: true, status: response.status }
    return response.res.localidade
  }
}
module.exports = new ControllerViaCep()
