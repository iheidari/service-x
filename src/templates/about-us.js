import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

const AboutUs = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.title} description={pageContext.description} />
      <h1>{pageContext.title}</h1>
    </Layout>
  )
}
export default AboutUs
