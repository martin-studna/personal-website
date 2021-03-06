import React from "react"
import "./Work.css"
import Card from "../Card/Card"

const work = props => (
  <div className="work">
    <div className="work-items">
      <div className="work-title" data-aos="fade-up">
        Work
      </div>

      <div className="work-cards" data-aos-delay="100">
        <Card
          className="work-card"
          imageSrc={require("../../assets/ibm.png")}
          content={""}
          company={"IBM"}
          place={"Prague, The Capital, Czech Republic"}
          title={"Software Developer"}
          date={"1.7.2019 - present"}
        >
          In IBM I mainly focus on development and integration of chatbots to
          make some processes in banking or telecom companies more effective.

        </Card>
        <Card
          className="work-card"
          imageSrc={require("../../assets/acresia.png")}
          company={"Acresia Consulting"}
          place={"Prague, The Capital, Czech Republic"}
          title={"Mobile Application Developer"}
          date={"1.9.2019 - present"}
        >
          I am currently cooperating with Ing. Mgr. Luděk Nezmar, owner of Acresia
          Consulting, on several mobile applications. 
        </Card>
        <Card
          className="work-card"
          imageSrc={require("../../assets/qest.png")}
          content={""}
          company={"Qest Automation"}
          place={"Prague, The Capital, Czech Republic"}
          
          title={".NET Developer"}
          date={"1.6.2018 - 1.5.2019"}
        >
          Project Haidy - intelligent buildings. Development of cloud
          application, which communicates with house technologies. I am part of
          C# team, which is developing backend of the application. We are also
          using technologies like Docker or MongoDB.
        </Card>
        <Card className="work-card"
         imageSrc={require("../../assets/coin_group.png")}
         company={"Coin Group"}
         date={"1.2.2018 - 1.3.2018"}
          place={"Prague, The Capital, Czech Republic"}
         title={".NET Developer"}>
          Development of exchange website with virtual currencies. Technology of
          the website was based on ASP.NET
        </Card>
      </div>
    </div>
  </div>
)

export default work
