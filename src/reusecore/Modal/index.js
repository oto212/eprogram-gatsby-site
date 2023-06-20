import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import logo from "../../assets/images/app/logo_eprogram.webp";
import EligibilityImage from "../../assets/images/eligibility-icon.png";
import Button from "../../reusecore/Button";
import axios from "axios";
import { navigate } from "gatsby";

const OverlayContainer = styled.div`
background-color: rgba(0, 0, 0, 0.5);
width: 100vw;
height: 100vh;
display: flex;
position: fixed;
z-index: 999;
justify-content: center;
align-items: center;
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
    z-index: 9999;
    position: relative;
    margin-top: -5%;
    width: 65vw;
    max-width: 950px;
    aspect-ratio: 6/3;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 320px;
    border-radius: 7px;
    background-color: white!important;
}
.form {
    position: relative;
    padding-inline: 8%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
    font-size: 14px;
}
.first-text {
    font-size: 16px;
    font-weight: normal;
    color: ${props => props.theme.black}
}
.second-text {
    font-size: 13px;
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

.wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 40px;
  }
  
  .left-section {
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }
  
  .title {
    color: #74a9fb;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .description {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  
  .verify-btn {
    /* Add your button styles here */
  }
  
  .right-section {
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    padding-left: 0;
  }
  
  .image-container {
    background-color: #F2F2F2;
    width: 100%;
    height: 100%;
    border-radius: 0.375rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .image {
    object-fit: contain;
    // width: 80%;
  }
  .image-1 {
    object-fit: contain;
    width: 80%;
  }
@media only screen and (max-width: 1240px) {
    .email-card {
        width: 85%;
    }
    .form {
        font-size: 14px;
        padding-inline: 2rem;
        padding-block: 2rem;
    }
    .left-section {
        padding: 0rem;
      }
      .first-text {
        font-size: 14.5px;
    }
    .second-text {
        font-size: 13px;
    }
    
}
@media only screen and (max-width: 1000px) {
    .email-card {
        width: 85%;
        aspect-ratio: auto;
    }.right-section {
        display: none;
    }
    .form {
        font-size: 14px;
        padding-inline: 1.5rem;
        padding-block: 2rem;
    }
    .left-section {
        padding: 0rem;
      }
    
}
@media only screen and (max-width: 400px) {
    .email-card {
        width: 90%;
    }
    
}
`;

// {%if view == "webhelp-check"%}
// <script>
//   const form = document.getElementById("my_form");


//   form.addEventListener("submit", function(event) {
//     let email = null;
//     event.preventDefault(); // prevent form submission

//     const formData = new FormData(form); // create a new FormData object

//     // log the form data to the console
//     for (const [name, value] of formData.entries()) {
//       //console.log(`${name}: ${value}`);
//       if (name == "customer[email]")
//         email = `${value}`;
//     }
//     fetch(`https://eprogram-test-back.onrender.com/state-check`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ email: email })
//       })
//       .then(response => response.json())
//       .then(data => {
//           console.log(data)
//           if (data.status == "enabled" && data.tag)
//             window.location.replace(`https://eprogram.store/?email=${email}&view=${data.tag}&status=${data.status}`);
//           else if (data.status == "notFound" && data.tag)
//             window.location.replace( `https://eprogram.store/account/register?email=${email}&view=${data.tag}&error=${data.status}`);
//           else if (data.status == "invited" && data.tag)
//           {
//             document.getElementById('error').className = "alert alert--success";
//             document.getElementById('error').innerHTML = "Votre compte est déjà créé merci de contacter le numero +212 701-110990 sur whatsapp ou contact@eprogram.store afin d'activer votre compte";
//           }
//           else
//           {
//             window.location.replace( `https://eprogram.store/account/register`);
//           }
//           //if (data.customers && data.customers.length) {
//           //  console.log(data.customers);
//           //  document.getElementById('error').className = "alert alert--success";
//           //  document.getElementById('error').innerHTML = "Votre compte est créé merci de contacter le +212 701-110990 sur whatsapp ou contact@eprogram.store afin d'activer votre compte";
//           //  }
//           //else {
//           //  window.location.replace( `https://eprogram.store/account/register?email=${email}&view=webhelp&success=success`);
//           //}
//       })
//       .catch(error => console.error(error));
// });
// </script>
// {%endif%}

