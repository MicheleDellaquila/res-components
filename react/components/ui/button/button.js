import React from "react"
import "./button.scss"
import { enumSizeBtn } from "../../../utils/constants/enums"

const Button = ({
  isDisabled,
  className,
  size,
  variant,
  type,
  onClick,
  children,
}) => {
  const styleBtn = `Btn--${enumSizeBtn[size]} Btn--${enumSizeBtn[variant]} ${className}`

  return (
    <button
      disabled={isDisabled}
      type={type}
      className={styleBtn}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
