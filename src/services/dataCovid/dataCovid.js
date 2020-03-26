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

const flagCountries = () => {
  return axios.get(`https://restcountries.eu/rest/v2/all`)
}
  
export { reqByWorld, reqByCountries, reqByAllCountries, flagCountries }