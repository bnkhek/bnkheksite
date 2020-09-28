import React, { useState } from "react";
import "./App.css";
import "./hamburger.css";
import Navbar from "../Components/Navbar.js";
import rcel from "../Images/Heart.png";
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
          <h1>
            <strong>Teaching</strong>
          </h1>
          <h2>RCEL Elite Tech Camp</h2>
          <img src={rcel} alt="RCEL Class Photo" height="500vh" />
          <p>
            Over the summer of 2020 I had the pleasure of teaching 28 high
            school students machine learning in Python through RCEL - Rice
            Center for Engineering Leadership - technology camp. We used anomaly
            detection algorithms to analyze meteorological data! This is one of
            our classes trying to make a heart.
          </p>
          <h2>COLL</h2>
          <p>
            COLL is a class code, short for COLLege course, which are
            student-taught courses! After some training, Rice students can teach
            a COLL course on anything they'd like, and I'm working on doing this
            soon! Stay tuned for a syllabus :)
          </p>

          <h2>Rice Splash</h2>

          <p>
            There's a really cool organization on campus called Rice Splash, in
            which students at Rice can teach middle/high school students about
            any topic they want. I'm going to be teaching this fall about
            multivariable calculus. Ambitious indeed, but I'm confident the
            material can be simplified enough and still have them learn.
          </p>

          <p>
            <i class="arrow down"></i>
          </p>
        </div>

        <div className="page page4">
          <h1>Research</h1>
          <h2>Gravitational Waves from Self-Ordering Scalar Fields</h2>
          <p>
            I'm studying the gravitational wave energy density from
            self-ordering scalar fields, particularly the Higgs field. Fancy
            talk for saying that the Higgs field (associated with Higgs boson)
            is inhomogeneous (isn't uniform) in space, and as it tries to relax,
            or become homogeneous, it generates gravitational waves. Woah!
          </p>

          <h2>Some Other Research</h2>
          <p>
            Particle physics is suprisingly computational. To put it into
            perspective, the Large Hardon Collider collected about 5 petabytes
            of data when looking for the Higgs Boson. We need complex algorithms
            to filter out this noise and give us the good stuff! I'm going to
            explore the programming side of physics after I'm done with my
            current project.
          </p>
          <p>
            <i class="arrow down"></i>
          </p>
        </div>

        <div className="page page5">
          <h1>Outreach</h1>
          <h2>SpaceVision 2021</h2>
          <p>
            My co-chair and I won the SEDS (Students for the Exploration and
            Development of Space) USA Chapter bid for SpaceVision 2021, one of
            the largest student-run conferences in the world. We're working with
            Space Center Houston (visitor center of the Johnson Space Center),
            other SEDS Chapters, the national SEDS advisory board, and fellow
            SEDS members to plan this event of 500+ people! The current 3 day
            conference schedule includes topics ranging from intense
            computational work to international space policy.
          </p>
          <h2>TEDxRice</h2>
          <p>👀</p>
          <p>
            <i class="arrow down"></i>
          </p>
        </div>

        <div className="page page6">
          <p>
            Okay, with all of this, you might be wondering, "With all of this
            space and physics stuff why does he want to intern as a software
            engineer?" Great question! Solely because of
          </p>

          <h2>RiceApps Open Source Accelerator</h2>
          <p>
            Basically, RiceApps OSA was a 2 and a half-ish month program in
            summer 2020. I was paired up with a recent Rice grad (also my
            referral to FB, thanks Tam!) and two other students. More can be
            found on my LinkedIn.
          </p>
          <p>
            Bottom line, this experience showed me the{" "}
            <strong>aesthetic</strong> side to programming, i.e. this website.
            This was something I never got in my years of classroom coding
            experience. It was always Java, Pyton, or MATLAB, but never
            front-end development! I wouldn't say OSA rekindled a desire to code
            - I've always enjoyed it since my first class in high school.
            Rather, it gave me perspective to an area of programming that I've
            never been exposed to up until that point. Front-end development is
            a (very) recent discovery for me, and because of this, I want to see
            how much more I can do, perhaps as an intern over the summer!
          </p>
        </div>
      </body>
    </div>
  );
}

export default App;