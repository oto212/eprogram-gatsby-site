import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";

import particle1 from "assets/images/app/particle/14.png";
import particle2 from "assets/images/app/particle/15.png";
import imgAbout from "assets/images/app/about.png";


import PricingSectionWrapper from "./pricingSection.style";

const Pricing = () => {
  return (
    <PricingSectionWrapper id="pricing">
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
           
            <div className="pricing-block">
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
            
            
              
               <center> <h3><span>Rejoignez
</span> la communauté eProgram</h3></center>
              
            </SectionTitle>
                <br/>
                <div className="details-block">
                 

                    <div className="domain-search-block">
              <div className="search-box">
                <input type='text' placeholder='Nom et Prénom' />
                <input type='text' placeholder="Nom de l'entreprise" />
                <input type='text' placeholder="Fonction dans l'entreprise" />
                <input type='text' placeholder='Email Professionnel' />
                <input type='telephone' placeholder='Numéro de téléphone'/>

              </div>
              <span >

Nombre d'employé dans l'entreprise
</span>
              <div className="domain-extention-block">

                <span className="org">
                  -50
                </span>
                <span className="net">
                  50-199
                </span>
                <span className="dev">
                  200-1999
                </span>
                <span className="xyz">
                  +2000
                </span>
              </div>
            </div>
                </div>
                <Button className="pricing-btn">Soumettre</Button>
              </div>


          </Col>
        </Row>
      </Container>
    </PricingSectionWrapper>
  );
};

export default Pricing;
