import React, { Component } from "react"
import Toolbar from "./components/Toolbar/Toolbar"
import SideDrawer from "./components/SideDrawer/SideDrawer"
import Backdrop from "./components/Backdrop/Backdrop"
import Introduction from "./components/Introduction/Introduction"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Work from "./components/Work/Work"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import "./App.css"
class App extends Component {
  state = {
    SideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { SideDrawerOpen: !prevState.SideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ SideDrawerOpen: false })
  }

  render() {
    let backDrop

    if (this.state.SideDrawerOpen) {
      backDrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.SideDrawerOpen} />
        {backDrop}
        <main className="main">
          <Introduction />
          <About />
          <Work />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    )
  }
}

export default App
