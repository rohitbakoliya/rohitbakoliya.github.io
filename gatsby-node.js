const path = require('path');
const slugify = require('./src/components/Utils/slugify');

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type !== `MarkdownRemark`) return;

    const fileNode = getNode(node.parent);
    const actualSlug = slugify(node.frontmatter.title);

    //{major-projects or blogs}
    const { sourceInstanceName } = fileNode;

    const slug = '/' + sourceInstanceName + '/' + actualSlug;

    //create slug node field
    createNodeField({
        node,
        name: `slug`,
        value: slug,
    });

    // adds a posttype field to extinguish between blogs and projects
    createNodeField({
        node,
        name: 'posttype',
        value: sourceInstanceName,
    });
};

//to make all formatterinfo fields optional
exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    const typeMarkdownRemarkFrontmatterInfoDefs = `
      type MarkdownRemarkFrontmatterInfo {
        idea: String
        tech: [String]
        links: [[String]]
      }
    `;
    createTypes(typeMarkdownRemarkFrontmatterInfoDefs);
};

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        id
                        fields {
                            slug
                            posttype
                        }
                    }
                }
            }
        }
    `);

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.fields.posttype === 'major-projects') {
            createPage({
                path: node.fields.slug,
                component: path.resolve(`./src/templates/project-template.js`),
                context: {
                    // Data passed to context is available in page queries as GraphQL variables.
                    id: node.id,
                },
            });
        }
    });
};
