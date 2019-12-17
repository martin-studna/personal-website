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
          imageSrc={require("../../assets/acresia-logo.png")}
          title={"Mobile Developer"}
          date={"1.9.2019 - present"}>

          I had a chance to be asked by Ing. Mgr. Luděk Nezmar, owner of Acresia Consulting to
          collaborate with him on several mobile projects.

          I created a mobile application
        
        </Card>
        <Card
          className="work-card"
          imageSrc={require("../../assets/ibmlogo.png")}
          title={"Software Developer"}
          date={"1.7.2019 - present"}
        >
          Integration of IBM Watson in third-party services
Development of Tobi chatbot in Vodafone
        </Card>
        <Card
          className="work-card"
          imageSrc={require("../../assets/qest-logo.svg")}
          title={".NET Developer"}
          date={"1.6.2018 - 1.5.2019"}
        >
          Project Haidy - intelligent buildings. Development of cloud application, which communicates with house technologies. I am part of C# team, which is developing backend of the application. We are also using technologies like Docker or MongoDB.

        </Card>
        <Card className="work-card"
         title={"Coin Group .NET Developer"} >
Development of exchange website with virtual currencies. Technology of the website was based on ASP.NET

         </Card>
      </div>
    </div>
  </div>
)

export default work