const Modal = ({ setFormMsg, setOpen }) => {
    const [email, setEmail] = useState("");
    const [reqError, setReqError] = useState(false);
    const [validError, setValidError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setReqError(null), 3000)
        return () => clearTimeout(timer);

    }, [reqError])

    const emailCheck = () => {
        const isValid = /\S+@\S+\.\S+/.test(email);
        setEmail(email);
        console.log(email);
        if (!isValid)
            setValidError("Email invalide");
        else {
            setLoading(true);
            axios.post('https://eprogram-test-back.onrender.com/state-check', { email: email }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    console.log(response.data)
                    let data = response.data;
                    setLoading(false);
                    if (data.status == "enabled" && data.tag)
                        window.location.assign(`https://eprogram.store/?email=${email}&view=${data.tag}&status=${data.status}`);
                    else if (data.status == "notFound" && data.tag)
                        window.location.assign(`https://eprogram.store/account/register?email=${email}&view=${data.tag}&error=${data.status}`);
                    else if (data.status == "invited" && data.tag) {
                        setReqError({ success: true, msg: "Votre compte est déjà créé, nous vous avons envoyé une invitation par Email pour l’activer" })
                    }
                    else {
                        setOpen(false);
                        navigate("#pricing");
                        setFormMsg("Merci de remplir le formulaire pour pouvoir prendre contact avec vous ou votre RH")

                    }
                    // Handle the response data here
                })
                .catch(error => {
                    console.log(error);
                    setReqError({ success: false, msg: "Veuillez réessayer plus tard ou communiquer avec le support" })
                    // Handle any errors here
                });
            // axios.post(`${process.env.GATSBY_BACK_API}/email-check`, {
            //     email: email,
            // })
            //     .then(response => {
            //         console.log(response.data);
            //         if (response.data.customers && response.data.customers.length) {
            //             if (response.data.customers[0]?.tags) {
            //                 window.location.assign(`https://eprogram.store/?email=${email}&view=${response.data.customers[0]?.tags}`);
            //                 setLoading(true);
            //                 setOpen(false);
            //             }
            //         }
            //         else {
            //             axios.post(`${process.env.GATSBY_BACK_API}/company-check`, {
            //                 email: email,
            //             })
            //                 .then(response => {
            //                     if (response.data[0]?.name) {
            //                         window.location.assign(`https://eprogram.store/account/register?email=${email}&view=${response.data[0]?.name}`);
            //                         setLoading(true);
            //                         setOpen(false);
            //                     }
            //                     else {
            //                         setOpen(false);
            //                         navigate("#pricing")
            //                     }
            //                 })
            //                 .catch(error => {
            //                     setReqError("company check error", error);
            //                 });
            //         }
            //     })
            //     .catch(error => {
            //         setReqError("Api error", error)
            //     });
        }
    }

    return (
        <OverlayContainer onClick={() => { setOpen(false) }}>
            <div className="email-card" onClick={(e) => e.stopPropagation()}>
                {/* <div className="wrapper"> */}
                <div className="left-section">
                    <div className="form">
                        {reqError && <div className={reqError.success ? "flash flash-success" : "flash flash-error"}>{reqError.msg}</div>}
                        <img loading="lazy" className="image" src={logo} alt="Logo eProgram" />
                        <span style={{ textAlign: "center" }}>
                            <span className="first-text">Merci de saisir votre adresse e-mail professionnelle afin de vérifier votre compte.</span>
                            <br />
                            <span className="second-text">Si votre compte est actif, vous serez redirigé(e) vers la page de connexion.
                                Sinon, si vous avez déjà créé un compte sans l'activer, vous recevrez un e-mail d'activation.
                                Dans le cas contraire, vous serez redirigé(e) vers la page d'enregistrement.</span>
                        </span>
                        <div className='email-input'>
                            <input type='text' placeholder='Email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            {validError && <span style={{ paddingLeft: "10px", fontSize: "14px", color: "red" }}>{validError}</span>}
                        </div>
                        <Button className="button" onClick={() => { emailCheck() }}>
                            {!loading ? <span>Vérifier mon éligibilité</span> :
                                <span>Chargement...</span>
                            }
                        </Button>
                    </div>
                </div>
                <div className="right-section">
                    <div className="image-container">
                        <img src={EligibilityImage} alt="Your Image" className="image-1" />
                    </div>
                </div>
                {/* </div> */}

                {/* {reqError && <div className='flash'>{reqError}</div>} */}
                {/* <div className='data-container'>
                    <img loading="lazy" className="image" src={logo} alt="Logo eProgram" />
                    <div className="form">
                        <span>Veuillez entrer votre Email</span>
                        <div className='email-input'>
                            <input type='text' placeholder='Email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            {validError && <span style={{ paddingLeft: "10px", fontSize: "14px", color: "red" }}>{validError}</span>}
                        </div>
                        <Button className="button" onClick={() => { emailCheck() }}>
                            {!loading ? <span>Vérifier mon éligibilité</span> :
                            <span>Chargement...</span>
                            }
                        </Button>
                    </div>
                </div> */}
            </div>
        </OverlayContainer>
    )

}
export default Modal;