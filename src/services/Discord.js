const Discord = require('discord.js')
const getCommandFromMessage = require('../lib/helpers/getCommandFromMessage')
const getCommands = require('../lib/helpers/getCommands')
const DistubeService = require('./Distube')

class DiscordService {
  client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] })
  botToken
  prefix
  channels
  constructor (botToken, prefix) {
    this.botToken = botToken
    this.prefix = prefix
    this.client.distube = new DistubeService(this.client)
    this.client.distube.handleEvents()
    this.channels = process.env.channels ? process.env.channels.split(',') : null
  }

  start() {
    this.client.commands = new Discord.Collection()
    getCommands(this.client.commands)
    this.client.once('ready', () => {
      console.log('Tobias is Online')
    })
    
    this.client.on('message', message => {
      if (this.validadeBotAction(message)) return
    
      const command = getCommandFromMessage(this.prefix, message.content)
    
      if (this.client.commands.get(command)) {
        const args = this.getArgs(message)
        try {
          this.client.commands.get(command).execute(message, args, this.client)
        } catch (error) {
          console.error(error)
          this.client.commands.get(command).execute(message, args, this.client)
        }
      }
    })

    this.client.login(this.botToken)
  }

  getArgs(message) {
    let args = message.content.split(' ')
    args.shift()
    return args
  }

  validadeBotAction(message) {
    if (!message.content.startsWith(this.prefix) ||
      message.author.bot ||
      (this.channels && !this.channels.includes(message.channel.name))
    ) return true

    return false
  }
}

module.exports = DiscordService
