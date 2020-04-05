import React from "react"
import "./Toolbar.css"
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"

const toolbar = props => (
  <header className="toolbar" id="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_logo">
        <a href="/">Martin Studna</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
    </nav>
  </header>
)

export default toolbar
