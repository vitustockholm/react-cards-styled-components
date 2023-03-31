import React from "react";
import "../styles.css";
import styled from "styled-components";

const Section = styled.section`
  padding: 100px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
`;

const Title = styled.h2`
  font-size: 40px;
  text-align: center;
  margin-bottom: 60px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -15px;
`;

const Col = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 0 15px;
  margin-bottom: 60px;

  @media (min-width: 768px) {
    width: calc(33.33% - 30px);
    margin: 0 15px 60px;
  }
`;

const PricingCard = styled.div`
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 40px;
  text-align: center;
`;

const Header = styled.div`
  margin-bottom: 30px;
`;

const CardTitle = styled.h3`
  font-size: 28px;
  margin-bottom: 15px;
`;

const CardPrice = styled.p`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const Body = styled.div`
  margin-bottom: 30px;
`;

const FeaturesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Feature = styled.li`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 15px;
`;

const Footer = styled.div``;

const ChoosePlanButton = styled.button`
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 700;
  padding: 15px 35px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #0062cc;
  }
`;

function PricingSection() {
  return (
    // <section className="section section--default-padding pricing-section">
    //   <div className="container">
    //     <h2 className="section__title">Pricing</h2>
    //     <div className="row">
    //       <div className="col-lg-4 col-md-6">
    //         <div className="pricing-card">
    //           <div className="pricing-card__header">
    //             <h3 className="pricing-card__title">Basic</h3>
    //             <p className="pricing-card__price">$19</p>
    //           </div>
    //           <div className="pricing-card__body">
    //             <ul className="pricing-card__features">
    //               <li>Feature 1</li>
    //               <li>Feature 2</li>
    //               <li>Feature 3</li>
    //             </ul>
    //           </div>
    //           <div className="pricing-card__footer">
    //             <button className="btn btn--primary">Choose Plan</button>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-lg-4 col-md-6">
    //         <div className="pricing-card">
    //           <div className="pricing-card__header">
    //             <h3 className="pricing-card__title">Standard</h3>
    //             <p className="pricing-card__price">$39</p>
    //           </div>
    //           <div className="pricing-card__body">
    //             <ul className="pricing-card__features">
    //               <li>Feature 1</li>
    //               <li>Feature 2</li>
    //               <li>Feature 3</li>
    //               <li>Feature 4</li>
    //               <li>Feature 5</li>
    //             </ul>
    //           </div>
    //           <div className="pricing-card__footer">
    //             <button className="btn btn--primary">Choose Plan</button>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-lg-4 col-md-6">
    //         <div className="pricing-card">
    //           <div className="pricing-card__header">
    //             <h3 className="pricing-card__title">Premium</h3>
    //             <p className="pricing-card__price">$79</p>
    //           </div>
    //           <div className="pricing-card__body">
    //             <ul className="pricing-card__features">
    //               <li>Feature 1</li>
    //               <li>Feature 2</li>
    //               <li>Feature 3</li>
    //               <li>Feature 4</li>
    //               <li>Feature 5</li>
    //               <li>Feature 6</li>
    //               <li>Feature 7</li>
    //             </ul>
    //           </div>
    //           <div className="pricing-card__footer">
    //             <button className="btn btn--primary">Choose Plan</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <Section>
      <Container>
        <Title>Pricing</Title>
        <Row>
          <Col>
            <PricingCard>
              <Header>
                <CardTitle>Basic</CardTitle>
                <CardPrice>$19</CardPrice>
              </Header>
              <Body>
                <FeaturesList>
                  <Feature>Feature 1</Feature>
                  <Feature>Feature 2</Feature>
                  <Feature>Feature 3</Feature>
                </FeaturesList>
              </Body>
              <Footer>
                <ChoosePlanButton>Choose Plan</ChoosePlanButton>
              </Footer>
            </PricingCard>
          </Col>
          <Col>
            <PricingCard>
              <Header>
                <CardTitle>Standard</CardTitle>
                <CardPrice>$39</CardPrice>
              </Header>
              <Body>
                <FeaturesList>
                  <Feature>Feature 1</Feature>
                  <Feature>Feature 2</Feature>
                  <Feature>Feature 3</Feature>
                </FeaturesList>
              </Body>{" "}
              <Footer>
                <ChoosePlanButton>Choose Plan</ChoosePlanButton>
              </Footer>
            </PricingCard>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
export default PricingSection;
