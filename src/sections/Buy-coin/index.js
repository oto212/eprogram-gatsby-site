import React from "react"; 

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import VintageBox from "reusecore/VintageBox";

import WalletThumb from "assets/images/crypto/buyToken/wallet-image.png"; 
import particle1 from "assets/images/app/particle/05.png";
import particle2 from "assets/images/app/particle/06.png";

import BuyCoinWrapper from "./buyCoin.style";

const BuyCoin = () => {
  return (
    <BuyCoinWrapper>
      <img className="section__particle one" src={particle1} alt="img" />
      <img className="section__particle two" src={particle2} alt="img" />
      <Container fullWidthSM>
        <Row Vcenter={true} className="col-wrapper"> 
        <Col xs={12} sm={6} className="about-content-wrap">
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <h4> Get Coin </h4>
              <h2>
                <span>Buy crypto instantly</span> Easy Payment System with Appion.
              </h2>
            </SectionTitle>
            <p className="about-text text-one">
              One differences leaders, management-science so, best treat. Still
              problems upper and anger devoting out. With hiding their boss
              phase drops. A strenuous in ticket get write it by proposal.
            </p>
            <p className="about-text text-two">
              Thought. Road, clearly, and software the shreds sisters contract,
              luxury and fully here
            </p>
            <VintageBox right={true} vintageTwo={true} position="relative">
              <Button>Buy Coin</Button>
            </VintageBox>
          </Col>

          <Col xs={12} sm={6}>
            <img
              className="about-thumb"
              src={WalletThumb}
              alt="appion crypto landing"
            />
          </Col>
        </Row>
      </Container>
    </BuyCoinWrapper>
  );
};

export default BuyCoin;
