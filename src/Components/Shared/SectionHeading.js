import React from "react";
import Reveal from "./Reveal";
import { HeadingWrapper } from "./SectionHeadingStyled";

const SectionHeading = ({ eyebrowNumber, eyebrow, title, subtitle }) => (
  <HeadingWrapper>
    <Reveal as="div" className="eyebrow-row">
      <span className="eyebrow-number">{eyebrowNumber}</span>
      <span className="eyebrow-rule" aria-hidden="true" />
      <span className="eyebrow-label">{eyebrow}</span>
    </Reveal>
    <Reveal as="h2" delay={60}>
      {title}
    </Reveal>
    {subtitle && (
      <Reveal as="p" delay={120} className="subtitle">
        {subtitle}
      </Reveal>
    )}
  </HeadingWrapper>
);

export default SectionHeading;
