import React from "react"
import "./Work.css"
import Card from "../Card/Card"

const work = props => (
  <div className="work">
    <div className="work-items">
      <div className="work-title">Work</div>
      <div className="work-cards">
        <Card
          className="work-card"
          //imageSrc={require("../../assets/ibmlogo.png")}
          title={"Mobile Developer"}
        />
        <Card
          className="work-card"
          imageSrc={require("../../assets/ibmlogo.png")}
          title={"Software Developer"}
        />
        <Card
          className="work-card"
          imageSrc={require("../../assets/qest-logo.svg")}
          title={".NET Developer"}
        />
        <Card className="work-card" title={".NET Developer"} />
      </div>
    </div>
  </div>
)

export default work
