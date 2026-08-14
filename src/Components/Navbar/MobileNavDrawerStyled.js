import styled from "styled-components";

export const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  color: var(--color-text-primary);

  .drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-4);
  }

  .brand {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: var(--fs-lg);
  }

  a {
    color: var(--color-text-primary);
    font-family: var(--font-body);
  }
`;

export default DrawerContent;
