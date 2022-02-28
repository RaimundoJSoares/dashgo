const axios = require('axios').default;

export const api = axios.create({
  baseURL: 'http://localhost:3000/api'
})