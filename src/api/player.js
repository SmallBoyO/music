import {axios, baseurl} from '../api/api.js'

// 推荐歌单
export const getMusicUrlById = (param) => {
  return axios.get(baseurl + `/music/url?id=${param.id}`)
    .then(res => res.data)
}
// 获取歌词
export const lyric = (param) => {
  return axios.get(baseurl + `/lyric?id=${param.id}`)
    .then(res => res.data)
}

// 获取歌词
export const songdetail = (param) => {
  return axios.get(baseurl + `/song/detail?ids=${param.id}`)
    .then(res => res.data)
}
