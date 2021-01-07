const slugify = require('./src/components/Utils/slugify');

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type !== `MarkdownRemark`) return;

    const fileNode = getNode(node.parent);
    const actualSlug = slugify(node.frontmatter.title);

    //{major-projects or blogs}
    const { sourceInstanceName } = fileNode;

    const slug = '/' + sourceInstanceName + '/' + actualSlug + '-' + node.id;

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

//TODO: create pages