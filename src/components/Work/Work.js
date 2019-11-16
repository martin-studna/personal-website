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
          imageSrc={require("../../assets/ibmlogo.png")}
        />
        <Card
          imageSrc={require("../../assets/qest-logo.svg")}
          className="work-card"
        />
        <Card className="work-card" />
        <Card className="work-card" />
      </div>
    </div>
  </div>
)

export default work
