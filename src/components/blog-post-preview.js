import React from "react";
import { Link } from "gatsby";
import { DateTime } from "luxon";
import * as Styles from "./blog-post-preview.module.scss";
import Heading from "./heading";

const BlogPostPreview = ({ post, headingLevel }) => {
  let publishDate = DateTime.fromISO(post.publishDate);

  return (
    <div className={Styles.blogPostPreview}>
      <Heading level={headingLevel} className={Styles.title}>
        <Link to={"/blog/" + post.slug}>{post.title}</Link>
      </Heading>
      <time className={Styles.publishDate} dateTime={post.publishDate}>{publishDate.toLocaleString(DateTime.DATE_FULL)}</time>
    </div>
  )
};

export default BlogPostPreview;