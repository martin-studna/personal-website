import React, { Component } from "react";
import Introduction from "../../components/Introduction/Introduction";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Work from "../../components/Work/Work";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

export default class HomeScreen extends Component {
  render() {
    return (
      <div>
        <Introduction />
        <About />
        <Work />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}
