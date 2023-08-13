const React = require("react");
require("./spinner.scss");
const PropTypes = require("prop-types");

const Spinner = ({ style, size, variant }) => {
  const className = `Spinner Spinner--${size} Spinner--${variant}`;

  return <div role='spinner' style={style} className={className} />;
};

Spinner.propTypes = {
  style: PropTypes.object,
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]).isRequired,
};

module.exports = Spinner;
