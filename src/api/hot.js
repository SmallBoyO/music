import {axios, baseurl} from '../api/api.js'

// 热歌
export const hotmusic = (param) => {
  return axios.get(baseurl + `/top/list?idx=1`)
    .then(res => res.data)
}
