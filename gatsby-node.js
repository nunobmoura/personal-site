const path = require('path')

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "ContentfulProject") {
    const slug = node.title.replace(/\s/g, "-").toLowerCase()
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve('src/pages/projects/postTemplate.js')
  const res = await graphql(`
    query {
      allContentfulProject {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  
  res.data.allContentfulProject.edges.forEach((edge) => {
    createPage({
      component: postTemplate,
      path: `/projects/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug
      }
    })
  });
}
