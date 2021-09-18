const Distube = require('distube')

class DistubeService {
  dstb
  constructor(client) {
    this.dstb = new Distube(client, {
      searchSongs: false,
      emitNewSongOnly: true,
      leaveOnStop: false
    })
  }
  handleEvents() {
    this.dstb.on('playSong', (message, queue, song) => message.channel.send(
      `Playing ${song.name} - ${song.formattedDuration} \nRequested by: ${song.user}`
    ))
    .on('addSong', (message, queue, song) => message.channel.send(
          `Added ${song.name} - ${song.formattedDuration} to the queue by ${song.user}`
      ))
  }
}

module.exports = DistubeService