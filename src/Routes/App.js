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
              <p>But enough about the site... what do I do?</p>
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

          <p>
            Coming into Rice, I was very uncertain with what I wanted to explore
            in college. The guidance of countless students, mentors, and
            professors enabled me to explore career paths that were
            complementary to my interests. Being a resource to others means a
            lot to me because of the invaluable self-discovery I can help
            facilitate.
          </p>

          <h2>RCEL Elite Tech Camp</h2>
          <div className="contentDetail">
            <img src={rcel} alt="RCEL Class Photo" width="90%" />
            <p className="contentDetail">
              Over the summer of 2020 I had the pleasure of teaching 28 high
              school students machine learning in Python through RCEL - Rice
              Center for Engineering Leadership - technology camp. We used
              anomaly detection algorithms to analyze meteorological data!
              Examples include the Isolation Forest and Local Outlier Factor
              algorithms, aided with powerful libraries like SciKitLearn and
              MatPlotLib. This is one of our classes trying to make a heart.
            </p>
          </div>
          <h2>COLL</h2>
          <p>
            COLL is a class code, short for COLLege course, which are
            student-taught courses! After a semseter of training, Rice students
            can teach a COLL course on anything they'd like, and I'm working on
            doing this soon! Stay tuned for a syllabus.
          </p>

          <h2>Rice Splash</h2>

          <p>
            There's a really cool organization on campus called Rice Splash, in
            which students at Rice can teach middle/high school students about
            any topic they want. I'm going to be teaching this fall about single
            variable (and some multivariable) calculus. Ambitious, but I'm
            confident the material can be simplified enough and still be
            beneficial.
          </p>

          <p>
            <i class="arrow down"></i>
          </p>
        </div>

        <div className="page page4">
          <h1>Research</h1>

          <h2>Gravitational Waves from Self-Ordering Scalar Fields</h2>
          <div className="contentDetail">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Mexican_hat_potential_polar.svg/1280px-Mexican_hat_potential_polar.svg.png"
              alt="Higgs Mexican Hat Potential"
              id="higgs"
            />
            <div>
              <p className="contentDetail">
                I'm studying the gravitational wave energy density from
                self-ordering scalar fields, particularly the Higgs field. Fancy
                talk for saying that the Higgs field (associated with Higgs
                boson) is inhomogeneous (isn't uniform) in space, and as it
                tries to relax, or become homogeneous, it generates
                gravitational waves. Woah! To the left is a picture of the{" "}
                <a href="https://en.wikipedia.org/wiki/Spontaneous_symmetry_breaking">
                  Higgs Mexican Hat potential.{" "}
                </a>
              </p>
              <p className="contentDetail">
                I was ecstatic to have been able to do this research this
                semester. I've finally gotten behind the pop science that
                surrounds some of the terms mentioned here. To be able to study
                a phenomenon so beyond us all is both mind-blowing and humbling.
              </p>
            </div>
          </div>

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
            NASA Space Center Houston (visitor center of the Johnson Space
            Center), other SEDS Chapters, the national SEDS advisory board, and
            fellow SEDS members to plan this event of 500+ people! The 3 day
            conference schedule includes topics ranging from the Artemis
            missions to international space policy.
          </p>
          {/*
          <h2>TEDxRice</h2>
          <p>
            I was looking to give a talk illuminating equations in physics that
            are overlooked but quite powerful in their implications and meaning.
            I think pop science today goes a little too far with the qualitative
            analysis of phenomena. While it's easily accessible this way, I felt
            that the quantitative aspect of physics is simulatenously overlooked
            and feared, even though there's a lot of weight to them. I'll try my
            best to explain pop science physics more rigorously but still fun.
          </p>
          */}
          <p>
            <i class="arrow down"></i>
          </p>
        </div>
      </body>
    </div>
  );
}

export default App;
