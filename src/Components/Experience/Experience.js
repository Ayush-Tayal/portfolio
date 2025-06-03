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
              <h2> Mordor intelligence | Software Engineer </h2>

              <div className="exp-details">
                <h5> 01/2022-Present </h5>
                <h5> Telangana, Hyderabad </h5>
              </div>

              <div className="exp-about">
                <li>
                  Led development of multiple modules for the new company website using Next.js, improving load performance by 30%.
                </li>

                <li>
                  Wrote automation and utility scripts that reduced development time by 30%.
                </li>

                <li>
                  Spearheaded the revamp of the Official Website (120K+ daily users) using EJS, achieving 25% faster page loads and enhanced UX.
                </li>

                <li>
                  Collaborated with business stakeholders to gather requirements and led a team of 2–3 junior developers, delivering features with
                  95% on-time rate.
                </li>

                <li>Implemented email verification on lead forms, reducing database load from unverified entries by 40%.</li>
              
                <li>Drove a 40-point boost in Core Web Vitals (CWV) scores, maintaining a performance score above 90.</li>

                <li>Leveraged VWO for A/B testing to enhance UX and boost qualified leads by 12%.</li>
              </div>
            </div>
          </Zoom>

          <Zoom bottom>
            <div className="exp">
              <h2> AccioJob | FULL STACK WEB DEVELOPER </h2>

              <div className="exp-details">
                <h5> 05/2021-01/2022 </h5>
                <h5> Gurugram, Haryana </h5>
              </div>

              <div className="exp-about">
                <li>Developed diverse projects from scratch including e-commerce, chat app showcasing hands-on expertise in MERN Stack.</li>
                <li>Effectively deployed projects on GitHub Pages, Netlify and Heroku ensuring seamless accessibility across environments.</li>
                <li>
                  Tech Stack: JavaScript, React.js, Node.js, Express.js, MongoDB, MaterialUI, Bootstrap, Firebase and more.
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
