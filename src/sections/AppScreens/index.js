import React from "react";
import { Link } from "gatsby"
import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import { SlickSlider, SliderItem } from "reusecore/SlickSlider";

import image1 from "assets/images/app/app-screen/01.png";
import image2 from "assets/images/app/app-screen/02.png";
import image3 from "assets/images/app/app-screen/03.png";
import image4 from "assets/images/app/app-screen/04.png";
import particle1 from "assets/images/app/particle/09.png";
import particle2 from "assets/images/app/particle/10.png";
import particle3 from "assets/images/app/particle/11.png";
import particle4 from "assets/images/app/particle/13.png";

import AppScreenSectionWrapper from "./appScreenSection.style";

const AppScreens = () => {
  const thumbs = [image1, image2, image3, image4];
  const settings = {
    customPaging: function(i) {
      return (
        <a>
          <img src={thumbs[i]} alt="img" />
        </a>
      );
    },
    infinite: true,
    autoplay: true,
    dots: true,
    className: "app__screen__slider",
    dotsClass: "slick-dots slick-thumb",
    centerPadding: "100px",
    centerMode: true,
    slidesToShow: 1,
    speed: 500,
    infinite: true,

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          centerPadding: "280px"
        }
      },
      {
        breakpoint: 912,
        settings: {
          slidesToShow: 3,
          centerPadding: "80px"
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerPadding: "50px"
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px"
        }
      }
    ]
  };
  return (
    <AppScreenSectionWrapper>
      <div className="app-screen-one-block">
        <img className="section__particle one" src={particle1} alt="img" />
        <img className="section__particle two" src={particle2} alt="img" />
        <img className="section__particle four" src={particle4} alt="img" />
        <Container>
          <Row>
            <Col className="app-screen-content-block" xs={12} lg={6}>
              <div className="app__screen__conent">
                <SectionTitle
                  className="section-title"
                  leftAlign={true}
                  UniWidth="100%"
                >
  
                  <h2>
                    B??n??ficiez d???une gestion int??gr??e de vos <span>conventions </span>
                  </h2>
                </SectionTitle>
                <Button>Demandez une d??mo</Button>
              </div>
            </Col>
            <Col className="app-screen-slider-block" xs={12} lg={6}>
              <SlickSlider {...settings}>
                <SliderItem key={"1"}>
                  <img src={image1} alt="img" />
                </SliderItem>
                <SliderItem key={"2"}>
                  <img src={image2} alt="img" />
                </SliderItem>
                <SliderItem key={"3"}>
                  <img src={image3} alt="img" />
                </SliderItem>
                <SliderItem key={"4"}>
                  <img src={image4} alt="img" />
                </SliderItem>
              </SlickSlider>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="app-screen-two-block">
        <Container>
          <Row>
            <Col className="app-screen-content-block" offsetMd={6} md={6}>
              <SectionTitle
                  className="section-title"
                  leftAlign={true}
                  UniWidth="100%"
                >
                  {" "}
               
                  <h2>
                  B??n??ficiez d???une gestion int??gr??e de vos conventions
                    </h2>

                </SectionTitle>
                <p>Pour r??server leur prochain voyage, ??quiper leur cuisine ou s???offrir un cadeau high-tech, donnez ?? vos collaborateurs l???acc??s ?? une plateforme globale pour g??rer les conventions de A ?? Z. </p>
                <div className="btn-group">
                 <Link to="#pricing">
                  <Button className="btn-outline one">
                    Demandez une d??mo
                  </Button></Link>
                  <Link to="https://eprogram.store/account/login">
                  <Button className="btn-outline two">
                    Connectez vous
                  </Button></Link>
                </div>
            </Col>
          </Row>
        </Container>
    </div>
    </AppScreenSectionWrapper>
  );
};

export default AppScreens;
