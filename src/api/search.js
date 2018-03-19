import {axios, baseurl} from '../api/api.js'

// 搜索
export const search = (param) => {
  return axios.get(baseurl + `/search?keywords=${param.word}`)
    .then(res => res.data)
}
// 搜索multimatch
export const multimatch = (param) => {
  return axios.get(baseurl + `/search/multimatch?keywords=${param.word}`)
    .then(res => res.data)
}
