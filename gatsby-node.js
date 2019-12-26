const path = require("path")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allContentfulPage {
          edges {
            node {
              name
              title
              path
              description
              keywords
              showInMenu
              template
            }
          }
        }
      }
    `
  )

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each markdown file.
  result.data.allContentfulPage.edges.forEach(({ node }) => {
    const { title, description, keywords, template } = node
    const pageTemplate = path.resolve(`src/templates/${template}.js`)

    createPage({
      path: node.path,
      component: pageTemplate,
      // In your blog post template's graphql query, you can use path
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        title,
        description,
        keywords,
      },
    })
  })
}
