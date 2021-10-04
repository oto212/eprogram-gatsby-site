import React from "react"
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Navigation from "sections/Navigation"
import BlogPage from "sections/Blog-grid"
import Footer from "sections/Footer"

import { GlobalStyle } from "sections/app.style"
import theme from "theme/blog/themeStyles"

const BlogGridPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Appion Gatsby Home" />
      <Navigation />
      <BlogPage />
      <Footer/>
    </Layout>
  </ThemeProvider>
)
export default BlogGridPage
