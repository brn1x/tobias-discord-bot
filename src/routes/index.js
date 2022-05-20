const express = require('express')

const routes = express.Router()

routes.get('/webhook', (req, res) => {
  const VERIFY_TOKEN = 'brnteste'

  const mode = req.query['hub.mode']
  const token = req.query['hub.verify_token']
  const challenge = req.query['hub.challenge']

  console.log(mode, token, challenge)
  if (mode && token) {
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      console.log('WEBHOOK_VERIFIED')
      return res.status(200).json(parseInt(challenge))
    } else {
      return res.status(403).json({ status: 403, message: 'Unauthorized' })
    }
  }
  return res.status(403).json({ status: 403, message: 'Unauthorized' })
})

routes.post('/webhook', (req, res) => {
  const body = req.body
  console.log('a', body)
  // console.log(body.entry[0].changes[0].value.messages[0])
  // console.log(body.entry[0].changes[0].value.contacts[0])
  // console.log(body.object.entry[0].changes[0].value.messages)
  if (req.body) {
    return res.status(200).json({ status: 200, message: 'Success' })
  } else {
    return res.status(404).json({ status: 404, message: 'Not found' })
  }
})

module.exports = routes
