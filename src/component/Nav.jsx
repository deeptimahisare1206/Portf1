import React from "react";
// import "./css/Nav.css";
function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <p>PORTFOLIO👩🏼‍🎓</p>
      </div>
      <div className="content">
        <a href="Home.jsx">HOME</a>
        <a href="About.jsx">ABOUT</a>
        <a href="Services.jsx">SERVICES</a>
        <a href="Projects.jsx">PROJECTS</a>
        <a href="Skills.jsx">SKILLS</a>
        <a href="Contact.jsx">CONTACT</a>
      </div>
    </div>
  );
}
export default Nav;
