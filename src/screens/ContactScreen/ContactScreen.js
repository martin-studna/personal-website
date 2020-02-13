import React, { Component } from "react"
import "./ContactScreen.css"

export default class ContactScreen extends Component {
  componentDidMount() {
   // document.getElementById("toolbar").style.background = "black"
   // document.getElementById("toolbar").style.position = "relative"
  }

  render() {
    return (
      <div className="contacts">
        <div className="contacts-items">
          <div className="contacts-title" data-aos="fade-up">
            Contacts
          </div>
          <div
            className="contacts-text"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Email: martin.studna2@gmail.com
          </div>
          <div
            className="contacts-text"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Phone: +420 775 058 619
          </div>
          <div
            className="contacts-text"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Linkedin:{" "}
            <a href="https://www.linkedin.com/in/martin-studna/">
              Martin Studna
            </a>
          </div>
        </div>
      </div>
    )
  }
}
