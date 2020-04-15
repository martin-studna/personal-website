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
        <Skillbar id="1" skill="C#" percent="70%" color="#30e3ca" />
        <Skillbar id="2" skill="Java" percent="50%" color="#30e3ca" />
        <Skillbar id="3" skill="Javascript" percent="60%" color="#30e3ca" />
        <Skillbar id="4" skill="C/C++" percent="45%" color="#30e3ca" />
        <Skillbar id="5" skill="Kotlin" percent="60%" color="#30e3ca" />
        <Skillbar id="6" skill="Python" percent="40%" color="#30e3ca" />
        {/*<Skillbar id="7" skill="Docker" percent="70%" color="green" />
        <Skillbar id="8" skill="Android" percent="70%" color="green" />
        <Skillbar id="9" skill="React" percent="70%" color="green" />
        <Skillbar id="10" skill="React Native" percent="70%" color="green" />
        <Skillbar id="11" skill="Unix Administration" percent="70%" color="green" />
        <Skillbar id="12" skill="NodeJs" percent="70%" color="green" />
        <Skillbar id="13" skill="ASP .NET" percent="70%" color="green" />
        <Skillbar id="14" skill="NodeJs" percent="70%" color="green" />
        <Skillbar id="15" skill="OpenCV" percent="70%" color="green" /> */}
      </div>
    </div>
  </div>
);

export default skills;
