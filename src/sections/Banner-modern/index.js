import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import VintageBox from "reusecore/VintageBox";
import Particle from "reusecore/Particle";

import { FaPlay, FaDownload } from "react-icons/fa";

import BannerSectionWrapper from "./banner.style";
import imgHero from "assets/images/app/hero/mobile-screen.png";
const BannerModern = () => {
  return (
    <BannerSectionWrapper>
      <Particle />
      <Container fullWidthSM>
        <Row Vcenter={true}>
          <Col sm={7} md={6}>
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              
              <h1>
              Employee’s perks & benefits,   <span>made simple.</span>
              </h1>
            </SectionTitle>
            <p>
            Nous avons la vocation d’aider les entreprises à prendre soin de leurs collaborateurs en leur donnant accès à la première plateforme marocaine d’e-commerce, dédiée aux conventions d’entreprise. Les collaborateurs ont ainsi un accès exclusif à plus de 10 000 produits et services, à prix réduits et livrés chez eux en toute sérénité.
            </p>
            <VintageBox right={true} vintageOne={true}>
              <Button className="banner-btn one">
                <FaDownload className="icon-left" />
                Watch the demo 
              </Button>
              <Button className="banner-btn two">
                <FaPlay className="icon-left" /> Know more about eProgram 

              </Button>
            </VintageBox>
          </Col>
          <Col sm={5} md={6}>
            <img
              src={imgHero}
              className="hero-img"
              alt="prime-app hero image"
            />
          </Col>
        </Row>
      </Container>
    </BannerSectionWrapper>
  );
};

export default BannerModern;
