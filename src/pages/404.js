import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";



const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Page introuvable" />
    <h2>La page demandée n'existe pas </h2>
  </Layout>
)

export default NotFoundPage;
