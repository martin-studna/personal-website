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
          title={"Mobile App Developer"}
        >
          Development of mobile application for UAMK
        </Card>
        <Card
          className="work-card"
          imageSrc={require("../../assets/ibmlogo.png")}
          content={""}
          title={"Software Developer"}
        >
          Integration of IBM Watson in third-party services Development of Tobi
          chatbot in Vodafone
        </Card>
        <Card
          className="work-card"
          imageSrc={require("../../assets/qest-logo.svg")}
          content={""}
          title={".NET Developer"}
        >
          Project Haidy - intelligent buildings. Development of cloud
          application, which communicates with house technologies. I am part of
          C# team, which is developing backend of the application. We are also
          using technologies like Docker or MongoDB.
        </Card>
        <Card
          className="work-card"
          content={""}
          title={"Coin Group .NET Developer"}
        >
          Development of exchange website with virtual currencies. Technology of
          the website was based on ASP.NET
        </Card>
      </div>
    </div>
  </div>
)

export default work
