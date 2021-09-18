module.exports = {
  name: 'template',
  description: 'This is a template command',
  execute (message, args, bot) {
    message.channel.send('Template command!')
  }
}
