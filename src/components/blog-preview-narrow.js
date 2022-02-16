import React from "react";
import { Link, graphql } from "gatsby";
import * as Styles from "./blog-preview-narrow.module.scss";
import Heading from "./heading";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PropTypes from "prop-types";
import ClassNameArray from "../scripts/class-name-array";

const BlogPreviewNarrow = ({ post, headingLevel }) => {
  return (
    <div className={ClassNameArray([Styles.root])}>
      <Link to={post.path}>
        <GatsbyImage image={getImage(post.billboard)} alt={post.billboard.description}></GatsbyImage>
      </Link>
      <Heading level={headingLevel} className={Styles.title}>
        <Link to={post.path}>{post.title}</Link>
      </Heading>
    </div>
  )
};

BlogPreviewNarrow.propTypes = {
  headingLevel: PropTypes.number,
  post: PropTypes.object.isRequired
};

BlogPreviewNarrow.defaultProps = {
  headingLevel: 1
};

export const query = graphql`
fragment BlogPostPreviewNarrow on ContentfulBlog {
  id
  title
  path: gatsbyPath(filePath: "/blog/{contentfulBlog.slug}")
  billboard {
    gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1.5)
    description
  }
}
`;

export default BlogPreviewNarrow;
export { Styles };
