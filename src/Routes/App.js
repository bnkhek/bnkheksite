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

        <div className="page page1">
          <h1 id="name">Brandon Khek</h1>
          <p className="tagline">
            <strong>Astrophysics Student at Rice University</strong>
          </p>
          <p>
            <i class="arrow down"></i>
          </p>
        </div>

        <div className="page page2">
          <div class="parallax">
            <p className="caption">
              "Mock Bike" O-Week 2020 - I'm on the right!
            </p>
          </div>

          <div>
            <Slide right>
              <div>
                <h2>Welcome to my website!</h2>
                <p>I actually made this one from scratch in React.js.</p>
              </div>
            </Slide>
            <Slide left>
              <p>But enough about the site... who am I?</p>
            </Slide>
          </div>
          <p>
            <i class="arrow down"></i>
          </p>
        </div>

        <div className="page page3">
          <h1>Teaching</h1>

          <p>Yuhh RCEL Elite Tech Camp</p>
          <p>Yuhh COLL</p>
          <p>arroz splash</p>
          <p>
            <i class="arrow down"></i>
          </p>
        </div>

        <div className="page page4">
          <h1>Research</h1>
          <p>Yuhh self-ordering scalar fields</p>
          <p>Yuhh something else</p>
          <p>
            <i class="arrow down"></i>
          </p>
        </div>

        <div className="page page5">
          <h1>Outreach</h1>
          <p>Yuhh SpaceVision 2021</p>
          <p>Yuhh TEDxRice</p>
          <p>
            <i class="arrow down"></i>
          </p>
        </div>
      </body>
    </div>
  );
}

export default App;
