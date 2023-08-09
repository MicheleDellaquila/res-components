import React from "react";
import "./spinner.scss";
import clsx from "clsx";
import PropTypes from "prop-types";

const Spinner = ({ className, size, variant }) => {
  const styleSpinner = `Spinner Spinner--${size} Spinner--${variant}`;

  return <div className={clsx(styleSpinner, className && className)} />;
};

Spinner.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]).isRequired,
};

export default Spinner;
