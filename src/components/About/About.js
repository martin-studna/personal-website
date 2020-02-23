import React from "react"
import "./About.css"

const about = props => (
  <div id="scroll" className="about">
    <div className="about-items">
      <div className="about-title" data-aos="fade-up">
        About
      </div>
      <div  className="about-text" data-aos="fade-up" data-aos-delay="100">
        Hello, my name is Martin Studna. I am a freelance computer scientist and
        contractor interested in Computer Vision and Artificial Intelligence. I
        am currently finishing my bachelor degree in Computer Science from
        Faculty of Mathematics and Physics, Charles University in Prague.
      </div>
      <div className="about-text" data-aos="fade-up" data-aos-delay="200">
        Moreover, I have a part-time job in IBM where I focus on
        chatbot development. On top of that, I have smaller contracts which include development of mobile applications.
      </div>
    </div>
  </div>
)

export default about
