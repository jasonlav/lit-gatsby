import React from "react";
import {graphql,Link} from 'gatsby';
import Layout from "../../components/layout";
import BlogPostPreview from "../../components/blog-post-preview";

const BlogIndex = ({ data }) => {
  return (
    <Layout>
      <h1>Blog</h1>
      <div>
        {data.allContentfulBlog.nodes.map((node) => {
          return (
            <section key={node.id}>
              <BlogPostPreview post={node} headingLevel={2}></BlogPostPreview>
            </section>
          )
        })}
      </div>
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
      billboard {
        description
        gatsbyImageData(width: 300)
      }
    }
  }
}
`