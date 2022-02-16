import React from "react";
import { Link, graphql } from "gatsby";
import { DateTime } from "luxon";
import * as Styles from "./blog-preview-full.module.scss";
import Heading from "./heading";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import NewLabel, { Styles as NewLabelStyles } from "./new-label";
import PropTypes from "prop-types";
import ClassNameArray from "../scripts/class-name-array";

const BlogPreviewFull = ({ post, headingLevel }) => {
  let publishDate = DateTime.fromISO(post.publishDate);

  return (
    <div className={ClassNameArray([Styles.root])}>
      <Link to={post.path}>
        <GatsbyImage image={getImage(post.billboard)} alt={post.billboard.description}></GatsbyImage>
      </Link>
      <Heading level={headingLevel} className={Styles.title}>
        <Link to={post.path}>{post.title}</Link> {post.new && <NewLabel className={[NewLabelStyles.sizeMd, NewLabelStyles.themeBlue]}></NewLabel>}
      </Heading>
      <time className={Styles.publishDate} dateTime={post.publishDate}>{publishDate.toLocaleString(DateTime.DATE_FULL)}</time>
    </div>
  )
};

BlogPreviewFull.propTypes = {
  headingLevel: PropTypes.number,
  post: PropTypes.object.isRequired
};

BlogPreviewFull.defaultProps = {
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

export default BlogPreviewFull;
