import axios from 'axios'
import React, {useState} from 'react'

const reqByCountries = (country) => {
  axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${country}`)
   .then(res => {
     const data = res.data;
     console.log(data);
     return data;
 })
}

const reqByWorld = () => {
axios.get(`https://coronavirus-19-api.herokuapp.com/all`)
.then(res => {
  const data = res.data;
  console.log(data);
  return data;
})
}
  
export { reqByWorld, reqByCountries }