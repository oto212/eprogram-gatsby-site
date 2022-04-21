import React from "react";
import { IconContext } from "react-icons";
import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";

import Icon1 from "assets/images/app/features/01.svg";
import Icon2 from "assets/images/app/features/02.svg";
import Icon3 from "assets/images/app/features/03.svg";
import Icon4 from "assets/images/app/features/04.svg";
import Icon5 from "assets/images/app/features/05.svg";
import Icon6 from "assets/images/app/features/06.svg";
import { BiWalletAlt } from "react-icons/bi";

import FeturesSectionWrapper from "./fetures.style";

const Features = () => {
  return (
    <FeturesSectionWrapper id="features">
      <Container fullWidthSM>
        <SectionTitle UniWidth="65%">
          <h2>
          Une plateforme <span>all-in-one</span> 
          </h2>
        </SectionTitle>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block v1">
              <div className="fetures-icon-block">
                <img src={Icon1} alt="img" />
              </div>
              <h3>Gestion externalisée et simplifiée des conventions
</h3>
              <p>
              Nous prenons en charge vos conventions de A à Z, de la négociation à la livraison des produits à vos collaborateurs. 

              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block v2">
              <div className="fetures-icon-block">
                <img src={Icon2} alt="img" />
              </div>
              <h3>Suivi fournisseurs et service clients dédié</h3>
              <p>
              Nos équipes coordonnent les flux avec les différents fournisseurs de produits et de service et accompagnent vos collaborateurs à travers un service clients dédié. 
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block v1">
              <div className="fetures-icon-block">
                <img src={Icon3} alt="img" />
              </div>
              <h3>Personnalisation de la plateforme aux couleurs de l'entreprise</h3>
              <p>
              Le design de la plateforme est personnalisable et s’habille aux couleurs de votre marque pour faciliter son adoption par vos collaborateurs et être un levier pour votre marque. 
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block v2">
              <div className="fetures-icon-block">
                <img src={Icon4} alt="img" />
              </div>
              <h3>Dashboard des metrics RH</h3>
              <p>
              Nous réalisons des reportings réguliers de vos programmes de conventions pour vous permettre leur suivi et mentoring. 
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block v1">
            <IconContext.Provider
      value={{
        color: "#ffffff",
        size: "0.5em",
        className: "fetures-icon-block",
      }}
    >
      <div>
        <BiWalletAlt />
      </div>
    </IconContext.Provider>
              
              <h3>Financement des avantages sociaux direct</h3>
              <p>
              Nous proposons à vos collaborateurs des solutions de financement avantageuses pour réaliser leurs achats en toute sérénité.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block v2">
              <div className="fetures-icon-block">
                <img src={Icon6} alt="img" />
              </div>
              <h3>Des prix réduits, pour tous.</h3>
              <p>
              Que vous soyez une multinationale ou une PME, vous bénéficiez des mêmes prix conventionnés sur notre catalogue de produits et services.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </FeturesSectionWrapper>
  );
};

export default Features;
