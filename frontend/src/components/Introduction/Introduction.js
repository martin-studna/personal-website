import React from "react"
import "./Introduction.css"

function introduction() {

  const scroll = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth'})
    
  }

  return (
  <div className="introduction">
    <div className="introduction-video-container">
      <video
        className="introduction-video"
        src={require("../../assets/Typing_dark_05_Videvo.mov")}
        autoPlay={true}
        loop={true}
        muted
      />
    </div>
    <div className="introduction-header-overlay" />
    <div className="introduction-items">
      <img
        data-aos="fade-up"
        className="introduction-image"
        src={require("../../assets/profile.jpg")}
        alt="Avatar"
        data-aos-delay="100"
      ></img>
      <div
        className="introduction-title"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Martin Studna
      </div>
      <div
        className="introduction-subtitle"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Computer Scientist
      </div>

      <button className="scroll-down-button" onClick={() => {scroll()}}>
        <div className="button-arrow"></div>
      </button>
    </div>
  </div>)

}

export default introduction
