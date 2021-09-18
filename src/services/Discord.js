const Discord = require('discord.js')
const getCommandFromMessage = require('../lib/helpers/getCommandFromMessage')
const getCommands = require('../lib/helpers/getCommands')
const DistubeService = require('./Distube')

class DiscordService {
  client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] })
  botToken
  constructor (botToken) {
    this.botToken = botToken
    this.client.distube = new DistubeService(this.client)
    this.client.distube.handleEvents()
  }

  start() {
    const prefix = '%'
    this.client.commands = new Discord.Collection()
    getCommands(this.client.commands)
    this.client.once('ready', () => {
      console.log('Tobias is Online')
    })
    
    this.client.on('message', message => {
      if (!message.content.startsWith(prefix) || message.author.bot) return
    
      const command = getCommandFromMessage(prefix, message.content)
    
      if (this.client.commands.get(command)) {
        const args = this.getArgs(message)
        this.client.commands.get(command).execute(message, args, this.client)
      }
    })

    this.client.login(this.botToken)
  }

  getArgs(message) {
    let args = message.content.split(' ')
    args.shift()
    return args
  }
}

module.exports = DiscordService
