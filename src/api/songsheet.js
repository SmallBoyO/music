import {axios, baseurl} from '../api/api.js'

// 搜索
export const detail = (param) => {
  return axios.get(baseurl + `/playlist/detail?id=${param.id}`)
    .then(res => res.data)
}
