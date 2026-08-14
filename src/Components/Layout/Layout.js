import React from "react";
import { LayoutWrapper, AmbientGlow } from "./LayoutStyled";

const Layout = ({ children }) => (
  <LayoutWrapper>
    <AmbientGlow aria-hidden="true" />
    <main>{children}</main>
  </LayoutWrapper>
);

export default Layout;
