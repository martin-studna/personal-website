import React from "react"
import "./Projects.css"
import Card from "../Card/Card"

const projects = props => (
  <div className="projects">
    <div className="projects-items">
    <div className="projects-title">Projects</div>
      
      <div className="projects-cards">
        <Card
          className="projects-card"
          imageSrc={require("../../assets/acresia-logo.png")}
          title={"Zíráním nepomůžeš"}
          date={"1.9.2019 - present"}>

          I had a chance to be asked by Ing. Mgr. Luděk Nezmar, owner of Acresia Consulting to
          collaborate with him on several mobile projects.
          I created a mobile application for UAMK
        
        </Card>
        <Card
          className="projects-card"
          imageSrc={require("../../assets/ibmlogo.png")}
          content={"Tobi chatbot"}
          title={"Tobi chatbot - Vodafone"}
          date={"1.7.2019 - present"}
        >
          Integration of IBM Watson in third-party services
Development of Tobi chatbot in Vodafone
        </Card>
        <Card
          className="projects-card"
          imageSrc={require("../../assets/qest-logo.svg")}
          content={""}
          title={"Procedural generation of pencil drawings"}
          date={"1.6.2018 - 1.5.2019"}
        >
          Project Haidy - intelligent buildings. Development of cloud application, which communicates with house technologies. I am part of C# team, which is developing backend of the application. We are also using technologies like Docker or MongoDB.

        </Card>

      </div>
    </div>
  </div>
)

export default projects
