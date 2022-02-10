import React from "react";
import {graphql,Link} from 'gatsby';
import Layout from "../../components/layout";
import * as Styles from "../../components/blog-post-preview.module.scss";
import { DateTime } from "luxon";

const BlogPost = ({data}) => {
  let post = data.contentfulBlog;
  let publishDate = DateTime.fromISO(post.publishDate);

  return (
    <Layout>
      <Link to="/blog">Back to blog</Link>
      <h1>{post.title}</h1>
      <time className={Styles.publishDate} dateTime={post.publishDate}>{publishDate.toLocaleString(DateTime.DATE_FULL)}</time>
    </Layout>
  )
}

export default BlogPost;

export const query = graphql`
  query ($id: String) {
    contentfulBlog(id: {eq: $id}) {
      id
      title
      publishDate
    }
  }
`