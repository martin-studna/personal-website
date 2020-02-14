import React, { Component } from "react";
import "./ProjectScreen.css"

export default class ProjectScreen extends Component {
  render() {
    return (
      <div className="project-page">
        <div className="project-page-content">
          <div data-aos="fade-up" className="project-page-title">Projects</div>
          <div data-aos="fade-up" data-aos-delay="100" className="project-page-text">Still in progress</div>
        </div>
      </div>
    );
  }
}
