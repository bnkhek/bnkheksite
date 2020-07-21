import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="name">Brandon Khek.</h1>
        <Link to="/About">Go to About</Link>
      </header>
    </div>
  );
}

export default App;
