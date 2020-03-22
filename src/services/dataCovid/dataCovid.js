import axios from 'axios'

const getCasesForCountries = async country => {
    try {
      const response = await axios.get(
        `https://coronavirus-19-api.herokuapp.com/countries/${country}`,
      )
      console.log(response.data);
    } catch (e) {
      return null
    }
  }
  
  export { getCasesForCountries }