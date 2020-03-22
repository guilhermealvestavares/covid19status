import React from "react"
import { reqByWorld, reqByCountries } from '../../services/dataCovid/dataCovid.js'
import { GridBetween, CardPrimary, TitleCard, InfoCard } from '../gridComponents/styled.js'

const InfosWorld = ({ }) => (
  <>
  <GridBetween 
    margin='64px 0 0 0'
    onload={reqByWorld('all')}
  >
    <CardPrimary>
      <TitleCard color='#e74c3c'>Mortes</TitleCard>
      <InfoCard color='#e74c3c'>{reqByWorld.data}</InfoCard>
    </CardPrimary>

    <CardPrimary>
      <TitleCard color='#2ecc71'>Recuperados</TitleCard>
      <InfoCard color='#2ecc71'>95828</InfoCard>
    </CardPrimary>

    <CardPrimary>
      <TitleCard color='#95a5a6'>Casos</TitleCard>
      <InfoCard color='#95a5a6'>308000</InfoCard>
    </CardPrimary>
  </GridBetween>

  </>
  )
  
  export default InfosWorld