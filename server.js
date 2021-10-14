const express = require('express')
const app = express()

app.get('/', (req, res) => {
  return res.send('Bot Tobias is running!')
})

module.exports = app