import React from "react"
import "./Card.css"

export default class ImageCard extends React.Component {
  renderImage() {
    if (typeof this.props.imageSrc !== "undefined")
      return <img className="card-image" src={this.props.imageSrc} alt="" />
    else return null
  }

  render() {
    return (
      <div className={this.props.className}>
        <div className="card-content">
            {this.renderImage()}
          <div className="card-text">{this.props.children}</div>
        </div>
      </div>
    )
  }
}
