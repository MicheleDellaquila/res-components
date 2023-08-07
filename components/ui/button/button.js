import React from "react";
import "./button.scss";

export const Button = ({
  isDisabled,
  size,
  variant,
  type,
  onClick,
  children,
}) => {
  const className = `Btn Btn--${size} Btn--${variant}`;

  return (
    <button
      disabled={isDisabled}
      type={type}
      className={className}
      onClick={onClick}>
      {children}
    </button>
  );
};
