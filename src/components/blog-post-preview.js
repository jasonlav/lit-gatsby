import React from "react";
import { Link } from "gatsby";
import { DateTime } from "luxon";
import * as Styles from "./blog-post-preview.module.scss";

const BlogPostPreview = ({ post }) => {
  let publishDate = DateTime.fromISO(post.publishDate);

  return (
    <div className={Styles.blogPostPreview}>
      <Link to={"/blog/" + post.slug} className={Styles.title}>{post.title}</Link>
      <time className={Styles.publishDate} dateTime={post.publishDate}>{publishDate.toLocaleString(DateTime.DATE_FULL)}</time>
    </div>
  )
};

export default BlogPostPreview;