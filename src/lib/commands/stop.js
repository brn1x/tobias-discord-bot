module.exports = {
  name: 'stop',
  description: 'This is the command to stop songs on discord',
  execute (message, args, bot) {
    const song = args.join(' ')
    bot.distube.dstb.stop(message)
  }
}
