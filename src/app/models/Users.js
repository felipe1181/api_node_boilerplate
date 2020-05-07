const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')
class User extends Model {
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
    this.hasMany(models.ConsultaMedica, { foreignKey: 'fkUserPaciente', as: 'pacienteConsultasMedicas' })
    this.hasMany(models.ConsultaMedica, { foreignKey: 'fkUserMedico', as: 'medicoConsultasMedicas' })
  }
}
module.exports = User
