const requireDirectory = require('require-directory')
const Sequelize = require('sequelize')
const config = require('../../config/database')

const requireModels = requireDirectory(module)
const db = [requireModels.Users]

const connection = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)

db
  .map(model => model.init(connection))
db
  .map(model => model.associate && model.associate(connection.models))

module.exports = connection
