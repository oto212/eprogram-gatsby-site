import React from "react";

import { Container } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";

import ContactWrapper from "./contact.style";

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <SectionTitle className="section-title" UniWidth="55%">
        <h4>Keep in touch </h4>
        <h2>
          <span> Laissez nous vos coordonnées</span> nous vous contacterons.
        </h2>
      </SectionTitle>
      <Container>
        <form name="contactform" method="post" action="#">
          <input type="email" placeholder="Enter your Email" />
          <input type="text" placeholder="Nom de votre entreprise" />
          <input type="telephone" placeholder="Téléphone" />
          <Button> Contactez moi !</Button>
        </form>
      </Container>
    </ContactWrapper>
  );
};

export default Contact;
