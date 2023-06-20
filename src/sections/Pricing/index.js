import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import imgAbout from "assets/images/app/pp.webp";
import comIcon from "assets/images/app/community_icon.png";
import axios from "axios";
import { useInView } from 'react-intersection-observer';
import styled from "styled-components";


import PricingSectionWrapper from "./pricingSection.style";
import Select from "react-select";
import { m, useAnimation } from "framer-motion";
import Modal from "../../reusecore/Modal";

var Options = [
  { value: "Ressources humaines", label: "Ressources humaines", guide: "Appuyez sur Continuer si vous êtes un responsable RH ou équivalent. Merci de noter que cet email fera objet d'une demande d'entrevue avec notre responsable des comptes clients" },
  { value: "Employee", label: "Employé", guide: "Merci de noter qu'en envoyant cet e-mail, vous exprimez votre intérêt pour eProgram auprès de votre responsable des ressources humaines." },
];

const customStyles = {
  control: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    height: 50,
    marginBlock: "0.6rem",
    border: isFocused ? "1px solid #74ACFE" : "none",
    display: "flex",
    borderRadius: "10px",
    alignItems: "center",
    paddingLeft: "20px",
    backgroundColor: "white",
    fontSize: "15px",
    boxShadow: "rgba(206, 206, 206, 0.78) 0px 1px 23px -8px"
  }),
  placeholder: styles => ({
    ...styles,
    color: "#757575"
  }),
  singleValue: styles => ({
    ...styles,
    color: "black"
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    height: 50,
    border: "none",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    backgroundColor: isDisabled
      ? null
      : isSelected
        ? "#74ACFE"
        : isFocused
          ? "#d3e5ff"
          : null,
    color: isDisabled
      ? null
      : isSelected
        ? "white"
        : null,
    fontSize: "15px",
  }),
};

const OverlayContainer = styled.div`
background-color: rgba(0, 0, 0, 0.03);
top: 0;
bottom: 0;
left: 0;
right: 0;
display: flex;
position: absolute;
z-index: 9;
justify-content: center;
align-items: center;
h3 {
  color: ${props => props.theme.black}
}
.image {
    width: 200px
}
input {
    height: 45px;
    border:none;
    background: #fff;
    width: 100%;
    padding: 20px 30px;
    font-size: 15px;
    border-radius: 10px;
    box-shadow: rgba(206, 206, 206, 0.78) 0px 1px 23px -8px;
}
.email-card {
    z-index: 1;
    position: relative;
    width: 450px;
    text-align: justify;
    height: auto!important;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(206, 206, 206, 0.78) 0px 1px 23px -8px;
    justify-content: center;
    align-items: center;
    gap: 25px;
    min-height: 250px;
    border-radius: 7px;
    background-color: white!important;
}
.form {
    padding-inline: 10%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
}
.button {
    width: 100%!important
}
.flash {
    max-width: 95%;
    position: absolute;
    top: -90px;
    background-color:${props => props.theme.primaryLightColor};
    display: flex;
    flex-direction: row;
    gap: 5px;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding-inline: 20px;
    padding-block: 10px;
    border-radius: 7px;
    color: white;
    animation: fadeInOut;
}
.flash-success {
    background-color:${props => props.theme.green};

}
.flash-error {
    background-color:${props => props.theme.red};
    
}
.data-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-items: center;
    width: 100%;
}
.email-input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%
}
@media only screen and (max-width: 600px) {
    .email-card {
        width: 85%;
    }
    
}
@media only screen and (max-width: 400px) {
    .email-card {
        width: 90%;
    }
    
}
`;


