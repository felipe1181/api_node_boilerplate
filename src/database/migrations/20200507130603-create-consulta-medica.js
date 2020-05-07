'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('consultas_medicas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      febre: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      tosse: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      coriza: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      dor_no_corpo: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      corpo_mole_fraqueza: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      dor_de_garganta: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      falta_de_ar: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      doencas_preexistentes: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      fez_tratamento_especial: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      sensacao_desmaio: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      quando_comecou: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      fk_user_paciente: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
        allowNull: true
      },
      fk_user_medico: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
        allowNull: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('consultas_medicas')
  }
}
