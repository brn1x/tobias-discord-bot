module.exports = {
  name: 'queue',
  description: 'This is the command to list all the songs in the queue in discord',
  execute (message, args, bot) {
    const song = args.join(' ')
    const queue = bot.distube.dstb.getQueue(message, song)
    if (queue) {
      const songs = queue.songs.map((song, idx) => {
        return `${idx + 1} - ${song.name}`
      }).join('\n')

      message.channel.send(songs)
    }
  }
}
