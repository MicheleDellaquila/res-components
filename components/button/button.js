import React from "react";
import "./button.scss";
import PropTypes from "prop-types";
import clsx from "clsx";

const Button = ({ disabled, className, size, variant, onClick, children }) => {
  const styleBtn = `Btn Btn--${variant} Btn--${size}`;

  return (
    <button
      className={clsx(styleBtn, className && className)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary", "outline"])
    .isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
