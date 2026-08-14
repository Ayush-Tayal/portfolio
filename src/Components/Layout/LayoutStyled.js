import styled from "styled-components";

export const LayoutWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;

  main {
    position: relative;
    z-index: 1;
    padding-top: var(--nav-h);
  }
`;

export const AmbientGlow = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image:
    radial-gradient(600px circle at 12% 8%, var(--color-brand-subtle), transparent 60%),
    radial-gradient(560px circle at 88% 28%, var(--color-accent) 0%, transparent 55%);
  opacity: 0.55;

  :root[data-theme="light"] & {
    opacity: 0.35;
  }
`;

export default LayoutWrapper;
