import axios from 'axios'

let baseURL

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  baseURL = "https://localhost:44382/api"
} else {
  baseURL = "https://localhost:44339/api" // here should be prod link
}

export default axios.create(
{
    baseURL: baseURL
})