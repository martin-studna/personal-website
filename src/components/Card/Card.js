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
            <div>header</div>
          </div>
          <div>oirgjeorijg</div>
          <div>oirgjeorijg</div>
        </div>
      </div>
    )
  }
}
