import React from "react";
import "./buttonLink.scss";
import PropTypes from "prop-types";

const ButtonLink = ({ style, href, size, variant, children, ...props }) => {
  const className = `ButtonLink ButtonLink--${variant} ButtonLink--${size}`;

  return (
    <a style={style} className={className} href={href} {...props}>
      {children}
    </a>
  );
};

ButtonLink.propTypes = {
  style: PropTypes.object,
  href: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary", "outline"]).isRequired,
  children: PropTypes.node.isRequired,
};

export default ButtonLink;
