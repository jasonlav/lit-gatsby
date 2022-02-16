import React from "react";
import * as Styles from "./blog-promotions.module.scss";
import Heading from "./heading";
import PropTypes from "prop-types";
import BlogPreviewNarrow from "./blog-preview-narrow";

const BlogPromotions = ({ posts, headingLevel, headingCopy }) => {
  return (
    <div className={Styles.root}>
      <Heading level={headingLevel}>{headingCopy}</Heading>
      <div className={Styles.posts}>
        {posts.map((post) => {
          return (
            <div className={Styles.post} key={post.id}>
              <BlogPreviewNarrow headingLevel={headingLevel + 1} post={post}></BlogPreviewNarrow>
            </div>
          )
        })}
      </div>
    </div>
  )
};

BlogPromotions.propTypes = {
  headingLevel: PropTypes.number,
  headingCopy: PropTypes.string.isRequired,
  posts: PropTypes.array
}

BlogPromotions.defaultProps = {
  headingLevel: 0,
  posts: []
}

export default BlogPromotions;
