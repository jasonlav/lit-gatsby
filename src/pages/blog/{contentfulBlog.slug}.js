import React from "react";
import {graphql,Link} from 'gatsby';
import Layout from "../../components/layout";
import * as Styles from "./{contentfulBlog.slug}.module.scss";
import { DateTime } from "luxon";
import Heading from "../../components/heading";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogPost = ({data}) => {
  let post = data.contentfulBlog;
  let publishDate = DateTime.fromISO(post.publishDate);

  return (
    <Layout>
      <div className={Styles.root}>
        <Link to="/blog" className={Styles.back}>Back to blog</Link>
        <GatsbyImage image={getImage(post.billboard)} alt={post.billboard.description} className={Styles.billboard} />
        <Heading level={1}>{post.title}</Heading>
        <time className={Styles.publishDate} dateTime={post.publishDate}>{publishDate.toLocaleString(DateTime.DATE_FULL)}</time>
        {(post.minimumAge && post.maximumAge) && <div>Recommended age {post.minimumAge} - {post.maximumAge}</div>}
      </div>
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
      minimumAge
      maximumAge
      billboard {
        description
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`