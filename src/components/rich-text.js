import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types";
import * as Styles from "./rich-text.module.scss";
import RichTextImage from "./rich-text-image";
import PropTypes from "prop-types";

const RichText = ({ body }) => {
  return (
    <div className={Styles.root}>
      {renderRichText(body, {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const { gatsbyImageData, description, title } = node.data.target;
            return (
              <RichTextImage image={gatsbyImageData} description={description} title={title} />
            )
          }
        }
      })}
    </div>
  )
};

RichText.propTypes = {
  body: PropTypes.any.isRequired
};

export default RichText;
