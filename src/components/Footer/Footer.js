import React from "react"
import "./Footer.css"

const footer = props => (
  <div className="footer">
    <div className="footer-items">
    <img  alt="facebook" className="footer-image" src={require("../../assets/facebook.svg")} />
    <img  alt="instagram" className="footer-image" src={require("../../assets/instagram.svg")} />
    <img  alt="twitter" className="footer-image" src={require("../../assets/twitter.svg")} />
    <img  alt="linkedin" className="footer-image" src={require("../../assets/linkedin.svg")} />
    </div>
  </div>
)

export default footer
