import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Slide from "react-reveal/Slide";

function App() {
  return (
    <div className="App">
      <body className="App-body">
        <h1 id="name">Brandon Khek.</h1>
        <Link to="/About">Go to About</Link>
        <p>
          <i class="arrow down"></i>
        </p>

        <Slide right>
          <div className="page2">
            <h2>As you can tell, I like making websites!</h2>
            <p>
              I actually made this one from scratch in React.js. Not bad for an
              astrophysics major, eh?
            </p>
          </div>
        </Slide>
      </body>
    </div>
  );
}

export default App;
