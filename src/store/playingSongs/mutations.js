export default {
  changeSongs (state, songUrl) {
    state.songUrl = songUrl
  },
  changePlayingStatus (state, status) {
    state.playingstatus = status
  },
  changeMusicDuration (state, duration) {
    state.musicduration = duration
  },
  changeCurTime (state, curTime) {
    state.curTime = curTime
  }
}
