import React, { useState, useEffect } from "react"
import { reqByWorld, reqByAllCountries } from '../../services/dataCovid/dataCovid.js'
import { GridBetween, CardPrimary, TitleCard, InfoCard } from '../gridComponents/styled.js'

const InfosWorld = () => {
  const [worldData, setWorldData] = useState(null);
  const [allCountriesData, setAllCountriesData] = useState(null);

  useEffect(() => {
    reqByWorld().then(response => {
      const { data } = response;
      setWorldData(data);
    })

    reqByAllCountries().then(response => {
      const { data } = response;
      setAllCountriesData(data);

     for(var index = 0; index <allCountriesData.length;index++){
       console.log(allCountriesData[index].country);
     }
    })
  },[]);

  return (
    <GridBetween margin='64px 0 0 0'>
      <CardPrimary>
        <TitleCard color='#e74c3c'>Mortes</TitleCard>
        <InfoCard color='#e74c3c'>
          {worldData && worldData.deaths}
        </InfoCard>
      </CardPrimary>

      <CardPrimary>
        <TitleCard color='#2ecc71'>Recuperados</TitleCard>
        <InfoCard color='#2ecc71'>
          {worldData && worldData.recovered}
        </InfoCard>
      </CardPrimary>

      <CardPrimary>
        <TitleCard color='#95a5a6'>Casos</TitleCard>
        <InfoCard color='#95a5a6'>
          {worldData && worldData.cases}
        </InfoCard>
      </CardPrimary>
    </GridBetween>
  )
}
  
  export default InfosWorld