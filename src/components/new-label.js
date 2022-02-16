import React from "react";
import * as Styles from "./new-label.module.scss";
import PropTypes from "prop-types";
import ClassNameArray, { ClassNamePropType } from "../scripts/class-name-array";

const NewLabel = ({ className }) => {
  return (
    <div className={ClassNameArray([Styles.newLabel, ...className])}>NEW</div>
  )
}

NewLabel.propTypes = {
  copy: PropTypes.string,
  className: ClassNamePropType
}

NewLabel.defaultProps = {
  copy: "New",
  className: [Styles.themeRed, Styles.sizeMd]
}

export default NewLabel;
export { Styles };
