import React from "react";
import { NavbarContainerWrapper } from "./NavbarStyled";
import { CgMenuCheese } from "react-icons/cg";

const Navbar = () => {
  const handleMenuClick = () => {
    console.log("Click");
  };
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

      <div id="mobile-navbar">
        <div id="left-menu">
          <a href="#"> AYUSH TAYAL </a>
        </div>

        <div id="right-menu">
          <CgMenuCheese className="menu-icon" onClick={handleMenuClick} />
        </div>
      </div>
    </NavbarContainerWrapper>
  );
};

export default Navbar;
