import React, { Component } from "react"
import "./BlogScreen.css"
export default class BlogScreen extends Component {
  componentDidMount() {
    document.getElementById("toolbar").style.background = "black"
  }

  render() {
    return <div className="blog"></div>
  }
}
