import React from "react";
import { BsCart3, BsChatDotsFill } from "react-icons/bs";
import { WiDaySunny } from "react-icons/wi";
import ProjectsData from "./Projects_Data";
import { ProjectsContainerWrapper } from "./ProjectStyled";
import { Section, SectionHeading, Reveal, PrimaryButton, GhostButton } from "../Shared";

const COVERS = {
  1: {
    Icon: BsCart3,
    gradient:
      "repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0 2px, transparent 2px 10px), linear-gradient(135deg, var(--color-brand) 0%, var(--color-accent) 100%)",
  },
  2: {
    Icon: WiDaySunny,
    gradient:
      "repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0 2px, transparent 2px 10px), linear-gradient(135deg, var(--color-accent) 0%, var(--color-brand-hover) 100%)",
  },
  3: {
    Icon: BsChatDotsFill,
    gradient:
      "repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0 2px, transparent 2px 10px), linear-gradient(135deg, var(--color-brand-hover) 0%, var(--color-accent) 100%)",
  },
};

const Project = () => {
  return (
    <Section id="projects">
      <ProjectsContainerWrapper>
        <SectionHeading eyebrowNumber="05" eyebrow="Projects" title="Projects" />

        <div className="projects-grid">
          {ProjectsData.map((project, index) => {
            const cover = COVERS[project.id];
            return (
              <Reveal key={project.id} delay={index * 90}>
                <article className="project-card">
                  <div className="project-cover" style={{ backgroundImage: cover.gradient }}>
                    <cover.Icon className="project-cover-icon" aria-hidden="true" />
                  </div>
                  <div className="project-body">
                    <h3 className="project-title">{project.title}</h3>
                    {project.desc && <p>{project.desc}</p>}
                    <div className="project-actions">
                      <GhostButton href={project.github} target="_blank" rel="noopener noreferrer">
                        Code
                      </GhostButton>
                      <PrimaryButton href={project.live} target="_blank" rel="noopener noreferrer">
                        Live demo
                      </PrimaryButton>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </ProjectsContainerWrapper>
    </Section>
  );
};

export default Project;
