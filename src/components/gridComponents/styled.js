import styled from 'styled-components'

const GridBetween = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: ${props => props.padding};
    margin: ${props => props.margin};

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const CardPrimary = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    height: 200px;
    background: rgb(255, 255, 255);
    border-radius: 4px;
    border: 1px solid rgb(238, 238, 238);
    box-shadow: 0px 8px 16px 0px rgba(170, 187, 187, 0.5);
    padding: ${props => props.padding};
    margin: ${props => props.margin};

    @media (max-width: 768px) {
        margin-bottom: 24px;
  }
`

const TitleCard = styled.h3`
    text-transform: uppercase;
    font-weight: 600;
    color: ${props => props.color};
    font-family: 'Nunito', arial;
    font-size: 32px;
    margin: 0;
    padding: 0;
`

const InfoCard = styled.p`
    text-transform: uppercase;
    font-weight: 600;
    color: ${props => props.color};
    font-family: 'Nunito', arial;
    font-size: 24px;
    margin: 0;
    padding: 0;
`





export { GridBetween, CardPrimary, TitleCard,InfoCard }