const Pricing = ({ formMsg, setFormMsg }) => {
  const [selectOption, setSelectOption] = useState({ value: "Employee", label: "Employé" });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const JoinFormAnimation = useAnimation();
  const [ref, inView] = useInView();
  const [event, setEvent] = useState(null);



  const emailCheck = (email) => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    if (!isValid)
      setValidError("Email invalide");
    else {
      setLoading(true);
      axios.post(`${process.env.GATSBY_BACK_API}/email-check`, {
        email: email,
      })
        .then(response => {
          if (response.data.customers && response.data.customers.length) {
            if (response.data.customers[0]?.tags) {
              window.location.assign(`https://eprogram.store/?email=${email}&view=${response.data.customers[0]?.tags}`);
              setLoading(true);
              setOpen(false);
            }
          }
          else {
            axios.post(`${process.env.GATSBY_BACK_API}/company-check`, {
              email: email,
            })
              .then(response => {
                if (response.data[0]?.name) {
                  window.location.assign(`https://eprogram.store/account/register?email=${email}&view=${response.data[0]?.name}`);
                  setLoading(true);
                  setOpen(false);
                }
                else {
                  setOpen(false);
                  navigate("#pricing")
                }
              })
              .catch(error => {
                setReqError("company check error", error);
              });
          }
        })
        .catch(error => {
          setReqError("Api error", error)
        });
    }
  }

  const handleSubmit = async (event) => {
    // setLoading(true)
    event.preventDefault();
    event.persist();
    // const data = new FormData(event.target);
    if (event.target.checkValidity()) {
      setEvent(event);
      setOpen(true);
    } else {
      event.target.reportValidity();
    }
    // try {
    //   const res = await axios.post(`${process.env.GATSBY_BACK_API}/submit-form`, data);
    //   if (res.status === 200) {
    //     setLoading(false)
    //     console.log(res);
    //     event.target.reset();
    //   }
    // .then(response => {
    //     console.log(response);
    //     event.target.reset();
    //   })
    //   .catch(error => {
    //     console.error(error);
    //     event.target.reset();
    //   });

    // }
    // catch (e) {
    //   console.log(e);
    // }

    // fetch('/api/submit-form', {
    //   method: 'POST',
    //   body: data,
    // })
    // .then(response => {
    //   console.log('Success:', response);
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });
  }

  const sendConfirmation = async (event) => {
    setLoading(true);
    event.preventDefault();
    event.persist();
    const data = new FormData(event.target);
    const email = data.get('email');
    try {
      const res = await axios.post(`${process.env.GATSBY_BACK_API}/submit-form`, data);
      if (res.status === 200) {
        setLoading(false)
        setOpen(false);
        event.target.reset();
      }
    }
    catch (e) {
    }
  }

  const ConfirmationModal = ({ open, setOpen, onConfirm, event }) => {

    return (
      <OverlayContainer onClick={() => { setOpen(!open) }}>
        <div className="email-card" onClick={(e) => e.stopPropagation()}>
          {/* <div className='flash error'>error</div> */}
          <div className='data-container'>
            <div className="form">

              <h3>Rappel</h3>
              <div style={{ textAlign: "center" }}>{selectOption?.value === "Employee" ? "Merci de noter qu'en envoyant cet e-mail, vous exprimez votre intérêt pour eProgram auprès de votre responsable des ressources humaines." : "Merci de noter que cet email fera objet d'une demande d'entrevue avec notre responsable des comptes clients."}</div>
              <Button style={{ marginTop: "10px" }} className="button" onClick={(e) => { onConfirm(event) }}>
                {!loading ? <span>Envoyer</span> :
                  <span>Chargement...</span>
                }
              </Button>
            </div>
          </div>
        </div>
      </OverlayContainer>
    )

  }

  const ProjectsButtonVariants = {
    hidden: {
      opacity: 0,
      x: 20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        opacity: { ease: "linear" },
        delay: 0.1,
        duration: 0.5
      }
    }
  }

  useEffect(() => {
    // Get the query string from the URL hash
    const queryString = window.location.hash.substring(window.location.hash.indexOf('?') + 1);

    // Parse the query string into key-value pairs
    const params = new URLSearchParams(queryString);

    // Read the "msg" parameter
    const msg = params.get('msg');

    // Use the parameter value as needed
    if (msg == "success")
      setFormMsg("Merci de remplir le formulaire pour pouvoir prendre contact avec vous ou votre RH"); // Output: hawhaw
  }, []);

  useEffect(() => {
    if (inView) {
      JoinFormAnimation.start("visible");
      return () => JoinFormAnimation.stop;
    }
  }, [inView])

  return (
    <>
      <PricingSectionWrapper id="pricing">
        {open && <ConfirmationModal open={open} setOpen={setOpen} onConfirm={sendConfirmation} event={event} />}
        <Container fullWidthSM>
          <Row Vcenter={true}>
            <Col xs={12} sm={6}>
              <img loading="lazy"
                className="about-thumb"
                src={imgAbout}
                alt="This is about UNI-Prime"
              />
            </Col>
            <Col xs={12} lg={6} className="about-content-wrap">

              <m.div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} ref={ref} animate={JoinFormAnimation} initial="hidden" variants={ProjectsButtonVariants} className="pricing-block">
                {formMsg && <div className="flash flash-success">{formMsg}</div>}
                <SectionTitle
                  className="section-title"
                  leftAlign={true}
                  UniWidth="100%"
                >
                  <center>
                    <img loading="lazy" alt="Community icon" style={{ width: "50px" }} src={comIcon} />
                    <h3><span>Rejoignez
                      la communauté<br />eProgram</span>
                    </h3>
                    <div className="underline"></div>
                  </center>
                </SectionTitle>
                <div className="details-block">
                  {/* <div style={{textAlign: "center"}}>{selectOption?.value === "Employee" ? "Nous enverrons un email à votre RH pour lui suggérer nos offres et conventions" : "" }</div> */}
                  <form method="post" onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="domain-search-block">
                      <m.div
                        className="search-box">
                        <input type='text' placeholder='Nom et Prénom' name="name" required />
                        <input type='text' placeholder="Nom de l'entreprise" name="company" required />
                        <Select
                          value={selectOption}
                          placeholder="Fonction dans l'entreprise"
                          options={Options}
                          styles={customStyles}
                          onChange={(value) => {
                            setSelectOption(value)
                          }}
                        />
                        {selectOption?.value === "Employee" && <input type='email' placeholder='Email' name="email" required />}
                        {selectOption?.value === "Ressources humaines" && <input type='text' name="nbEmployees" placeholder="Nombre d'employés" required />}
                        <input type='email' placeholder='Email RH' name="emailRh" required />
                        <input type='text' placeholder='Numéro de téléphone' name="telephone" required />
                        <Button type="submit" style={{ width: "100%", marginTop: "20px" }}>{selectOption?.value === "Ressources humaines" ? "Je rejoins eProgram" : "Envoyer un email à mon RH"}</Button>
                      </m.div>
                    </div>
                  </form>
                </div>
              </m.div>
            </Col>
          </Row>
        </Container>
      </PricingSectionWrapper>
    </>
  );
};

export default Pricing;
