const express = require('express')
const app = express()
const routes = require('./src/routes/index')

app.use(routes)

app.get('/', (req, res) => {
  return res.send('Bot Tobias is runningaaaaaaaa!')
})

module.exports = app
