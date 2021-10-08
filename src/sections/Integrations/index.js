import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import VintageBox from "reusecore/VintageBox";


import Icon from "assets/images/app/integrations/arrow.png";
import Client from "sections/Client";
import IntegrationItemWrapper from "./integrationSection.style";
import { FcShop, FcGraduationCap, FcLandscape, FcBusiness } from "react-icons/fc";
const Integrations = () => {
  return (
    <IntegrationItemWrapper id="integrations">
      <Container>
        <Row Vcenter={true}>
          <Col xs={12} sm={6}>
            <div className="integration__block__wrap">
              <div className="integration__block">
                <div className="integration__block__inner">
                  
                  <h3><FcShop/> Store</h3>
                  <p>Tous le nécessaire pour votre Maison, Voiture, ou équipement,Jeux et jouets ...</p>

                </div>
                <div className="integration__block__inner">
                  
                  <h3><FcLandscape/> eTravel</h3>
                  <p>Des hôtels et logements de vacances dans tous le Maroc à prix conventionné</p>

                </div>
              </div>
              <div className="integration__block right">
                <div className="integration__block__inner">
                  
                  <h3><FcGraduationCap/> Services</h3>
                  <p>Assurances, Crédits, Immobilier , Culture, Scolarité ... </p>

                </div>
                <div className="integration__block__inner">
                  
                  <h3><FcBusiness/> Vos conventions</h3>
                  <p> Digitalisation du process de déploiement de <span> vos conventions </span>  existantes </p>

                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} className="integration-content-wrap">
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              

              <h2>
              Plus de  <span>50  </span> marques partenaires allant jusqu'à <span>-40%  </span>
              </h2>
            </SectionTitle>
            <p className="integration-text">
            eProgram donne accès à des offres exclusives sur plus de 50 marques partenaires, soit un catalogue de plus de 1 800 produits (électroménager, High-Tech, téléphonie, jouets, cosmétique, …) et une large gamme de services, allant de la réservation d’hôtels à l’assurance. 

            </p>
            <VintageBox
              right={true}
              vintageTwo={true}
              position="relative"
            >
              <Button className="integration-btn">Demandez le catalogue</Button>
            </VintageBox>
          </Col>
        </Row>
        <Client />
      </Container>
    </IntegrationItemWrapper>
  );
};

export default Integrations;
