'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('users', 'name', 'nome')
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('users', 'nome', 'name')
  }
}
