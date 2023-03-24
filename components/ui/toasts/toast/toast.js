import React, { forwardRef } from "react"
import "./toast.scss"
import { renderIconMessage } from "../../../../utility/renderIconMessage"

const Toast = forwardRef(({ type, message }, ref) => {
  const typeMessage = type?.toLowerCase()

  return (
    <div ref={ref} className={`Toast Toast--${typeMessage}`}>
      <div className="Toast__wrapper">
        <span className={`Toast__icon Toast__icon--${typeMessage}`}>
          {renderIconMessage(type)}
        </span>
        <p className={`Toast__message Toast__message--${typeMessage}`}>
          {message}
        </p>
        <div className={`Toast__deadline Toast__deadline--${typeMessage}`} />
      </div>
    </div>
  )
})

export default Toast
