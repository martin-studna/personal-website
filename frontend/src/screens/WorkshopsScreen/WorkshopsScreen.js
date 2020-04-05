import React, { Component } from "react"
import "./WorkshopsScreen.css"

export default class WorkshopsScreen extends Component {
  componentWillMount() {
    document.getElementById("loader").classList.add("hidden")
  }

  render() {
    return (
      <div className="workshops">
        <div className="workshops-items">
          <div className="workshops-title" data-aos="fade-up">
            Workshops
          </div>
          <div
            className="workshops-text"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            I have just started to make workshops on several topics from software development. I
            can show you how to make some processes in developing software more effective and mostly faster with nowadays tools like
            Docker, Git, Kubernetes and etc.
          </div>
          <div
            className="workshops-text"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Futhermore, I am also higly experienced with programming
            languages/frameworks like React Native, NodeJs, Java and .NET
          </div>
          <div className="workshops-images" 
          data-aos="fade-up"
            data-aos-delay="300"
          >
            <img className="workshops-image" alt="docker" src={require("../../assets/docker2.png")}/>
            <img className="workshops-image" alt="kubernetes" src={require("../../assets/kubernetes.png")}/>
            <img className="workshops-image" alt="git" src={require("../../assets/git.jpg")}/>
          </div>
        </div>
      </div>
    )
  }
}
