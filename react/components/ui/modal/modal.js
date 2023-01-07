import React from "react"
import "./modal.scss"
import ModalBackdrop from "./backdrop/backdrop"

const Modal = ({ isVisible }) => {
  return (
    <Portal visible={isVisible}>
      <ModalBackdrop>
        <div className="Modal"></div>
      </ModalBackdrop>
    </Portal>
  )
}

export default Modal
