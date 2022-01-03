import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import Counter from "reusecore/Counter";

import CounterSectionWrapper from "./counterSection.style";

const Counters = () => {
  return (
    <CounterSectionWrapper>
      <Container>
        <Row>
          <Col xs={12} sm={6} lg={3}>
            <div className="counter__item">
              <Counter end={60} suffix="+" />
              <p>Clients</p>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <div className="counter__item">
              <Counter end={400} suffix="k+" />
              <p>Employés adhérents</p>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <div className="counter__item">
              <Counter end={29} suffix="+" />
              <p>Conventions</p>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <div className="counter__item">
                <Counter end={25} suffix="M+"  />
              <p>Montant économisé  (dh)</p>
            </div>
          </Col>
        </Row>
      </Container>
    </CounterSectionWrapper>
  );
};

export default Counters;
