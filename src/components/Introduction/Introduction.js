import React from "react"
import "./Introduction.css"

const introduction = props => (
  <div className="introduction">
    <div className="introduction-items">
      <img
        className="introduction-image"
        src={require("../../assets/profile.jpg")}
        alt="Avatar"
      ></img>
      <div className="introduction-title">Martin Studna</div>
      <div className="introduction-subtitle">Computer Scientist</div>
    </div>
  </div>
)

export default introduction
