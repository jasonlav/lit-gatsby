import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as Styles from "./rich-text-image.module.scss";
import PropTypes from "prop-types";

const RichTextImage = ({image, description, title}) => {
  return (
    <div className={Styles.root}>
      <GatsbyImage
        image={getImage(image)}
        alt={description}
      />
      {description &&
        <div className={Styles.description}>
          {description}
        </div>
      }
    </div>
  )
};

RichTextImage.propTypes = {
  image: PropTypes.any.isRequired,
  description: PropTypes.string,
  title: PropTypes.string
}

export default RichTextImage;
