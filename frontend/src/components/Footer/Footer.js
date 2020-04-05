import React from "react"
import "./Footer.css"

const footer = () => (
  <div className="footer">
    <div className="footer-items">
    <a href="https://www.facebook.com/Martin-Studna-110126967303995">
    <img  alt="facebook" className="footer-image" src={require("../../assets/facebook.svg")} />
    </a>
    <a href="https://www.instagram.com/martin_studna_official/">
    <img  alt="instagram" className="footer-image" src={require("../../assets/instagram.svg")} />
    </a>
    <a href="https://twitter.com/martin_studna">
    <img  alt="twitter" className="footer-image" src={require("../../assets/twitter.svg")} />
    </a>
    <a href="https://www.linkedin.com/in/martin-studna/">
    <img  alt="linkedin" className="footer-image" src={require("../../assets/linkedin.svg")} />
    </a>
    </div>
  </div>
)

export default footer
