'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'consultas_medicas', // table name
        'status_consulta', // new field name
        {
          type: Sequelize.STRING,
          defaultValue: 'ESPERA',
          allowNull: false
        }
      )
    ])
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('consultas_medicas', 'status_consulta')
  }
}
