import React from "react"
import "./Card.css"

export default class Card extends React.Component {
  renderImage() {
    console.log(this.props.imageSrc)

    if (typeof this.props.imageSrc !== "undefined")
      return <img className="card-image" src={this.props.imageSrc} alt="" />
    else return null
  }

  render() {
    return (
      <div className={this.props.className}>
        <div className="card-content">
          <div className="card-header">
            {this.renderImage()}
            <div className="card-header-title">{this.props.title}</div>
            <div className="card-header-date">{this.props.date}</div>
          </div>
          <hr className="card-line" />
          <div className="card-text">{this.props.children}</div>
        </div>
      </div>
    )
  }
}
