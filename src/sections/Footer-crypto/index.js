import React from "react";
import { Container } from "reusecore/Layout";
import logo from "assets/images/app/logo_eprogram_white.webp";
import FotterWrapper from "./footer.style";
import CalendarIcon from '../../assets/images/calendar.webp'
import { FaLinkedin, FaFacebook, FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi"


const Footer = () => {
  return (
    <FotterWrapper>
      <Container>
        <div className="footer-container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", flexDirection: "column" }}>
            <a href="/#">
              <img loading="lazy" className="logo" src={logo} alt="logo" />
            </a>
          </div>
          <div className="calendar-container" style={{ alignItems: "start", justifyContent: "center", gap: "5px", flexDirection: "column" }}>
            <span>Contactez nous :</span>
            {/* <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}><span><FaPhoneAlt style={{ marginRight: "5px" }} /> +212 772-878787</span></div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}><span><FiMail style={{ marginBottom: "-2px", marginRight: "5px" }} /> contact@eprogram.store</span></div> */}
            <div style={{ display: "flex", marginTop: "5px", flexDirection: "row", justifyContent: "start", alignItems: "center", gap: "10px" }}>
              <a href="https://wa.me/+212772878787?text=Hello" target="_blank"><span><FaPhoneAlt style={{ marginBottom: "-2px", marginRight: "5px", fontSize: "2rem" }} /></span></a>
              <a href="mailto:contact@eprogram.store" target="_blank"><span><FiMail style={{ marginBottom: "-2px", marginRight: "5px", fontSize: "2rem" }} /></span></a>
              <a href="https://www.linkedin.com/company/eprogram4perks/" target="_blank"><span><FaLinkedin style={{ marginBottom: "-2px", marginRight: "5px", fontSize: "2rem" }} /></span></a>
              <a href="https://web.facebook.com/eprogram.morocco" target="_blank"><span><FaFacebook style={{ marginBottom: "-2px", marginRight: "5px", fontSize: "2rem" }} /></span></a>
              <a href="https://instagram.com/eprogram01?igshid=Y2I2MzMwZWM3ZA==" target="_blank"><span><FaInstagram style={{ marginBottom: "-2px", marginRight: "5px", fontSize: "2rem" }} /></span></a>
            </div>
          </div>
          <div className="calendar-container" style={{ alignItems: "start", gap: "5px", flexDirection: "column" }}>
            {/* <span>Company :</span> */}
            <a href="/about"><span>À propos</span></a>
            <a href="/mentions"><span>Mentions Légales</span></a>
            <a href="/conditions"><span>Conditions générales d'utilisation</span></a>
            {/* <a href="/#faq"><span>FAQ's</span></a> */}
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", flexDirection: "column" }}>
            <a href="https://calendly.com/reda-ammagui/30min" rel="noreferrer" target="_blank">
              <div className="calendar-container">
                <img loading="lazy" alt="Calendar icon" src={CalendarIcon} />
                <span>Prenez rendez-vous avec notre account manager</span>
              </div>
            </a>
          </div>
        </div>
      </Container>
    </FotterWrapper >
  );
};

export default Footer;
