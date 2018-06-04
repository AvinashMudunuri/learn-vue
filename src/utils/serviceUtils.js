import axios from 'axios'

export const invokeService = (options) => {
  const { url, method, headers } = options
  return axios({
    method,
    url,
    headers
  }).then((res) => {
    return res.data
  }).catch((err) => {
    throw err
  })
}
