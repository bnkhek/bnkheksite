import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>ABOUT ME!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/">Go to Main Page!</Link>
      </header>
    </div>
  );
}

export default App;
