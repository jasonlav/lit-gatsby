exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allContentfulBlog(sort: {order: DESC, fields: publishDate}, limit: 1) {
        nodes {
          slug
        }
      }
    }
  `);

  const slug = data.allContentfulBlog.nodes[0].slug;

  actions.createPage({
    path: `oldest-blog`,
    component: require.resolve("./src/pages/blog/{contentfulBlog.slug}.js"),
    context: {slug: slug}
  });
}