import React, { useState, useEffect } from "react"
import { reqByWorld, reqByAllCountries, flagCountries } from '../../services/dataCovid/dataCovid.js'
import { GridBetween, CardPrimary, TitleCard, InfoCard, GridWrap, CardSecondary,Search } from '../gridComponents/styled.js'
import { H1, H2 } from '../HeadingTags/styled.js'

const InfosWorld = () => {
  const [worldData, setWorldData] = useState(null);
  const [allCountriesData, setAllCountriesData] = useState([]);
  const [allCountriesFiltred, setAllCountriesFiltred] = useState([]);
  const [flagAllCountries, setFlagAllCountries] = useState(null);
  const [searchCountry, setSearchCountry] = useState('');
  

  useEffect(() => {
    reqByWorld().then(response => {
      const { data } = response;
      setWorldData(data);
    })

    reqByAllCountries().then(response => {
      const { data } = response;
      setAllCountriesData(data);
      setAllCountriesFiltred(data);
    })

    flagCountries().then(response => {
      const { data } = response;
      setFlagAllCountries(data);
    })

  },[]);
  
  const getCountry = event => {
    setSearchCountry(event.target.value);

    const filterCountries = allCountriesData.filter(({country}) => {
      const countryFormated = country.toLowerCase();
      const searchFormated = searchCountry.toLowerCase();

      return countryFormated.includes(searchFormated);
    })
    
    console.log(searchCountry);

    
    setAllCountriesFiltred(filterCountries);
  }

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
       
          <Search 
            data-search
            className="form-control"
            type="text"
            placeholder="digite aqui para filtrar o país desejado"
            value={searchCountry}
            onChange={getCountry}
          />
        
        <GridWrap margin="64px 0">
          {allCountriesFiltred.map(({country,cases,deaths,recovered}, index) => 
          (
          <CardSecondary key={index} name={country} data-item="item" padding="0 40px" margin="0 0 12px 0">
            <TitleCard fontSize="24px" margin="0 0 8px 0" color='#000000'>
              {country}
            </TitleCard>
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
  