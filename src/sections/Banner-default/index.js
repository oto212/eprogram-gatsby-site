import React,{useState} from "react";
import { navigate } from "gatsby"
import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import VintageBox from "reusecore/VintageBox";
import Particle from "reusecore/Particle";
import ModalVideo from 'react-modal-video'
import { FaPlay, FaDownload } from "react-icons/fa";
import BannerSectionWrapper from "./banner.style";
import ModalvideoWrapper from "./modal.style";
const BannerDefault = () => {
  const [isOpen, setOpen] = useState(false);
  return ( 
    
    <BannerSectionWrapper>
      <Particle />
      <Container fullWidthSM>

        <Row>

          <Col sm={7} md={6} lg={7}>

            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
  <h1>
              Employee’s perks & benefits<br/>
 <span>made simple.</span>
              </h1>
            </SectionTitle>
            <ModalvideoWrapper>
            <React.Fragment>
              <ModalVideo channel='youtube' isOpen={isOpen} videoId="-RBOsSmk7H4" onClose={() => setOpen(false)} autoplay />
            </React.Fragment>
            </ModalvideoWrapper>
            <p>
            Nous avons la vocation d’aider les entreprises à prendre soin de leurs collaborateurs en leur donnant accès à la première plateforme marocaine de conventions digitalisées, dédiée aux conventions d’entreprise. Les collaborateurs ont ainsi un accès exclusif à plus de 10 000 produits et services, à prix réduits et livrés chez eux en toute sérénité.

            </p>

            <VintageBox right={true} vintageOne={true}>

              <Button className="banner-btn one" onClick={()=>{navigate("#pricing")}}>
            
                <FaDownload className="icon-left" />
                Rejoignez eProgram
             
              </Button>
       
              <Button className="banner-btn " onClick={()=> setOpen(true)} >
                <FaPlay className="icon-left" /> Voir la démo
              </Button>

            </VintageBox>

          </Col>

        </Row>
      
      </Container>
      
    </BannerSectionWrapper>
    
  );
};

export default BannerDefault;
