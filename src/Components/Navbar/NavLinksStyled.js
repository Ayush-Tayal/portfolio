import styled from "styled-components";

export const NavLinksWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: var(--space-6);

  a {
    font-family: var(--font-body);
    font-size: var(--fs-sm);
    font-weight: 500;
    color: var(--color-text-secondary);
    padding: 6px 2px;
    position: relative;
    transition: color var(--dur-base) var(--ease-out);
  }

  a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: var(--color-brand);
    transition: width var(--dur-base) var(--ease-out);
  }

  a:hover,
  a.active {
    color: var(--color-text-primary);
  }

  a:hover::after,
  a.active::after {
    width: 100%;
  }
`;

export default NavLinksWrapper;
