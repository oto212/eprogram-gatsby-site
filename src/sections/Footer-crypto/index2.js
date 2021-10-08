import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "reusecore/Layout";

import { FiMail, FiPhoneCall } from "react-icons/fi";
import {  FaTwitter, FaLinkedinIn } from "react-icons/fa";

import logo from "assets/images/app/footer/footer-logo.png"; 

import FotterWrapper from "./footer.style";

const Footer = () => {
  return (
    <FotterWrapper> 
      <Container>
        <Row>
          <Col xs={12} sm={6} lg={3}>
            <div className="footer-widgets first">
              <Link className="footer-logo" to="#">
                <img src={logo} alt="logo" />
              </Link>
              <ul className="info">
                <li>
                  <FiMail />
                  <Link className="anchor" to="#">
                    contact@eprogram.ma
                  </Link>
                </li>
                <li>
                  <FiPhoneCall />
                  <Link className="anchor" to="#">
                    +212770707070
                  </Link>
                </li>
              </ul>

              <ul className="social">
 
                <li>
                  <Link className="anchor" to="https://www.linkedin.com/company/eprogram4perks/">
                    <FaLinkedinIn />
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <div className="footer-widgets">
              <h3 className="widget-title">Services</h3>
              <ul className="widget-catagory">
                <li>
                  <Link className="anchor" to="#">
                    Accès RH
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Assistance dédiée
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <div className="footer-widgets">
              <h3 className="widget-title">À propos</h3>
              <ul className="widget-catagory">
                <li>
                  <Link className="anchor" to="#">
                    Nous rejoindre
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Notre équipe
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Plans & Pricing
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Vendre sur eProgram
                  </Link>
                </li>

              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <div className="footer-widgets">
              <h3 className="widget-title">Notre Addresse</h3>
              <p>
                250 avenue de Bordeaux, <br />
                Casablanca, Maroc , Terre <br />
                
              </p>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom">
          <ul className="footer-menu">
            <li>
              <Link className="anchor" to="#">
                Termes légaux
              </Link>
            </li>
            <li>
              <Link className="anchor" to="#">
                C.G.V
              </Link>
            </li>
            <li>
              <Link className="anchor" to="#">
                Contact
              </Link>
            </li>
            <li>
              <Link className="anchor" to="#">
                Aide
              </Link>
            </li>
          </ul>
          <p className="copyright-text">
            Copyright @
            <Link className="anchor" to="#">
              Novdisty 
            </Link>
             | Tous droits réservés 2021
          </p>
        </div>
      </Container>
    </FotterWrapper>
  );
};

export default Footer;
