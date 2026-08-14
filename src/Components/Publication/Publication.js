import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { PublicationContainerWrapper } from "./PublicationStyled";
import { Section, SectionHeading, Reveal, GhostButton } from "../Shared";

const Publication = () => {
  return (
    <Section id="publication" tinted>
      <PublicationContainerWrapper>
        <SectionHeading eyebrowNumber="06" eyebrow="Publication" title="Publication" />

        <Reveal>
          <div className="publication-card">
            <span className="publication-icon-tile" aria-hidden="true">
              <FaFileAlt />
            </span>

            <div>
              <span className="publication-meta">IJRESM · May 2020</span>
              <h3 className="publication-title">Hyperloop Transportation System</h3>
              <p className="publication-desc">
                Published a research paper on the potential of Hyperloop as the 5th mode of transportation.
              </p>
            </div>

            <GhostButton
              className="publication-cta"
              href="https://www.ijresm.com/Vol.3_2020/Vol3_Iss5_May20/IJRESM_V3_I5_160.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read paper
            </GhostButton>
          </div>
        </Reveal>
      </PublicationContainerWrapper>
    </Section>
  );
};

export default Publication;
