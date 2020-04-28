'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'Felipe',
        email: 'felipe@boilerplate.com',
        password: '1234'
      },
      {
        name: 'Henrique',
        email: 'henrique@boilerplate.com',
        password: '1234'
      },
      {
        name: 'Ferraresi',
        email: 'ferraresi@boilerplate.com',
        password: '1234'
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
}
