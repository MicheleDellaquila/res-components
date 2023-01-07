import React from "react"
import "./backdrop.scss"

const ModalBackdrop = ({ children }) => {
  return <div className="Backdrop">{children}</div>
}

export default ModalBackdrop
