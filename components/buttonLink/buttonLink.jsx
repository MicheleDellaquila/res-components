const React = require("react");
require("./buttonLink.scss");
const PropTypes = require("prop-types");

const ButtonLink = ({ style, href, size, variant, children }) => {
  const className = `ButtonLink ButtonLink--${variant} ButtonLink--${size}`;

  return (
    <a style={style} className={className} href={href}>
      {children}
    </a>
  );
};

ButtonLink.propTypes = {
  style: PropTypes.object,
  href: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary", "outline"])
    .isRequired,
  children: PropTypes.node.isRequired,
};

module.exports = ButtonLink;
