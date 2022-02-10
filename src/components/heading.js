import React from "react";
import PropTypes from "prop-types";

const Heading = ({ children, level, className }) => {
  const tagName = () => {
    return (level) ? `h${level}` : `div`
  }

  return React.createElement(tagName(), {className: className}, children)
};

Heading.propTypes = {
  level: PropTypes.number,
  className: PropTypes.any
}

Heading.defaultProps = {
  level: 0,
  className: null
}

export default Heading;