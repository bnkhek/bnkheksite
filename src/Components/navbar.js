import React, { useState } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";

function navbar() {
  return (
    <NavLink to="/About">
      <p className="route">About</p>
    </NavLink>
  );
}

export default navbar;
