import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8080'
  //   baseURL: 'https://lucky-elk-pleat.cyclic.cloud'
})

export default instance
