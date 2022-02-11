import React, { Fragment } from "react";
import {graphql} from 'gatsby';
import Layout from "../../components/layout";
import BlogPostPreview from "../../components/blog-post-preview";

const BlogIndex = ({ data }) => {
  return (
    <Fragment>
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
    </Fragment>
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
      new
      gatsbyPath(filePath:"/blog/{contentfulBlog.slug}")
      billboard {
        description
        gatsbyImageData(width: 300)
      }
    }
  }
}
`