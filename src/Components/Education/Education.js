import React from "react";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { EducationContainerWrapper } from "./EducationStyled";
import { Section, SectionHeading, Reveal, Card } from "../Shared";

const EDUCATION = [
  {
    degree: "Bachelor of Technology",
    institution: "PDM College Of Engineering",
    years: "2017 – 2021",
    Icon: FaGraduationCap,
  },
  {
    degree: "Senior Secondary",
    institution: "Nav Bharti Public School",
    years: "2016 – 2017",
    Icon: FaSchool,
  },
  {
    degree: "Secondary",
    institution: "Nav Bharti Sr Sec School",
    years: "2014 – 2015",
    Icon: FaSchool,
  },
];

const Education = () => {
  return (
    <Section id="education" tinted>
      <EducationContainerWrapper>
        <SectionHeading eyebrowNumber="04" eyebrow="Education" title="Academics & Credentials" />

        <div className="education-grid">
          {EDUCATION.map(({ degree, institution, years, Icon }, index) => (
            <Reveal key={degree} delay={index * 80}>
              <Card $hoverBorder className="education-card">
                <span className="education-icon-tile" aria-hidden="true">
                  <Icon />
                </span>
                <h3 className="education-degree">{degree}</h3>
                <p className="education-institution">{institution}</p>
                <span className="education-years">{years}</span>
              </Card>
            </Reveal>
          ))}
        </div>
      </EducationContainerWrapper>
    </Section>
  );
};

export default Education;
