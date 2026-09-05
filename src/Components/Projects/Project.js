import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import ProjectsData from "./Projects_Data";
import { ProjectsContainerWrapper } from "./ProjectStyled";
import { Section, SectionHeading, Reveal, Card } from "../Shared";

const Project = () => {
  return (
    <Section id="projects">
      <ProjectsContainerWrapper>
        <SectionHeading eyebrowNumber="05" eyebrow="Projects" title="Projects" />

        <div className="projects-grid">
          {ProjectsData.map((project, index) => {
            const CoverIcon = project.Icon || BsCodeSlash;
            return (
              <Reveal key={project.id} delay={index * 90}>
                <Card as="article" $hoverBorder className="project-card">
                  <div className="project-head">
                    <span
                      className="project-icon-tile"
                      style={project.accent ? { "--tile-accent": project.accent } : undefined}
                    >
                      <CoverIcon aria-hidden="true" />
                    </span>
                    <div className="project-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} source code on GitHub`}
                      >
                        <FiGithub aria-hidden="true" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                      >
                        <FiArrowUpRight aria-hidden="true" />
                      </a>
                    </div>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  {project.desc && <p className="project-desc">{project.desc}</p>}

                  {project.tags && (
                    <ul className="project-tags">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  )}
                </Card>
              </Reveal>
            );
          })}
        </div>
      </ProjectsContainerWrapper>
    </Section>
  );
};

export default Project;
