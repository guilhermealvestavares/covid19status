import React, { useState, useEffect } from "react"
import { reqByWorld, reqByAllCountries } from '../../services/dataCovid/dataCovid.js'
import { GridBetween, CardPrimary, TitleCard, InfoCard, GridWrap, CardSecondary } from '../gridComponents/styled.js'
import { H1, H2 } from '../HeadingTags/styled.js'

const InfosWorld = () => {
  const [worldData, setWorldData] = useState(null);
  const [allCountriesData, setAllCountriesData] = useState([]);

  useEffect(() => {
    reqByWorld().then(response => {
      const { data } = response;
      setWorldData(data);
    })

    reqByAllCountries().then(response => {
      const { data } = response;
      setAllCountriesData(data);

    })
    // console.log(allCountriesData);
    // allCountriesData.forEach((item) => console.log(item.country));
    //  for(var index = 0; index <allCountriesData.length;index++){
    //    console.log(allCountriesData[index].country);
    //  }

  },[]);

  return (
    <>
    <H1>Informações mundiais</H1>
    <GridBetween margin='64px 0 64px 0'>
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
    <H1>Informações por país</H1>
    <GridWrap margin="64px 0">
      {allCountriesData.map(({country,cases,deaths,recovered}, index) => (
      <CardSecondary key={index} padding="0 40px" margin="0 0 12px 0">
        <TitleCard fontSize="24px" margin="0 0 8px 0" color='#000000'>{country}</TitleCard>
        <GridBetween>
        <InfoCard fontSize="20px" color='#e74c3c'>
          {deaths}
        </InfoCard>
        <InfoCard fontSize="20px" color='#2ecc71'>
          {recovered}
        </InfoCard>
        <InfoCard fontSize="20px" color='#95a5a6'>
          {cases}
        </InfoCard>
        </GridBetween>
      </CardSecondary>
      ))}
    </GridWrap>
   
    </>
    
  )
}
  
  export default InfosWorld