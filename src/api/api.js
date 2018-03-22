import axios from 'axios'
axios.defaults.withCredentials = true
const baseurl = `http://172.18.1.151:3000`

export {
  axios,
  baseurl
}
