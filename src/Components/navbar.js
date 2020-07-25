import React, { useState } from "react";
import "../Routes/App.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/">
        <p className="route">Home</p>
      </NavLink>

      <NavLink to="/About">
        <p className="route">About</p>
      </NavLink>
    </div>
  );
}

export default Navbar;
