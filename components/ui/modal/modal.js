import React from "react"
import "./modal.scss"

const Modal = ({ isVisible, children }) => {
  return (
    <Portal visible={isVisible}>
      <div className="Modal--backdrop">
        <div className="Modal">
          {children}
        </div>
      </div>
    </Portal>
  )
}

export default Modal
