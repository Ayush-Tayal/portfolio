import styled from "styled-components";

export const NavbarWrapper = styled.div`
  .app-bar {
    background: ${({ $scrolled }) => ($scrolled ? "var(--color-surface-translucent)" : "transparent")};
    backdrop-filter: ${({ $scrolled }) => ($scrolled ? "saturate(180%) blur(12px)" : "none")};
    -webkit-backdrop-filter: ${({ $scrolled }) => ($scrolled ? "saturate(180%) blur(12px)" : "none")};
    border-bottom: 1px solid ${({ $scrolled }) => ($scrolled ? "var(--color-border)" : "transparent")};
    box-shadow: ${({ $scrolled }) => ($scrolled ? "var(--shadow-sm)" : "none")};
    transition: background-color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out),
      box-shadow var(--dur-base) var(--ease-out);
  }

  .toolbar {
    max-width: var(--content-max);
    width: 100%;
    margin-inline: auto;
    padding-inline: var(--gutter);
    height: ${({ $scrolled }) => ($scrolled ? "var(--nav-h-scrolled)" : "var(--nav-h)")};
    min-height: unset;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: height var(--dur-base) var(--ease-out);
  }

  .brand {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: var(--fs-lg);
    color: var(--color-text-primary);
    letter-spacing: var(--tracking-tight);
  }

  .toolbar-right {
    display: flex;
    align-items: center;
    gap: var(--space-5);
  }

  .hamburger-btn {
    color: var(--color-text-primary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    width: 40px;
    height: 40px;
    display: none;
    flex-shrink: 0;
  }

  @media screen and (max-width: 1023.98px) {
    nav {
      display: none;
    }
    .hamburger-btn {
      display: inline-flex;
    }
  }
`;

export default NavbarWrapper;
