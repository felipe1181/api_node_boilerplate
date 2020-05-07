'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('consultasMedicas', {
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
      dorNoCorpo: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      CorpoMoleFraqueza: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      DorDeGarganta: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      faltaDeAr: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      doencasPreexistentes: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      fezTratamentoEspecial: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      sensacaoDesmaio: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      quandoComecou: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      fkUserPaciente: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
        allowNull: true
      },
      fkUserMedico: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('consultasMedicas')
  }
}
