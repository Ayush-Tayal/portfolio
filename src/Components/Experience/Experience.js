import React from "react";
import { Bounce, Zoom } from "react-reveal";
import { ExperienceContainerWrapper } from "./ExperienceStyled";

const Experience = () => {
  return (
    <ExperienceContainerWrapper>
      <div id="experience">
        <div id="experience">
          <Bounce>
            <h1 className="experience-heading">WORK EXPERIENCE </h1>
          </Bounce>
        </div>

        <div id="experience-card">
          <Zoom top>
            <div className="exp">
              <h2> Mordor intelligence - Software Engineer </h2>

              <div className="exp-details">
                <h5> 01/2022-Present </h5>
                <h5> Telangana, Hyderabad </h5>
              </div>

              <div className="exp-about">
                <li>
                  Lead developer for the MI official Website utilizing EJS to streamline website creation.
                </li>

                <li>
                  Worked on a project called Lorien, aimed to build Hubs and provide an intuitive way for the analyst to gather and organize the data.
                </li>

                <li>
                  Experienced in working with IW, Digitizer and IC projects, contributing to the internal workflow development process.
                </li>

                <li>
                  Having experience working on nearly all of our project demonstrating exceptional leadership and teamwork abilities during the dev process.
                </li>

                <li>Tech Stack: JS, ReactJS, NodeJS, ExpressJS, EJS Template, ANTD, MongoDB and many more.</li>
              </div>
            </div>
          </Zoom>

          <Zoom bottom>
            <div className="exp">
              <h2> AccioJob - Software Developer Trainee </h2>

              <div className="exp-details">
                <h5> 05/2021-01/2022 </h5>
                <h5> Gurugram, Haryana </h5>
              </div>

              <div className="exp-about">
                <li>Completed Full Stack Development Internship.</li>
                <li>Developed multiple projects using MERN Tech Stack.</li>
                <li>
                  Successfully deployed projects using Githu Pages. Netlify also used.
                </li>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </ExperienceContainerWrapper>
  );
};

export default Experience;
