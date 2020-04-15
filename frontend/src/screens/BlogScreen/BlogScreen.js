import React, { Component } from "react"
import "./BlogScreen.css"
export default class BlogScreen extends Component {
  componentWillMount() {
    /* document.getElementById("loader").classList.add("hidden") */

  }
  
  render() {
    return (
      <div className="blog">
        <div className="blog-items">
          <div className="blog-title" data-aos="fade-up">
            Blog
          </div>
          <div className="blog-text" data-aos="fade-up" data-aos-delay="100">
            Still in progress 
          </div>
        </div>
      </div>
    )
  }
}
