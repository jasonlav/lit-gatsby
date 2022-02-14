import React  from "react";
import {graphql,Link} from 'gatsby';
import * as Styles from "./{contentfulBlog.slug}.module.scss";
import { DateTime } from "luxon";
import Heading from "../../components/heading";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from '@contentful/rich-text-types'
import PostsPromotion from "../../components/posts-promotion";

const BlogPost = ({data, params, pageContext}) => {
  let post = data.post;
  let recentPosts = data.recentPosts.nodes;
  let publishDate = DateTime.fromISO(post.publishDate);

  return (
    <div className={Styles.root}>
      <Link to="/blog" className={Styles.back}>Back to blog</Link>
      <GatsbyImage image={getImage(post.billboard)} alt={post.billboard.description} className={Styles.billboard} />
      <Heading level={1}>{post.title}</Heading>
      <time dateTime={post.publishDate}>{publishDate.toLocaleString(DateTime.DATE_FULL)}</time>
      {(post.minimumAge && post.maximumAge) && <div>Recommended age {post.minimumAge} - {post.maximumAge}</div>}
      {renderRichText(post.body, {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const { gatsbyImageData, description } = node.data.target;
            return (
              <GatsbyImage
                image={getImage(gatsbyImageData)}
                alt={description}
              />
            )
          }
        }
      })}
      <hr />
      <PostsPromotion headingLevel={2} posts={recentPosts}></PostsPromotion>
    </div>
  )
}

export default BlogPost;

export const query = graphql`
  query ($id: String) {
    post: contentfulBlog(id: {eq: $id}) {
      id
      title
      publishDate
      minimumAge
      maximumAge
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(width: 800)
            __typename
          }
        }
      }
      billboard {
        description
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    recentPosts: allContentfulBlog(
      filter: {id: {ne: $id}}
      sort: {order: DESC, fields: publishDate}
    ) {
      nodes {
        id
        title
        path: gatsbyPath(filePath: "/blog/{contentfulBlog.slug}")
        billboard {
          gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1.5)
          description
        }
      }
    }
  }
`