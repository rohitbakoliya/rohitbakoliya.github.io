const path = require('path');
const slugify = require('./src/components/Utils/slugify');

const POST_TYPE = {
    BLOGS: 'blogs',
    PROJECTS: 'projects',
};

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type !== `MarkdownRemark`) return;

    const fileNode = getNode(node.parent);
    const actualSlug = slugify(node.frontmatter.title);

    //{projects or blogs}
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

    if (sourceInstanceName === POST_TYPE.PROJECTS) {
        // this to sort the projects with their respective file name `00x--title`
        const fileIndex = +fileNode.name.substr(0, 3);

        createNodeField({
            node,
            name: 'fileIndex',
            value: fileIndex,
        });
    }
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
    const projectsTemplate = path.resolve(`./src/templates/project-template.js`);

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
        if (node.fields.posttype === POST_TYPE.PROJECTS) {
            createPage({
                path: node.fields.slug,
                component: projectsTemplate,
                context: {
                    // Data passed to context is available in page queries as GraphQL variables.
                    id: node.id,
                },
            });
        }
    });
};
