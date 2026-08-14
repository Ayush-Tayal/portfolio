import React from "react";
import { FiArrowUp } from "react-icons/fi";
import { SocialLinks } from "../Shared";
import { FooterWrapper } from "./FooterStyled";

const Footer = () => (
  <FooterWrapper>
    <div className="footer-inner">
      <p className="copyright">
        © {new Date().getFullYear()} Ayush Tayal. Built with React, MUI &amp; styled-components.
      </p>
      <div className="footer-right">
        <SocialLinks />
        <a href="#home" className="back-to-top" aria-label="Back to top">
          <FiArrowUp aria-hidden="true" />
        </a>
      </div>
    </div>
  </FooterWrapper>
);

export default Footer;
