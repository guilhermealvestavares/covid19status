import axios from 'axios' 

const reqByCountries = (country) => {
  return axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${country}`)
}

const reqByWorld = () => {
  return axios.get(`https://coronavirus-19-api.herokuapp.com/all`)
}

const reqByAllCountries = () => {
  return axios.get(`https://coronavirus-19-api.herokuapp.com/countries`)
}
  
export { reqByWorld, reqByCountries, reqByAllCountries }