const React = require("react");
require("./button.scss");
const PropTypes = require("prop-types");

const Button = ({ disabled, style, size, variant, onClick, children }) => {
  const className = `Btn Btn--${variant} Btn--${size}`;

  return (
    <button
      style={style}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  style: PropTypes.object,
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary", "outline"])
    .isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

module.exports = Button;
