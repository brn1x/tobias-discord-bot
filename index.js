require('dotenv').config()
const DiscordService = require('./src/services/Discord')

const bot = new DiscordService(process.env.DISCORD_USER_TOKEN, process.env.BOT_PREFIX || '!')
bot.start()
