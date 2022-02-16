import React from "react";
import { Link, graphql } from "gatsby";
import { DateTime } from "luxon";
import * as Styles from "./blog-post-preview-full.module.scss";
import Heading from "./heading";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import NewLabel from "./new-label";

const BlogPostPreviewFull = ({ post, headingLevel }) => {
  let publishDate = DateTime.fromISO(post.publishDate);

  return (
    <div className={Styles.blogPostPreview}>
      <Link to={post.gatsbyPath}>
        <GatsbyImage image={getImage(post.billboard)} alt={post.billboard.description}></GatsbyImage>
      </Link>
      <Heading level={headingLevel} className={Styles.title}>
        <Link to={post.gatsbyPath}>{post.title}</Link> {post.new && <NewLabel></NewLabel>}
      </Heading>
      <time className={Styles.publishDate} dateTime={post.publishDate}>{publishDate.toLocaleString(DateTime.DATE_FULL)}</time>
    </div>
  )
};

export const query = graphql`
fragment BlogPostPreviewFull on ContentfulBlog {
  title
  id
  slug
  publishDate
  new
  gatsbyPath(filePath:"/blog/{contentfulBlog.slug}")
  billboard {
    description
    gatsbyImageData(width: 900)
  }
}
`;

export default BlogPostPreviewFull;
