import React, { useState } from "react"
import "./NavigationBar.css";

const NavigationBar = props => {

  const [nav, setNav] = useState('nav-links')
  const [fade, setFade] = useState('')

  return (
    <nav>
    Martin Studna
      <div className="hamburger"  onClick={() => {
          if (nav === 'nav-links') {
            setNav('nav-links open')
            setFade('fade')
          }
          else{
            setFade('', setNav('nav-links'))
          }
            
      }}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={nav}>
        <li className={fade}>
          <a href="/">Home</a>
        </li>
        <li className={fade}>
          <a href="/About">About</a>
        </li>
        <li className={fade}>
          <a href="/Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
