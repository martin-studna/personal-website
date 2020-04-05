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
      <div className={this.props.className} data-aos="fade-zoom-in" data-aos-delay={this.props.delay}>
        <div className="imagecard-content">
        {this.renderImage()} 
          <div className="imagecard-text">{this.props.title}</div>
          
        </div>
      </div>
    )
  }
}
