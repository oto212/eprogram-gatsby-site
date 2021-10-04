import React from "react"
import { Link } from "gatsby"

import { Container, Row, Col } from "reusecore/Layout"
import SectionTitle from "reusecore/SectionTitle"
import VintageBox from "reusecore/VintageBox"
import Button from "reusecore/Button"

import icon1 from "assets/images/crypto/integration/payment.png"
import icon2 from "assets/images/crypto/integration/licensing.png"
import icon3 from "assets/images/crypto/integration/encrypted.png"
import icon4 from "assets/images/crypto/integration/checkmark.png"

import Icon from "assets/images/app/integrations/arrow.png"

import SeftyItemWrapper from "./seftySection.style"

const Sefty = () => {
  return (
    <SeftyItemWrapper>
      <Container>
        <Row Vcenter={true}>
          <Col xs={12} sm={6}>
            <div className="sefty__block__wrap">
              <div className="sefty__block">
                <div className="sefty__block__inner">
                  <img src={icon1} alt="appion sefty" />
                  <h3>Secured Payment</h3>
                  <p>More</p>
                  <Link to="#">
                    <img src={Icon} alt="appion app" />
                  </Link>
                </div>
                <div className="sefty__block__inner">
                  <img src={icon2} alt="appion sefty" />
                  <h3>License</h3>
                  <p>More</p>
                  <Link to="#">
                    <img src={Icon} alt="appion app" />
                  </Link>
                </div>
              </div>
              <div className="sefty__block right">
                <div className="sefty__block__inner">
                  <img src={icon3} alt="appion sefty" />
                  <h3>Encrypted</h3>
                  <p>More</p>
                  <Link to="#">
                    <img src={Icon} alt="appion app" />
                  </Link>
                </div>
                <div className="sefty__block__inner">
                  <img src={icon4} alt="appion sefty" />
                  <h3>KYC Verification</h3>
                  <p>More</p>
                  <Link to="#">
                    <img src={Icon} alt="appion app" />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} className="sefty-content-wrap">
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <h4>Safe & Secure</h4>
              <h2>
                <span>Manage Wallet </span> perfect sefty With Appion.
              </h2>
            </SectionTitle>
            <p className="sefty-text">
              One differences leaders, management-science so, best treat. Still
              problems upper and anger devoting out. With hiding their boss
              phase drops. A strenuous in ticket get write it by proposal.
            </p>
            <VintageBox right={true} vintageTwo={true} position="relative">
              <Button className="sefty-btn">Learn More</Button>
            </VintageBox>
          </Col>
        </Row>
      </Container>
    </SeftyItemWrapper>
  )
}

export default Sefty
