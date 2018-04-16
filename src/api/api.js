import axios from 'axios'
axios.defaults.withCredentials = true
const baseurl = `http://127.0.0.1:3000`

export {
  axios,
  baseurl
}
