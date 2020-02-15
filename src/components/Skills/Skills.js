import React from "react";
import "./Skills.css";
import Skillbar from "../Skillbar/Skillbar";

const skills = props => (
  <div className="skills">
    <div className="skills-items">
      <div className="skills-title" data-aos="fade-zoom-in">
        Skills
      </div>
      <div className="skills-progress-bars">
        <Skillbar id="first" skill="C#"/>
        <Skillbar id="second" skill="Java"/>
        <Skillbar id="third" skill="Javascript"/>
        <Skillbar id="fourth" skill="C++"/>
      </div>
    </div>
  </div>
);

export default skills;
