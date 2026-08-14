import React from "react";
import { ExperienceContainerWrapper } from "./ExperienceStyled";
import { Section, SectionHeading, Reveal, Card } from "../Shared";

const EXPERIENCE = [
  {
    company: "Mordor Intelligence",
    role: "Software Engineer",
    dates: "01/2022 – Present",
    location: "Telangana, Hyderabad",
    current: true,
    bullets: [
      "Collaborated with business stakeholders to gather requirements and led a team of 4-5 developers to build the new company website using Next.js and TypeScript, delivering features with 95% on-time rate.",
      "Led development of multiple modules for the new company website using Next.js, improving load performance by 30%.",
      "Wrote automation and utility scripts that reduced development time by 30%.",
      "Spearheaded the revamp of the Official Website (120K+ daily users) using EJS, achieving 25% faster page loads and enhanced UX.",
      "Collaborated with business stakeholders to gather requirements and led a team of 2–3 junior developers, delivering features with 95% on-time rate.",
      "Implemented email verification on lead forms, reducing database load from unverified entries by 40%.",
      "Drove a 40-point boost in Core Web Vitals (CWV) scores, maintaining a performance score above 90.",
      "Leveraged VWO for A/B testing to enhance UX and boost qualified leads by 12%.",
    ],
  },
  {
    company: "AccioJob",
    role: "Full Stack Web Developer",
    dates: "05/2021 – 01/2022",
    location: "Gurugram, Haryana",
    current: false,
    bullets: [
      "Developed diverse projects from scratch including e-commerce, chat app showcasing hands-on expertise in MERN Stack.",
      "Effectively deployed projects on GitHub Pages, Netlify and Heroku ensuring seamless accessibility across environments.",
      "Tech Stack: JavaScript, React.js, Node.js, Express.js, MongoDB, MaterialUI, Bootstrap, Firebase and more.",
    ],
  },
];

const Experience = () => {
  return (
    <Section id="experience">
      <ExperienceContainerWrapper>
        <SectionHeading eyebrowNumber="03" eyebrow="Experience" title="Work Experience" />

        <ol className="timeline">
          {EXPERIENCE.map((job, index) => (
            <li className="timeline-item" key={job.company}>
              <span className={`timeline-node${job.current ? " current" : ""}`} aria-hidden="true" />
              <Reveal delay={index * 120}>
                <Card $hoverBorder>
                  <div className="timeline-meta">
                    <span className="timeline-dates">{job.dates}</span>
                    <span className="timeline-location">{job.location}</span>
                  </div>
                  <h3 className="timeline-role">
                    <span className="company">{job.company}</span>
                    <span className="role-divider" aria-hidden="true" />
                    <span className="role">{job.role}</span>
                    {job.current && <span className="current-pill">Current</span>}
                  </h3>
                  <ul className="timeline-bullets">
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            </li>
          ))}
        </ol>
      </ExperienceContainerWrapper>
    </Section>
  );
};

export default Experience;
