import React, { useState } from "react";
import "./components.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>

      <p>bnkhek@gmail.com • bnk1@rice.edu</p>
      <p>1605 Rice Blvd. • Houston, TX 77005</p>
      <div class="icon-bar">
        <a href="#" class="linkedin">
          <i class="fa fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
