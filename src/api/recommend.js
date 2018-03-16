import {axios, baseurl} from '../api/api.js'

// 推荐歌单
export const recommendresource = (param) => {
  return axios.get(baseurl + `/personalized`)
    .then(res => res.data)
}
// 最新音乐
export const newsong = (param) => {
  return axios.get(baseurl + `/personalized/newsong`)
    .then(res => res.data)
}
