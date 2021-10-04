import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import VintageBox from "reusecore/VintageBox";
import Particle from "reusecore/Particle";

import BannerSectionWrapper from "./banner.style";

const BannerDefault = () => {
  return (
    <BannerSectionWrapper>
      <Particle />
      <Container fullWidthSM>
        <Row Vcenter> 
          <Col sm={7} md={6} lg={7}>
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <h4>30% off for new users for 1 month</h4>
              <h1> 
                Easy to sell & exchange coins With <span>Appion</span>
              </h1>
            </SectionTitle>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
              minim veniam quis nostrud exercitation.
            </p>
            <VintageBox right={true} vintageOne={true}>
              <Button className="banner-btn one">
                Get in Touch
              </Button>
              <Button className="banner-btn two"> 
              Whitepaper
              </Button>
            </VintageBox>
          </Col>

          {/* <Col lg={5} md={6}>
            <img src={BannerThumb} alt="appion crypto"/>
          </Col> */}
        </Row>
      </Container>
    </BannerSectionWrapper>
  );
};

export default BannerDefault;
