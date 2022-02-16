import PropTypes from "prop-types";

export default function ClassNameArray(classes = []) {
  return (Array.isArray(classes)) ? classes.join(' ') : classes;
}

export const ClassNamePropType = PropTypes.oneOfType([PropTypes.array, PropTypes.string]);

export const ClassNameDefaultProps = [];
