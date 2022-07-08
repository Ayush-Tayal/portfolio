import React from "react";
import { NavbarContainerWrapper } from "./NavbarStyled";

const Navbar = () => {
  return (
    <NavbarContainerWrapper>
      <div id="navbar">
        <div id="left-nav">
          <a href="#"> AYUSH TAYAL </a>
        </div>

        <div id="right-nav">
          <a href="#"> Home </a>
          <a href="#about"> About </a>
          <a href="#skills"> Skills </a>
          <a href="#education"> Education </a>
          <a href="#experience"> Experience </a>
          <a href="#projects"> Projects </a>
          <a href="#publication"> Publication </a>
          <a href="#contact"> Contact </a>
        </div>
      </div>
    </NavbarContainerWrapper>
  );
};

export default Navbar;
