import React from "react";
import {graphql,Link} from 'gatsby';
import Layout from "../../components/layout";

const BlogPost = ({data}) => {
  return (
    <Layout>
      <Link to="/blog">Back to blog</Link>
      <h1>{data.contentfulBlog.title}</h1>
    </Layout>
  )
}

export default BlogPost;

export const query = graphql`
  query ($id: String) {
    contentfulBlog(id: {eq: $id}) {
      id
      title
    }
  }
`