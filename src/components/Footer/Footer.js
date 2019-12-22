import React from "react"
import "./Footer.css"

const footer = props => (
  <div className="footer">
    <div className="footer-items">
    <img className="footer-image" src={require("../../assets/facebook.svg")} />
    <img className="footer-image" src={require("../../assets/instagram.svg")} />
    <img className="footer-image" src={require("../../assets/twitter.svg")} />
    <img className="footer-image" src={require("../../assets/linkedin.svg")} />

    </div>
  </div>
)

export default footer
