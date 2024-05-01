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
                  Led the dev for the MI official Website serving 60k daily users, leveraging EJS for streamlined creation and optimal
                  performance and UX.
                </li>

                <li>
                  Led a significantly improvement Core Web Vitals (CWV) score by 40 points while maintaining a performance rating of 80+.
                </li>

                <li>
                  Made impactful contributions to projects IW, Digitizer, Lorien and IC, resulting in a notable 20% increase in the daily leads.
                </li>

                <li>
                  Demonstrated leadership and teamwork abilities through involvement in all core projects.
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
                <li>Completed an intensive Full Stack Development Internship.</li>
                <li>Developed diverse projects from scratch including e-commerce, realtime chatting, showcasing expertise in MERN Stack.</li>
                <li>
                  Effectively deployed projects on Github Pages, Netlify and Heroku ensuring seamless accessibility.
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
