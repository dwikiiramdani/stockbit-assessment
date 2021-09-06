import axios from 'axios'

const client = axios.create({
  baseURL: 'http://www.omdbapi.com/?apikey=faf7e5bb&',
  timeout: Number(50000)
})

client.interceptors.request.use(
  async response => {
    const originalConfig = response
    try {
      return originalConfig
    } catch (error) {
      return Promise.reject(error)
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default client
