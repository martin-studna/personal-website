import React from 'react'
import "./Skillbar.css";

export default class Skillbar extends React.Component {

  state = {
    style: "skill_inner-bar"
  }

  componentDidMount() {
    window.addEventListener("scroll", () =>{this.animate(document.getElementById(this.props.id))})
  }

  inView(element) {
    // get window height
    var windowHeight = window.innerHeight;
    var elementHeight = element.clientHeight;
    // get number of pixels that the document is scrolled
    var scrollY = window.scrollY || window.pageYOffset;
    
    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    var scrollPosition = scrollY + windowHeight;
    // get element position (distance from the top of the page to the bottom of the element)
    var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
    
    // is scroll position greater than element position? (is element in view?)
    if (scrollPosition > elementPosition) {
      return true;
    }
    
    return false;
  }

  animate(element) {
    if (element === null || typeof element === "undefined")
      return
    console.log("is not in viewport");
    // is element in view?
    if (this.inView(element)) {
        console.log("is in viewport");
        
        // element is in view, add class to element
        this.setState({style: "skill_inner-bar skill_inner-bar-20"})
        //element.classList.add('skill_inner_bar-20');
    }
  }

  render() {
    return (
      <div className="skill" data-aos="fade-zoom in">
        <h3 className="skill_type">{this.props.skill}</h3>
        <div className="skill_outer-bar">
          <div id={this.props.id} className={this.state.style}></div>
        </div>
      </div>
    )  
  }
}
