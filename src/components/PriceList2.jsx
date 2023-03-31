import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const PricingSectionContainer = styled.section`
  padding: 60px 0;
  background-color: #f6f6f6;
`;

const PricingTitle = styled.h2`
  text-align: center;
  margin-bottom: 50px;
`;

const PricingRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PricingCard = styled.div`
  max-width: 350px;
  width: 100%;
  margin: 30px;
  padding: 30px;
  text-align: center;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: #ffffff;
`;

const PricingCardTitle = styled.h3`
  font-size: 28px;
  margin-bottom: 30px;
`;

const PricingCardPrice = styled.p`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const PricingCardList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 30px;

  li {
    margin: 15px 0;
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
      color: #4caf50;
    }
  }
`;

const PricingCardButton = styled.button`
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #5cb65f;
  }
`;

function PriceList2() {
  return (
    <PricingSectionContainer>
      <PricingTitle>Pricing</PricingTitle>
      <PricingRow>
        <PricingCard>
          <PricingCardTitle>Basic</PricingCardTitle>
          <PricingCardPrice>$19</PricingCardPrice>
          <PricingCardList>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              Feature 1
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              Feature 2
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              Feature 3
            </li>
          </PricingCardList>
          <PricingCardButton>Choose Plan</PricingCardButton>
        </PricingCard>
        <PricingCard>
          <PricingCardTitle>Standard</PricingCardTitle>
          <PricingCardPrice>$39</PricingCardPrice>
          <PricingCardList>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              Feature 1
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              Feature 2
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              Feature 3
            </li>
          </PricingCardList>
          <PricingCardButton>Choose Plan</PricingCardButton>
        </PricingCard>
      </PricingRow>
    </PricingSectionContainer>
  );
}
export default PriceList2;
