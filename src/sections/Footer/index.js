import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "reusecore/Layout";

import { FiMail, FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import logo from "assets/images/app/footer/logo_eprogram_white.png";
import particleOne from "assets/images/app/footer/footer-particle.png";

import FotterWrapper from "./footer.style";

const Footer = () => {
  return (
    <FotterWrapper>
      <img src={particleOne} className="section__particle one"  alt="appion app landing" />
      <Container>
        <Row>
        <Col xs={12} sm={6} lg={3}></Col>
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
                   +212 070 111 0990
                  </Link>
                </li>
              </ul>

              <ul className="social">
          
                <li>
                  <Link className="anchor" to="#">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    <FaLinkedinIn />
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <div className="footer-widgets">
              <h3 className="widget-title">Offres</h3>
              <ul className="widget-catagory">
                <li>
                  <Link className="anchor" to="#">
                    Web Developments
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    UX/UI Design
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Graphic Design
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Software Development
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
              <h3 className="widget-title">About Us</h3>
              <ul className="widget-catagory">
                <li>
                  <Link className="anchor" to="#">
                    Nous
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Nos clients
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    L'équipe
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Plans & Tarifs
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Nouveautés
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <div className="footer-widgets">
              <h3 className="widget-title">Nous trouver</h3>
              <p>
                250 avenue de Bordeaux, <br />
                Casablanca, Maroc <br />
                
              </p>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom">
          <ul className="footer-menu">
            <li>
              <Link className="anchor" to="#">
                Terms
              </Link>
            </li>
            <li>
              <Link className="anchor" to="#">
                Condition
              </Link>
            </li>
            <li>
              <Link className="anchor" to="#">
                Contact
              </Link>
            </li>
            <li>
              <Link className="anchor" to="#">
                Help
              </Link>
            </li>
          </ul>
          <p className="copyright-text">
            Copyright @
            <Link className="anchor" to="#">
              Novdisty 
            </Link>
             | Tous droits réservés 2022
          </p>
        </div>
      </Container>
    </FotterWrapper>
  );
};

export default Footer;
