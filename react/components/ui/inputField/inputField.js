import React from "react"
import "./inputField.css"

const InputField = ({
  children,
  label,
  className,
  name,
  type,
  placeholder,
  onChange,
  value,
  errorMessage,
}) => {
  return (
    <div className="InputField">
      {label && <label className="InputField__label">{label}</label>}
      <input
        className={className}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {errorMessage && <p>{errorMessage}</p>}
      {children && children}
    </div>
  )
}

export default InputField
