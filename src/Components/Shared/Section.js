import React from "react";
import { SectionOuter, SectionInner } from "./SectionStyled";

const Section = ({ id, tinted = false, children, className }) => (
  <SectionOuter id={id} $tinted={tinted} className={className}>
    <SectionInner>{children}</SectionInner>
  </SectionOuter>
);

export default Section;
