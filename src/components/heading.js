import React from "react";
import PropTypes from "prop-types";
import ClassNameArray, {ClassNamePropType, ClassNameDefaultProps} from "../scripts/class-name-array";

const Heading = ({ children, level, className }) => {
  const tagName = () => {
    return (level) ? `h${level}` : `div`
  }

  return React.createElement(tagName(), {className: ClassNameArray(className)}, children)
};

Heading.propTypes = {
  level: PropTypes.number,
  className: ClassNamePropType
}

Heading.defaultProps = {
  level: 0,
  className: ClassNameDefaultProps
}

export default Heading;
