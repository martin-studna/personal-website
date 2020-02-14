import React from "react"
import "./Projects.css"
import ImageCard from "../ImageCard/ImageCard"

const projects = props => (
  <div className="projects">
    <div className="projects-items">
      <div className="projects-title" data-aos="fade-zoom-in">
        Projects
      </div>

      <div className="projects-cards" >
        <ImageCard 
          delay="100"
          className="projects-card"
          imageSrc={require("../../assets/nezirej.png")}
          title={"Zíráním nepomůžeš"}
          date={"1.9.2019 - present"}
        >
          
        </ImageCard>
        <ImageCard
        delay="300"
          className="projects-card"
          imageSrc={require("../../assets/TOBi_default.svg")}
          content={"Tobi chatbot"}
          title={"Chatbot Tobi"}
          date={"1.7.2019 - present"}
        >
          
        </ImageCard>
        <ImageCard
          delay="500"
          className="projects-card"
          imageSrc={require("../../assets/sketches.jpg")}
          content={""}
          title={"Procedural generation of pencil drawings"}
        >
        </ImageCard>
        <ImageCard
          delay="500"
          className="projects-card"
          imageSrc={require("../../assets/haidy.png")}
          content={""}
          title={"Haidy"}
        >
        </ImageCard>
      </div>
    </div>
  </div>
)

export default projects
