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
          imageSrc={require("../../assets/acresia.png")}
          content={`woefjwoeifwe.
            wepfowefwepofkwepof kfwpeo kwpeok 
            
            fweofwoefij`}
          title={"Mobile App Developer"}
        />
        <Card
          className="work-card"
          imageSrc={require("../../assets/ibmlogo.png")}
          content={""}
          title={"Software Developer"}
        />
        <Card
          className="work-card"
          imageSrc={require("../../assets/qest-logo.svg")}
          content={""}
          title={".NET Developer"}
        />
        <Card
          className="work-card"
          imageSrc={require("../../assets/qest-logo.svg")}
          content={""}
          title={".NET Developer"}
        />
      </div>
    </div>
  </div>
)

export default work
