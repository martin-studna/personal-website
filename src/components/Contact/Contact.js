import React from "react"
import "./Contact.css"
import TextField from "@material-ui/core/TextField"

const contact = props => (
  <div className="contact">
    <div className="contact-items">
      <div className="contact-title">Contact Me</div>
      <div className="contact-subtitle"></div>
      <div>
        <form noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Name"
            style={{ marginRight: "40px" }}
          />
          <TextField id="standard-basic" label="Email" />
        </form>
      </div>
    </div>
  </div>
)

export default contact
