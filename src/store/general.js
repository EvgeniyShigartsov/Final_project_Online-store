export const DOMAIN = 'https://intense-reaches-12245.herokuapp.com/api'

export const getHeaders = () => ({
  Authorization: localStorage.getItem('token'),
  'Content-Type': 'application/json'
})