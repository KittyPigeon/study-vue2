import axios from 'axios'
import { Message } from 'element-ui'
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'http://192.168.1.10:3000'

axios.interceptors.request.use((config) => {
  config.headers.token = localStorage.getItem('token')
  config.headers.Authorization = localStorage.getItem('token')
  config.headers.ContentType = 'application/json'
  return config
})

axios.interceptors.response.use(
  (res) => {

    // 此处异常处理
    if (res.data.code === 401) {
      Message({
        type: 'error',
        message: '登录过期，请重新登录！'
      })
      return Promise.reject(res)
    } else {
      return Promise.resolve(res)
    }
  },
  (error) => {}
)
export function httpGet(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: params })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export function httpPost(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'post',
      data
    })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
