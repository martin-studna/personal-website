import React from "react"
import "./Contact.css"
import Button from "../Button/Button"

const contact = props => (
  <div className="contact">
    <div className="contact-items">
      <div className="contact-title" data-aos="fade-zoom-in">
        Contact Me
      </div>
      <div className="contact-subtitle"></div>
      <div>
        <form className="report-form">
          {/* {<div class="error-message"></div>} */}
          <div className="form-row">
            <div>
              <textarea
                className="input-text input-text-title"
                type="text"
                id="add"
                name="title"
                //  onChange={this.onChange}
                //  value={this.state.newReport.title}
                placeholder="Name"
                data-aos="fade-right"
                data-aos-delay="100"
              ></textarea>
            </div>
            <div>
              <textarea
                className="input-text input-text-title"
                type="text"
                id="add"
                name="title"
                //  onChange={this.onChange}
                //  value={this.state.newReport.title}
                placeholder="Email"
                data-aos="fade-left"
                data-aos-delay="200"
              ></textarea>
            </div>
            <div>
              <textarea
                className="input-text input-text-title"
                type="text"
                id="add"
                name="title"
                //  onChange={this.onChange}
                //  value={this.state.newReport.title}
                placeholder="Subject"
                data-aos="fade-right"
                data-aos-delay="300"
              ></textarea>
            </div>
          </div>
          <div style={{ marginBottom: "20px" }} data-aos-delay="200">
            <textarea
              className="input-text"
              type="text"
              id="add"
              name="description"
              // onChange={this.onChange}
              // value={this.state.newReport.description}
              placeholder="Message"
              data-aos="fade-left"
              data-aos-delay="400"
            ></textarea>
          </div>
          <Button id="submitButton" text="Send" aos="fade-zoom-in"
                delay="100"
           />
        </form>
      </div>
    </div>
  </div>
)

export default contact
