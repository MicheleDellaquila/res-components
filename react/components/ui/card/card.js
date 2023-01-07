import React from "react"
import "./card.scss"

const Card = ({ className, children }) => {
  return <article className={`Card ${className}`}>{children}</article>
}

export default Card
