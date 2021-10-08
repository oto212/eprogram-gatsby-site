import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import VintageBox from "reusecore/VintageBox";

import imgAbout from "assets/images/app/about.png";
import particle1 from "assets/images/app/particle/05.png";
import particle2 from "assets/images/app/particle/06.png";

import AboutSectionWrapper from "./about.style";

const About = () => {
  return (
    <AboutSectionWrapper id="about">
      <img className="section__particle one" src={particle1} alt="img" />
      <img className="section__particle two" src={particle2} alt="img" />
      <Container fullWidthSM>
        <Row Vcenter={true}>
          <Col xs={12} sm={6}>
            <img
              className="about-thumb"
              src={imgAbout}
              alt="This is about UNI-Prime"
            />
          </Col>
          <Col xs={12} sm={6} className="about-content-wrap">
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              {" "}
            
              <h2>
                <span>Notre vocation,  
</span> prendre soin de vos collaborateurs.
              </h2>
            </SectionTitle>
            <p className="about-text text-one">
            eProgram est né de la volonté d’accompagner les dirigeants d’entreprise et les équipes ressources humaines à déployer efficacement les conventions d’entreprises. En plus de proposer un large catalogue d’offres et de services à prix exclusifs, nous prenons le relai pour négocier et mettre en place vos conventions cibles. 

            </p>
            <p className="about-text text-two">
            Nous collaborons avec plus de 64 grandes entreprises au Maroc. Plus de 320 000 collaborateurs bénéficient des avantages eProgram. 

            </p>
            
          </Col>
        </Row>
      </Container>
    </AboutSectionWrapper>
  );
};

export default About;
