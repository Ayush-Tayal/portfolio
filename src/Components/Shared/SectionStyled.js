import styled from "styled-components";

export const SectionOuter = styled.section`
  position: relative;
  padding-block: var(--section-py);
  background: ${({ $tinted }) => ($tinted ? "var(--color-bg-elevated)" : "transparent")};
  transition: background-color var(--dur-base) var(--ease-out);
`;

export const SectionInner = styled.div`
  max-width: var(--content-max);
  margin-inline: auto;
  padding-inline: var(--gutter);
`;

export default SectionOuter;
