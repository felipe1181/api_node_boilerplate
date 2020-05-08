const dotenv = require('dotenv')

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

module.exports = {
  env: process.env.NODE_ENV,
  appSecret: process.env.APP_SECRET,
  tokenLifetime: process.env.TOKEN_LIFETIME,
  portServer: process.env.PORT_SERVER,
  local: process.env.NODE_ENV,
  cidadesAtivas: process.env.APP_CIDADES_ATIVAS.split(','),
  database: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    db: process.env.DB_DATABASE,
    dialect: process.env.DB_DIALECT || 'postgres',
    port: process.env.DB_PORT
  },
  test: {
    storage: './__tests__/database.sqlite'
  }
}
