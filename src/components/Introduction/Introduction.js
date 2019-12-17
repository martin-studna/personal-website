import React from "react"
import "./Introduction.css"

const introduction = props => (
  <div className="introduction">
    <div className="introduction-video-container">
      <video
        className="introduction-video"
        src={require("../../assets/Code_flythough_loop_01_Videvo.mov")}
        autoPlay={true}
        loop={true}
      />
    </div>
    <div className="introduction-header-overlay" />
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
