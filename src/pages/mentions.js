import React, { useState } from "react";
import { ThemeProvider } from 'styled-components';

import Layout from "../components/layout";
import theme from 'theme/app/themeStyles';
import SEO from "../components/seo";
import Navigation from 'sections/Navigation';
import Footer from 'sections/Footer-crypto';
import { GlobalStyle } from 'sections/app.style';
import Modal from '../reusecore/Modal/index';
import styled from "styled-components";
import SectionTitle from "../reusecore/SectionTitle";
import { Container } from "../reusecore/Layout"



const Mentions = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                <SEO title="Mentions Légales" />
                {modalOpen && <Modal open={modalOpen} setOpen={setModalOpen} />}
                <Navigation modalOpen={modalOpen} setModalOpen={setModalOpen} />
                <div style={{ minHeight: "100vh!important" ,padding: "150px 0 0 0", display: "flex", flexDirection: "column", justifyContent:"space-between"}}>
                    <Container>
                        <SectionTitle style={{ fontSize: "20px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
                            className="section-title"
                            leftAlign={true}
                            UniWidth="100%"
                        >
                            <div className="title-container">
                                <div className='blog-title-container'>
                                    <h2>
                                        <span>Mentions Légales</span>
                                    </h2>
                                </div>
                                <div className="underline underline-left"></div>
                            </div>
                        </SectionTitle>
                        <ContentMarkdown>
                            <p>
                                L'édition du site est assurée par la société <b>STE NOV DISTY</b>.<br />Son siège social est situé au 33, rue
                                Najib Mahfoud résidence art office 5eme étage Gauthier , Casablanca, Maroc.<br />
                                <b>Contact :</b> contact@eprogram.store 07 72 87 87 87
                            </p>
                        </ContentMarkdown>
                    </Container>
                    <Footer style={{position: "absolue!important", bottom: "0!important", left: "0!important"}} />
                </div>
            </Layout>
        </ThemeProvider>
    )
}

const ContentMarkdown = styled.div`
padding-bottom: 80px;
font-size: 18px;
margin-top: 0px;
text-align: justify;
h2, h3 {
    margin-top: 20px;
    margin-bottom: 10px;
}
img {
    display: block;
    margin-inline: auto;
}
ul {
    marggin: 0;
    padding-inline-start : 30px!important;
}
@media only screen and (max-width: 500px) {
    font-size: 15px;
    line-height: 22px;
    ul {
        marggin: 0;
        padding-inline-start : 22px!important;
    }
    h1 {
        font-size: 1.6em;
    }
    h2 {
        font-size: 1.4em;
    }
    h3 {
        font-size: 1.2em;
    }

}
`

export default Mentions;