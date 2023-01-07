import React from "react"
import "./loader.scss"

const Loader = ({ width, height }) => {
  return (
    <div
      style={{
        width: width,
        height: height,
      }}
      className="Spinner"
    />
  )
}

export default Loader
