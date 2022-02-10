import React from "react";
import {graphql,Link} from 'gatsby';
import Layout from "../../components/layout";
import BlogPostPreview from "../../components/blog-post-preview";

const BlogIndex = ({ data }) => {
  return (
    <Layout>
      <h1>Blog</h1>
      <ul>
        {data.allContentfulBlog.nodes.map((node) => {
          return (
            <section key={node.id}>
              <BlogPostPreview post={node}></BlogPostPreview>
            </section>
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
      publishDate
    }
  }
}
`