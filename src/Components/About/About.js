import React from "react";
import about from "../../Assests/about.png";
import { AboutContainerWrapper } from "./AboutStyled";
import { Section, SectionHeading, Reveal } from "../Shared";

const About = () => {
  return (
    <Section id="about">
      <AboutContainerWrapper>
        <SectionHeading eyebrowNumber="01" eyebrow="About" title="About Me" />

        <div className="about-grid">
          <Reveal className="about-copy">
            <p>
              Hey there, I'm Ayush Tayal, a skilled <strong>Software Engineer</strong> with more than 4 years of
              experience, proficient in <strong>MERN Stack</strong> and modern web technologies. I've built e-commerce apps,
              chat applications, and more, using Redux, Material-UI, Ant Design, and Firebase. My research on the{" "}
              <strong>Hyperloop Transportation System</strong> was published during my Bachelor's degree. Currently,
              I'm at <strong>Mordor Intelligence</strong>, contributing to various projects like IW, Lorien, and Main
              Website.
            </p>
            <p>Let's connect and create innovative web solutions together!</p>
          </Reveal>

          <Reveal delay={80} className="about-image">
            <div className="about-image-glow" aria-hidden="true" />
            <img src={about} alt="Illustration of Ayush at work" />
          </Reveal>
        </div>
      </AboutContainerWrapper>
    </Section>
  );
};

export default About;
