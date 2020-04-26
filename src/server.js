const app = require('./app')
const env = require('./config/env')

app.listen(env.portServer || 3000, () => {
  console.info('Listening on port ' + env.portServer)
})
