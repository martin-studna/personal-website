import React from "react"
import "./About.css"

const about = props => (
  <div className="about">
    <div className="about-items">
      <div className="about-title" data-aos="fade-up">
        About
      </div>
      <div className="about-text" data-aos="fade-up" data-aos-delay="100">
        Hello, my name is Martin Studna. I am a freelance computer scientist and
        contractor interested in Computer Vision and Artificial Intelligence. I
        am currently finishing my bachelor degree in Computer Science from
        Faculty of Mathematics and Physics, Charles University in Prague.
      </div>
      <div className="about-text" data-aos="fade-up" data-aos-delay="200">
        Futhermore, I work as a part-time contractor in IBM where I focus on
        chatbot development. Additionaly, I have also some personal contracts
        with my clients.
      </div>
    </div>
  </div>
)

export default about
