import React from "react";
import { Link } from "gatsby";
import { DateTime } from "luxon";
import * as Styles from "./blog-post-preview.module.scss";
import Heading from "./heading";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogPostPreview = ({ post, headingLevel }) => {
  let publishDate = DateTime.fromISO(post.publishDate);

  return (
    <div className={Styles.blogPostPreview}>
      {post.new && <div className={Styles.newLabel}>NEW</div>}
      <GatsbyImage image={getImage(post.billboard)} alt={post.billboard.description}></GatsbyImage>
      <Heading level={headingLevel} className={Styles.title}>
        <Link to={"/blog/" + post.slug}>{post.title}</Link>
      </Heading>
      <time className={Styles.publishDate} dateTime={post.publishDate}>{publishDate.toLocaleString(DateTime.DATE_FULL)}</time>
    </div>
  )
};

export default BlogPostPreview;