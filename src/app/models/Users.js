const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')
class User extends Model {
  static init (sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
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
}
module.exports = User
