import React, { Component } from "react"
import Toolbar from "./components/Toolbar/Toolbar"
import SideDrawer from "./components/SideDrawer/SideDrawer"
import Backdrop from "./components/Backdrop/Backdrop"
import AOS from "aos"
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomeScreen from "./screens/HomeScreen/HomeScreen"
import WorkshopsScreen from "./screens/WorkshopsScreen/WorkshopsScreen"
import BlogScreen from "./screens/BlogScreen/BlogScreen"
import ContactScreen from "./screens/ContactScreen/ContactScreen"
import ProjectScreen from "./screens/ProjectScreen/ProjectScreen"
import "aos/dist/aos.css"

class App extends Component {
  state = {
    SideDrawerOpen: false
  }

  componentDidMount() {
    AOS.init({ once: true, duration: 1000 })
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
      <Router>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.SideDrawerOpen} />
        {backDrop}
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/Workshops" component={WorkshopsScreen} />
          <Route exact path="/Blog" component={BlogScreen} />
          <Route exact path="/Contacts" component={ContactScreen} />
          <Route exact path="/Projects" component={ProjectScreen} />
        </Switch>
      </Router>
    )
  }
}

export default App
