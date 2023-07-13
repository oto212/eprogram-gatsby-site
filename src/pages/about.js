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



const About = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                <SEO title="À propos" />
                {modalOpen && <Modal open={modalOpen} setOpen={setModalOpen} />}
                <Navigation modalOpen={modalOpen} setModalOpen={setModalOpen} />
                <div style={{ minHeight: "100vh!important", padding: "150px 0 0 0", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <Container>
                        <SectionTitle style={{ fontSize: "20px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
                            className="section-title"
                            leftAlign={true}
                            UniWidth="100%"
                        >
                            <div className="title-container">
                                <div className='blog-title-container'>
                                    <h2>
                                        <span>À propos de nous</span>
                                    </h2>
                                </div>
                                <div className="underline underline-left"></div>
                            </div>
                        </SectionTitle>
                        <ContentMarkdown>
                            <p>
                                Chez eProgram, notre objectif est d'accompagner les entreprises dans la prise en charge de leurs collaborateurs en mettant à leur disposition la première plateforme marocaine de conventions digitalisées dédiée aux conventions d'entreprise. En tant que plateforme développée par la société Nov Disty, nous nous engageons à fournir des solutions de qualité et à simplifier la vie de nos clients.<br /><br />
                                Grâce à notre plateforme, les collaborateurs bénéficient d'un accès exclusif à plus de 10 000 produits et services à des prix réduits, livrés en toute sécurité à leur domicile. Que vous soyez une multinationale ou une PME, nous garantissons des tarifs conventionnés avantageux pour tous. <br /><br />
                                Notre équipe dévouée assure une assistance dédiée et un suivi rigoureux des fournisseurs. Du soutien quotidien à la gestion et au suivi des fournisseurs, nous prenons en charge l'intégralité du processus afin de garantir une expérience fluide et sans souci. <br /><br />
                                Chez eProgram, nous comprenons l'importance de la personnalisation et de l'alignement avec votre marque employeur. C'est pourquoi notre plateforme est entièrement personnalisable aux couleurs de votre entreprise, afin de faciliter son adoption par vos collaborateurs et d'en faire un levier pour votre marque.<br /><br />
                                Nous accordons également une grande importance à la transparence et à la responsabilité envers nos clients. C'est pourquoi nous fournissons régulièrement des rapports détaillés sur les indicateurs RH de vos programmes de conventions, afin de vous permettre d'en assurer le suivi et la surveillance. Ces rapports vous offrent une vision claire et vous permettent d'apporter les ajustements nécessaires, le cas échéant.<br />
                                En plus de nos services de conventions, nous proposons à vos collaborateurs des solutions de financement avantageuses pour faciliter leurs achats sur notre plateforme. Ainsi, ils peuvent bénéficier immédiatement des avantages sociaux tout en échelonnant leurs paiements.<br /><br />
                                En outre, notre système de récompenses vous permet de lancer des programmes de gratification pour vos collaborateurs, en leur laissant la liberté de choisir les achats qu'ils souhaitent effectuer directement sur la plateforme. Cette approche favorise la flexibilité et contribue à la satisfaction et à la motivation des collaborateurs.<br /><br />
                                Chez eProgram, nous sommes fiers de proposer une solution complète pour la gestion des conventions d'entreprise. Notre engagement envers nos clients se traduit par des tarifs avantageux, un soutien dédié, une personnalisation aux couleurs de votre entreprise, un suivi régulier des indicateurs RH et des avantages de financement. Rejoignez-nous dès aujourd'hui et offrez à vos collaborateurs une expérience exceptionnelle avec eProgram
                            </p>
                        </ContentMarkdown>
                    </Container>
                    <Footer style={{ position: "absolue!important", bottom: "0!important", left: "0!important" }} />
                </div>
            </Layout>
        </ThemeProvider>
    )
}

const ContentMarkdown = styled.div`
margin-bottom: 100px;
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

export default About;