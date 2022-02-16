import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as Styles from "./rich-text-image.module.scss";

const RichTextImage = ({image, description, title}) => {
  return (
    <div className={Styles.root}>
      <GatsbyImage
        image={getImage(image)}
        alt={description}
      />
      <div className={Styles.description}>
        {description}
      </div>
    </div>
  )
};

export default RichTextImage;
