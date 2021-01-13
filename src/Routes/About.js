import React, { useState } from "react";
import "./App.css";
import "./hamburger.css";
import { NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar.js";
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
            <Navbar />
          </div>
        </Slide>

        <div>
          <h1>About Me</h1>
        </div>

        <h2>
          Hobbies
        </h2>
        <p>
          I like to play tennis, chess, and dance. Here's a short dance video I made if you'd like to see! 
        </p>

        <iframe src='https://www.youtube.com/embed/U-dOtTErPpo'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'/>

        <h1>About the Site</h1>
        <p className="contentDetail">
          Since first grade I've always wanted to create my own website, though
          as a 9 year old, finding out that website hosting wasn't free at the
          time was heartbreaking. Also, making websites is hard! It wasn't until
          recently that I developed the skills and found the resources to
          execute such task.
        </p>
        <p className="contentDetail">
          I'm currently using GitHub pages to host this site, though the biggest
          by far challenge was the first step to building it. Over the summer
          most of my learning was done in an already developed code base, so I
          wasn't super well equipped to build one from the ground up. Especially
          since I wanted to build the site using React.js instead of traditional
          HTML/JS, things were somewhat complicated. I also experimented with
          changing the domain name, using temporary free domains to verify that
          I could get it to work, ultimately so that I could buy a domain in my
          name and use it for this site once it's done.
        </p>

        <p className="contentDetail">
          After getting it up and running, the next big task was getting various
          subdirectories working. I ended up using React Hash Router for this
          since for some reason I couldn't get React Router to work, thus you
          see the # in the URL. But after accomplishing this, I was all set. All
          that is left is to make the rest of the site good looking and
          informational, and this is where things start falling into place! The
          only thing I didn't do was make a UI/UX wireframe of the site... I'm
          developing this on a day by day basis.
        </p>
      </body>
    </div>
  );
}

export default About;
