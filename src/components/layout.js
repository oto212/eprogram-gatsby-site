
import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet";
import ScrollToTop from "react-scroll-to-top";
import FavIcon from "assets/images/favicon.png";
import { LazyMotion, domAnimation } from "framer-motion"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="pt" />
        <title>{`eProgram | Perks and Benefits`}</title>
        <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <meta name="facebook-domain-verification" content="1yklynjk4rdp0g9opb1gx60fjtlfng" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-GMLP7R1ESV"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GMLP7R1ESV');
        `}
      </script>
      </Helmet>
      <ScrollToTop smooth color="white" width="20px" height="20px" style={{ backgroundColor: "#74acfe", padding: "10px 5px 5px 5px" }} />
      <LazyMotion features={domAnimation}>
        {children}
      </LazyMotion>
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;
