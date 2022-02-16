import React from "react";
import * as Styles from "./posts-promotion.module.scss";
import Heading from "./heading";
import PropTypes from "prop-types";
import BlogPostPreviewNarrow from "./blog-post-preview-narrow";

const PostsPromotion = ({ posts, headingLevel, headingCopy }) => {
  return (
    <div>
      <Heading level={headingLevel}>{headingCopy}</Heading>
      <div className={Styles.posts}>
        {posts.map((post) => {
          return (
            <div className={Styles.post} key={post.id}>
              <BlogPostPreviewNarrow headingLevel={headingLevel + 1} post={post}></BlogPostPreviewNarrow>
            </div>
          )
        })}
      </div>
    </div>
  )
};

PostsPromotion.propTypes = {
  headingLevel: PropTypes.number,
  headingCopy: PropTypes.string.isRequired,
  posts: PropTypes.array
}

PostsPromotion.defaultProps = {
  headingLevel: 0,
  posts: []
}

export default PostsPromotion;
