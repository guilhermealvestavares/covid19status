import React, { useState } from "react"
import axios from 'axios'


const reqByCountries = (country) => {
  axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${country}`)
    .then(res => {
      const data = res.data;
      console.log(data);
  })
}

const InfosWorld = ({ }) => (
    <p onClick={reqByCountries('brazil')}>clique aqui</p>
  )
  
  export default InfosWorld