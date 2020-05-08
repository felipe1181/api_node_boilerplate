const axios = require('axios')

/**
 * @description core external resquest.
 * @memberof subscribers/request
 * @async
 * @function
 * @throws {CustomError}
 * @param {url} url - external url async.
 * @returns {response or error} json response.
 */

// Make a request get and post
module.exports = {
  requestGet (url) {
    return axios.get(url).then((response) => {
      return response.data
    })
  },
  requestPost (url, params) {
    axios.post(url, {
      params
    })
      .then(function (response) {
        return response
      })
      .catch(function (error) {
        return error
      })
  }
}
