import {axios, baseurl} from '../api/api.js'

export const login = (param) => {
  return axios.get(baseurl + `/login/cellphone?phone=${param.phone}&password=${param.password}`)
    .then(res => res.data)
}
