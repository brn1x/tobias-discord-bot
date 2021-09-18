module.exports = {
  name: 'play',
  description: 'This is the command to play songs on discord',
  execute (message, args, bot) {
    const song = args.join(' ')
    bot.distube.dstb.play(message, song)
  }
}
