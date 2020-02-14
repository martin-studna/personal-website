import React, { Component } from "react"
import "./WorkshopsScreen.css"

export default class WorkshopsScreen extends Component {
  componentDidMount() {
   // document.getElementById("toolbar").style.background = "black"
   // document.getElementById("toolbar").style.position = "relative"
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
            I have currently started cooperation with Ondřej Sika. I organize
            with him workshops on several topics from Software development. We
            can show you how to make programming faster with nowadays tools like
            Docker, Git, Kubernetes and etc.
          </div>
          <div
            className="workshops-text"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Futhermore, I am also higly experienced with programming
            languages/frameworks like React Native, NodeJs, Java, .NET and many
            other technologies.
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
