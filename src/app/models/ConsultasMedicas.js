'use strict'

const { Model, DataTypes } = require('sequelize')

class ConsultasMedicas extends Model {
  static init (sequelize) {
    super.init({
      febre: { type: DataTypes.BOOLEAN, defaultValue: false },
      tosse: { type: DataTypes.BOOLEAN, defaultValue: false },
      coriza: { type: DataTypes.BOOLEAN, defaultValue: false },
      dorNoCorpo: { type: DataTypes.BOOLEAN, defaultValue: false },
      CorpoMoleFraqueza: { type: DataTypes.BOOLEAN, defaultValue: false },
      DorDeGarganta: { type: DataTypes.BOOLEAN, defaultValue: false },
      faltaDeAr: { type: DataTypes.BOOLEAN, defaultValue: false },
      doencasPreexistentes: { type: DataTypes.BOOLEAN, defaultValue: false },
      fezTratamentoEspecial: { type: DataTypes.BOOLEAN, defaultValue: false },
      sensacaoDesmaio: { type: DataTypes.BOOLEAN, defaultValue: false },
      quandoComecou: { type: DataTypes.INTEGER, defaultValue: 0 },
      statusConsulta: { type: DataTypes.STRING, defaultValue: 'ESPERA' }
    }, {
      sequelize
    })
  }

  static associate (models) {
    this.belongsTo(models.Users, { foreignKey: 'fk_user_paciente', as: 'usersPaciente' })
    this.belongsTo(models.Users, { foreignKey: 'fk_user_medico', as: 'usersMedico' })
  }
}
module.exports = ConsultasMedicas
