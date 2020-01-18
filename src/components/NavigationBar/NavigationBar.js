import React, { useState } from "react"
import "./NavigationBar.css";

const NavigationBar = props => {

  const [nav, setNav] = useState('nav-links')

  return (
    <nav>
      <div className="hamburger" onClick={() => {
          if (nav === 'nav-links') {
            setNav('nav-links open')
          }
          else
            setNav('nav-links')
      }}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={nav}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/About">About</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
