export default {
  changeSongs (state, songUrl) {
    console.log('changge song!!!')
    state.songUrl = songUrl
  },
  changePlayingStatus (state, status) {
    if (state.songUrl !== '') {
      state.playingstatus = status
    }
  },
  changeMusicDuration (state, duration) {
    state.musicduration = duration
  },
  changeCurTime (state, curTime) {
    state.curTime = curTime
  }
}
