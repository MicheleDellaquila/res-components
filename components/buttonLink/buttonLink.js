import React from "react";
import "./buttonLink";
import PropTypes from "prop-types";
import clsx from "clsx";

const ButtonLink = ({ className, href, size, variant, children }) => {
  const styleBtnLink = `ButtonLink ButtonLink--${variant} ButtonLink--${size}`;

  return (
    <a className={clsx(styleBtnLink, className && className)} href={href}>
      {children}
    </a>
  );
};

ButtonLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary", "outline"])
    .isRequired,
  children: PropTypes.node.isRequired,
};

export default ButtonLink;
