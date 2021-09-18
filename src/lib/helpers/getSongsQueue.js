function getSongsQueue (bot, message) {
  const queue = bot.distube.dstb.getQueue(message)
  if (queue) {
    const songs = queue.songs.map((song, idx) => {
      return {
        index: idx,
        name: song.name,
        url: song
      }
    })
    return songs
  }
  return null
}

module.exports = getSongsQueue