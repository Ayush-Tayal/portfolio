import React, { useEffect, useState } from "react";
import logo from "../../Assests/icon.jpg";
import Typewriter from "typewriter-effect";
import { HomeContainerWrapper } from "./HomeStyled";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { Reveal, PrimaryButton, GhostButton, SocialLinks } from "../Shared";

const Home = () => {
  const [isScrollVisible, setIsScrollVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsScrollVisible(window.pageYOffset > 400);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <HomeContainerWrapper>
      <div id="home" className="hero">
        <div className="hero-portrait">
          <Reveal mount="onMount" delay={120}>
            <div className="portrait-frame">
              <div className="portrait-glow" aria-hidden="true" />
              <img src={logo} alt="Ayush Tayal" width="320" height="400" decoding="async" />
            </div>
          </Reveal>
        </div>

        <div className="hero-content">
          <Reveal mount="onMount">
            <span className="pill">
              <span className="pill-dot" aria-hidden="true" />
              Hey There..!!
            </span>
          </Reveal>

          <Reveal mount="onMount" delay={60} as="h1" className="hero-name">
            <span className="lead">I'm</span>
            Ayush Tayal
          </Reveal>

          <Reveal mount="onMount" delay={120}>
            <Typewriter
              options={{
                strings: ["Software Engineer", "MERN Stack Developer", "FULL Stack Developer"],
                autoStart: true,
                delay: 50,
                loop: true,
              }}
            />
          </Reveal>

          <Reveal mount="onMount" delay={180}>
            <div className="cta-row">
              <PrimaryButton href="#projects">View Projects</PrimaryButton>
              <GhostButton href="#contact">Get in Touch</GhostButton>
            </div>
          </Reveal>

          <Reveal mount="onMount" delay={240}>
            <SocialLinks className="social-row" />
          </Reveal>
        </div>
      </div>

      <button
        type="button"
        className="scroll_to_top"
        data-visible={isScrollVisible}
        aria-label="Scroll to top"
        aria-hidden={!isScrollVisible}
        tabIndex={isScrollVisible ? 0 : -1}
        onClick={handleScrollToTop}
      >
        <IoIosArrowDropupCircle />
      </button>
    </HomeContainerWrapper>
  );
};

export default Home;
