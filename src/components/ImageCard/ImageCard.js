import React from "react"
import "./ImageCard.css"

export default class ImageCard extends React.Component {
  renderImage() {
    if (typeof this.props.imageSrc !== "undefined")
      return (
        <img className="imagecard-image" src={this.props.imageSrc} alt="" />
      )
    else return null
  }

  render() {
    return (
      <div className={this.props.className} data-aos="fade-up">
        <div className="imagecard-content">
          <div className="imagecard-header">
            <div className="imagecard-header-date">{this.props.date}</div>
          </div>
          <div className="imagecard-items">{this.renderImage()} </div>
          <div className="imagecard-text">{this.props.title}</div>
        </div>
      </div>
    )
  }
}
