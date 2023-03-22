import React from "react"
import "./input.scss"

const Input = ({
  children,
  label,
  className,
  name,
  type,
  placeholder,
  onChange,
  value,
  error,
}) => {
  return (
    <div className="Input">
      {label && <label className="Input__label">{label}</label>}
      <input
        className={className}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {error && <p className="Input__error">{error}</p>}
      {children && children}
    </div>
  )
}

export default Input
