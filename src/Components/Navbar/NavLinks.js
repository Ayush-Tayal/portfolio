import React from "react";
import HamburgerMenuData from "./HamburgerMenu";
import { NavLinksWrapper } from "./NavLinksStyled";

const NavLinks = ({ activeId }) => (
  <NavLinksWrapper aria-label="Primary">
    {HamburgerMenuData.map((item) => {
      const isActive = activeId && item.path === `#${activeId}`;
      return (
        <a key={item.title} href={item.path} className={isActive ? "active" : undefined} aria-current={isActive ? "page" : undefined}>
          {item.title}
        </a>
      );
    })}
  </NavLinksWrapper>
);

export default NavLinks;
