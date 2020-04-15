import React, { Component } from "react";
import Introduction from "../../components/Introduction/Introduction";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Work from "../../components/Work/Work";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Skills from '../../components/Skills/Skills'
import "./HomeScreen.css"

export default class HomeScreen extends Component {

  componentWillMount() {
    /* setTimeout(() => {
      document.getElementById("loader").classList.add("hidden")
    }, 2000); */
  }

  render() {
    return (
      <div className="home">
        <Introduction />
        <About />
        <Work />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    );
  }
}
