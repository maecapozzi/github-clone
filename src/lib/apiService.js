import axios from 'axios'

export const getData = url => {
  return axios.get(url)
    .then(response => response)
}
