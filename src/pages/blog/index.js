import React from "react";
import {graphql,Link} from 'gatsby';
import Layout from "../../components/layout";

const BlogIndex = ({ data }) => {
  return (
    <Layout>
      <h1>Blog</h1>
      <ul>
        {data.allContentfulBlog.nodes.map((node) => {
          return (
            <li key={node.id}>
              <Link to={'/blog/' + node.slug}>{node.title}</Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default BlogIndex;

export const query = graphql`
query {
  allContentfulBlog {
    nodes {
      title
      id
      slug
    }
  }
}
`