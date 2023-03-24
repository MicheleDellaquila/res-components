import React, { useRef } from "react"
import "./toasts.scss"
import useToasts from "./hook/useToasts"
import Toast from "./toast/toast"

const Toasts = ({ list }) => {
  const listToast = useToasts(list)
  const ref = useRef()

  /* insert motion for enter left mode */

  // check if there aren't toast into list
  if (!listToast.length) return

  return (
    <div className="Toasts">
      {listToast?.map(toast => {
        return (
          <Toast
            ref={ref}
            key={toast.id}
            type={toast.type}
            message={toast.message}
          />
        )
      })}
    </div>
  )
}

export default Toasts
