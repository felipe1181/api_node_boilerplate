const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')
class Users extends Model {
  static init (sequelize) {
    super.init({
      cpf: DataTypes.STRING,
      cep: DataTypes.STRING,
      nome: DataTypes.STRING,
      idade: DataTypes.INTEGER,
      sexo: DataTypes.STRING,
      telefone: DataTypes.STRING,
      provider: { type: DataTypes.STRING, defaultValue: 'PACIENTE' }
    }, {
      sequelize,
      hooks: {
        beforeSave: async user => {
          if (user.password) {
            user.password = await bcrypt.hash(user.password, 10)
          }
        }
      }
    })
  }

  static associate (models) {
    this.hasMany(models.ConsultasMedicas, { foreignKey: 'fk_user_paciente', as: 'pacienteConsultasMedicas' })
    this.hasMany(models.ConsultasMedicas, { foreignKey: 'fk_user_medico', as: 'medicoConsultasMedicas' })
  }
}
module.exports = Users
