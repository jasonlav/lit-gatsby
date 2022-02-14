import React from "react";
import * as Styles from "./posts-promotion.module.scss";
import Heading from "./heading";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const PostsPromotion = ({ posts, headingLevel }) => {
  return (
    <div>
      <Heading level={headingLevel}>Recent posts</Heading>
      <div className={Styles.posts}>
        {posts.map((post) => {
          return (
            <div className={Styles.post} key={post.id}>
              <Link to={post.path}>
                <GatsbyImage image={getImage(post.billboard)} alt={post.billboard.description}></GatsbyImage>
                <Heading level={headingLevel + 1}>{post.title}</Heading>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
};

PostsPromotion.propTypes = {
  headingLevel: PropTypes.number,
  posts: PropTypes.array
}

PostsPromotion.defaultProps = {
  headingLevel: 0,
  posts: []
}

export default PostsPromotion;