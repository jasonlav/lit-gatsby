import React from "react";
import {graphql} from 'gatsby';
import BlogPreviewFull from "../../components/blog-preview-full";

const BlogIndex = ({ data }) => {
  return (
    <div className={"content"}>
      <h1>Blog</h1>
      <div>
        {data.allContentfulBlog.nodes.map((node) => {
          return (
            <section key={node.id}>
              <BlogPreviewFull post={node} headingLevel={2}></BlogPreviewFull>
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default BlogIndex;

export const query = graphql`
query {
  allContentfulBlog {
    nodes {
      ...BlogPostPreviewFull
    }
  }
}
`
