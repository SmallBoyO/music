import {axios, baseurl} from '../api/api.js'

// 搜索
export const userdetail = (param) => {
  return axios.get(baseurl + `/user/detail?uid=${param.id}`)
    .then(res => res.data)
}
