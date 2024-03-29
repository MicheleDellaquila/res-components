import React from "react";
import "./spinner.scss";
import PropTypes from "prop-types";

const Spinner = ({ style, size, variant, ...props }) => {
  const className = `Spinner Spinner--${size} Spinner--${variant}`;

  return <div role='spinner' style={style} className={className} {...props} />;
};

Spinner.propTypes = {
  style: PropTypes.object,
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]).isRequired,
};

export default Spinner;
