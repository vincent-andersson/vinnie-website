import React from 'react';
import { CardsContainer, CardsH1, CardsWrapper, Card, CardsIcon, CardsH2, CardsP } from './CardsElements';
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-6.svg';

const Cards = () => {
  return (
    <CardsContainer id="interests">
      <CardsH1>Interests</CardsH1>
      <CardsWrapper>
        <Card>
          <CardsIcon src={Icon1} />
          <CardsH2>Full Stack Development</CardsH2>
          <CardsP>Frontend development using React and Backend using Node to create a wonderful website.</CardsP>
        </Card>
        <Card>
          <CardsIcon src={Icon2} />
          <CardsH2>Trading Crypto and NFT</CardsH2>
          <CardsP>Gaining capitals by analyzing the market trends and graphs, and selling JPGs on the blockchain.</CardsP>
        </Card>
        <Card>
          <CardsIcon src={Icon3} />
          <CardsH2>Reselling Sneakers</CardsH2>
          <CardsP>Copping limited shoes at retail price and selling them at a higher price.</CardsP>
        </Card>
      </CardsWrapper>
    </CardsContainer>
  )
}

export default Cards
