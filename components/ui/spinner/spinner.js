import React from "react"
import "./loader.scss"

const Loader = ({ size }) => {
  const className = `Spinner Spinner--${size}`

  return <div className={className} />
}

export default Loader
