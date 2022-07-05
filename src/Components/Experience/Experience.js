import React from "react";
import { Bounce, Zoom } from "react-reveal";
import "./Experience.css";

const Experience = () => {
  return (
    <div id="experience">
      <div id="experience">
        <Bounce>
          <h1 className="experience-heading"> EXPERIENCE </h1>
        </Bounce>
      </div>

      <div id="experience-card">
        <Zoom top>
          <div className="exp">
            <h2> Mordor intelligence - Junior Software Engineer </h2>

            <div className="exp-details">
              <h5> 01/2022-Present </h5>
              <h5> Telangana, Hyderabad </h5>
            </div>

            <div className="exp-about">
              <li>
                Worked in an agile team to add new features and fix existing bugs
                in the Lorien project.
              </li>
              <li>
                Responsible for the Designing and adding new features to the IC
                project.
              </li>
              <li>Tech Stack: - React, Redux, ANTD, Git, Bitbucket, Jira</li>
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
              <li>Full Stack Development Training.</li>
              <li>For deployment: GitHub Pages, Netlify is used.</li>
              <li>Build projects using technologies like Vanilla JS, ReactJs.</li>
            </div>
          </div>
        </Zoom>

      </div>
    </div>
  );
};

export default Experience;
