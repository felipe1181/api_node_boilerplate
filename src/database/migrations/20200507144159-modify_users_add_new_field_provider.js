'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'users', // table name
        'provider', // new field name
        {
          type: Sequelize.STRING,
          allowNull: false
        }
      )
    ])
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('users', 'provider')
  }
}
