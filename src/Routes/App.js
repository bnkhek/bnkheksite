import React, { useState } from "react";
import "./App.css";
import "./hamburger.css";
import Navbar from "../Components/Navbar.js";
import { NavLink } from "react-router-dom";
import Slide from "react-reveal/Slide";

function App() {
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
            <Navbar />
          </div>
        </Slide>

        <div className="page1">
          <h1 id="name">Brandon Khek.</h1>
          <p className="tagline">Astrophysics Student at Rice University</p>
          <p>
            <i class="arrow down"></i>
          </p>
        </div>

        <div className="page2">
          <div class="parallax">
            <p className="caption">
              "Mock Bike" O-Week 2020 - I'm on the right!
            </p>
          </div>

          <Slide right>
            <div>
              <h2>Welcome to my website!</h2>
              <p>I actually made this one from scratch in React.js.</p>
            </div>
          </Slide>
          <Slide left>
            <p>But enough about the site... who am I?</p>
          </Slide>
          <i class="arrow down"></i>
        </div>
      </body>
    </div>
  );
}

export default App;
