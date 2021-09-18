const getSongsQueue = require("../helpers/getSongsQueue")

module.exports = {
  name: 'next',
  description: 'This is the command to send for the next song on discord',
  async execute (message, args, bot) {
    const queue = getSongsQueue(bot, message)
    if (queue && queue.length === 1) {
      bot.distube.dstb.stop(message)
      message.channel.send('There is no more songs to play, your playlist is empty')
    } else if (queue && queue.length > 1) {
      bot.distube.dstb.skip(message)
    } else {
      message.channel.send('There is no more songs to play, your playlist is empty')
    }
  }
}
