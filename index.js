require('dotenv').config()
const server = require('./server')
const DiscordService = require('./src/services/Discord')

server.listen(process.env.PORT, () => {
  console.info(`Server running on Port ${process.env.PORT}`)
})

const bot = new DiscordService(process.env.DISCORD_USER_TOKEN, process.env.BOT_PREFIX || '!')
bot.start()
