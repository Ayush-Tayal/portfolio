import React, { useState } from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { CgMenuCheese } from "react-icons/cg";
import NavLinks from "./NavLinks";
import MobileNavDrawer from "./MobileNavDrawer";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { NavbarWrapper } from "./NavbarStyled";
import useActiveSection from "../../hooks/useActiveSection";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 24 });
  const activeId = useActiveSection();

  return (
    <NavbarWrapper $scrolled={scrolled}>
      <AppBar position="fixed" elevation={0} className="app-bar">
        <Toolbar className="toolbar">
          <a href="#home" className="brand">
            Ayush Tayal
          </a>

          <div className="toolbar-right">
            <NavLinks activeId={activeId} />
            <ThemeToggle />
            <IconButton
              className="hamburger-btn"
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              aria-controls="mobile-nav-drawer"
              onClick={() => setDrawerOpen(true)}
            >
              <CgMenuCheese />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <MobileNavDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} activeId={activeId} />
    </NavbarWrapper>
  );
};

export default Navbar;
