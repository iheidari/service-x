import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Blog = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.title} description={pageContext.description} />
      <h3>{pageContext.title}</h3>
    </Layout>
  )
}
export default Blog
