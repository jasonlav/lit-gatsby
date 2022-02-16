import React from "react";
import * as Styles from "./new-label.module.scss";
import PropTypes from "prop-types";
import ClassNameArray from "../scripts/class-name-array";
import FindStyles from "../scripts/find-styles";

const NewLabel = ({ modifiers }) => {
  return (
    <div className={ClassNameArray([Styles.newLabel, ...FindStyles(Styles, modifiers)])}>NEW</div>
  )
}

NewLabel.propTypes = {
  copy: PropTypes.string,
  modifiers: PropTypes.array,
  className: PropTypes.any
}

NewLabel.defaultProps = {
  copy: "New",
  modifiers: ["theme-red", "size-md"],
  className: null
}

export default NewLabel;
