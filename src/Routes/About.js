import React, { useState } from "react";
import "./App.css";
import "./hamburger.css";
import { NavLink } from "react-router-dom";
import Slide from "react-reveal/Slide";

function About() {
  const [clicked, setClicked] = useState(false);

  function menuClickHandler() {
    console.log("Click");
    setClicked(!clicked);
  }

  let menuStatus = clicked ? "open" : "closed";
  let button_classes = clicked
    ? "hamburger hamburger--collapse is-active"
    : "hamburger hamburger--collapse ";

  return (
    <div className="App">
      <body className="App-body">
        <button
          onClick={menuClickHandler}
          id="hamburger"
          class={button_classes}
          type="button"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>

        <Slide top when={clicked}>
          <div className={clicked ? "navbar" : "navbar hidden"}>
            <NavLink to="/">
              <p className="route">Home</p>
            </NavLink>
          </div>
        </Slide>

        <p>I like to play tennis, chess, and skateboard.</p>
      </body>
    </div>
  );
}

export default About;
