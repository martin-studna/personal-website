import React from "react"
import "./Button.css"

const button = props => (
  <div className="button_cont" align="center">
    <a
      className="example_a"
      href={props.href}
      style={props.style}
      onClick={props.onClick}
    >
      {props.text}
    </a>
  </div>
)

export default button
