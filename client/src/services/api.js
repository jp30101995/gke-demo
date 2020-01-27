import axios from 'axios'

export default() => {
  return axios.create({
      baseURL: 'http://127.0.0.1:8081/',
      headers: {
        "Content-type": "application/json"
      }
  })
}
