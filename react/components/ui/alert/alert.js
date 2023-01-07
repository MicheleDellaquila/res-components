import React, { useEffect } from "react"
import "./alert.css"
import { enumTypeAlert } from "../../../utils/constants/enums"
import { BsX, BsFillCheckCircleFill } from "react-icons/bs"
import { FiAlertTriangle } from "react-icons/fi"
import { CiWarning } from "react-icons/ci"

const Alert = ({ type, message, onClose }) => {
  const styleAlert = enumTypeAlert[type]

  // close automatically alert after 3000ms
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (type && message) {
        onClose()
      }
    }, 3000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  // render icon
  const renderIcon = () => {
    switch (type.toLowerCase()) {
      case "error":
        return <FiAlertTriangle />

      case "info":
        return <CiWarning />

      default:
        return <BsFillCheckCircleFill />
    }
  }

  return (
    <div className={`Alert ${styleAlert}`}>
      <div className="Alert__container">
        <div className="Alert__left">
          {renderIcon()}
          <p className="Alert__message">{message}</p>
        </div>
        <span className="Alert__boxIcon" onClick={onClose}>
          <BsX />
        </span>
      </div>
    </div>
  )
}

export default Alert
