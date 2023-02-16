const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return graphql(
        `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___title],order: DESC }
          limit: 100000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                slug
                title
                number
                program
              }
            }
          }
        }
      } 
    `
    ).then(result => {
        if (result.errors) {
            throw result.errors
        }

        const posts = result.data.allMarkdownRemark.edges

        posts.forEach((post, index) => {
            const previous = index === posts.length - 1 ? null : posts[index + 1].node
            const next = index === 0 ? null : posts[index - 1].node

            createPage({
                path: post.node.fields.slug,
                component: path.resolve('./src/components/blog/blog-post.js'),
                context: {
                    slug: post.node.fields.slug,
                    previous,
                    next,
                },
            })
        })

        // Create blog post list pages
        const postsPerPage = 100;
        const numPages = Math.ceil(posts.length / postsPerPage);

        Array.from({ length: numPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/` : `/${i + 1}`,
                component: path.resolve('./src/components/blog/blog-list.js'),
                context: {
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    numPages,
                    currentPage: i + 1
                },
            });
        });
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}
