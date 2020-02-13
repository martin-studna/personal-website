import React, { useState } from "react";
import "./NavigationBar.css";

const NavigationBar = props => {
  const [nav, setNav] = useState("nav-links");
  const [fade, setFade] = useState("");
  const [line, setLine] = useState("line")

  return (
    <nav>
      <a href="/" className="title">Martin Studna</a>

      <div
        className="hamburger"
        onClick={() => {
          if (nav === "nav-links") {
            setNav("nav-links open");
            setLine("line open")
            setTimeout(() => {
            document.body.style.overflowY = "hidden";
            }, 700)
            setFade("fade");
          } else {
            setLine("line")
            setFade("", setNav("nav-links"));
            document.body.style.overflow = "auto";
          }
        }}
      >
        <div className={line}></div>
        <div className={line}></div>
        <div className={line}></div>
      </div>
      <div className={nav}>
        <ul>
          <li className={fade}>
            <a href="/">Home</a>
          </li>
          <li className={fade}>
            <a href="/Projects">Projects</a>
          </li>
          <li className={fade}>
            <a href="/Workshops">Workshops</a>
          </li>
          <li className={fade}>
            <a href="/Blog">Blog</a>
          </li>
          <li className={fade}>
            <a href="/Contacts">Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
