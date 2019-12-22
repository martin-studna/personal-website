import React from "react"
import "./Contact.css"
import Button from "../Button/Button"

const contact = props => (
  <div className="contact">
    <div className="contact-items">
      <div className="contact-title" data-aos="fade-up">
        Contact Me
      </div>
      <div className="contact-subtitle"></div>
      <div>
        <form className="report-form" data-aos="fade-up">
          {/* {<div class="error-message"></div>} */}
          <div className="form-row" data-aos-delay="100">
            <div>
              <textarea
                className="input-text input-text-title"
                type="text"
                id="add"
                name="title"
                //  onChange={this.onChange}
                //  value={this.state.newReport.title}
                placeholder="Name"
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
            ></textarea>
          </div>
          <Button id="submitButton" text="Send" data-aos-delay="300" />
        </form>
      </div>
    </div>
  </div>
)

export default contact
