import React from "react";
import { Link, graphql } from "gatsby";
import { DateTime } from "luxon";
import * as Styles from "./blog-post-preview-full.module.scss";
import Heading from "./heading";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import NewLabel from "./new-label";
import PropTypes from "prop-types";

const BlogPostPreviewFull = ({ post, headingLevel }) => {
  let publishDate = DateTime.fromISO(post.publishDate);

  return (
    <div className={Styles.blogPostPreview}>
      <Link to={post.path}>
        <GatsbyImage image={getImage(post.billboard)} alt={post.billboard.description}></GatsbyImage>
      </Link>
      <Heading level={headingLevel} className={Styles.title}>
        <Link to={post.path}>{post.title}</Link> {post.new && <NewLabel></NewLabel>}
      </Heading>
      <time className={Styles.publishDate} dateTime={post.publishDate}>{publishDate.toLocaleString(DateTime.DATE_FULL)}</time>
    </div>
  )
};

BlogPostPreviewFull.propTypes = {
  headingLevel: PropTypes.number,
  post: PropTypes.object.isRequired
};

BlogPostPreviewFull.defaultProps = {
  headingLevel: 1
};

export const query = graphql`
fragment BlogPostPreviewFull on ContentfulBlog {
  title
  id
  slug
  publishDate
  new
  path: gatsbyPath(filePath:"/blog/{contentfulBlog.slug}")
  billboard {
    description
    gatsbyImageData(width: 900)
  }
}
`;

export default BlogPostPreviewFull;
