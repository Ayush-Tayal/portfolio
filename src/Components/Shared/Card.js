import styled, { css } from "styled-components";

export const Card = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: clamp(20px, 3vw, 32px);
  box-shadow: var(--shadow-ring);
  transition: border-color var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out),
    box-shadow var(--dur-base) var(--ease-out);

  ${({ $interactive }) =>
    $interactive &&
    css`
      @media (hover: hover) {
        &:hover {
          border-color: var(--color-accent);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md), var(--shadow-ring);
        }
      }
    `}

  ${({ $hoverBorder }) =>
    $hoverBorder &&
    css`
      &:hover {
        border-color: var(--color-border-strong);
      }
    `}
`;

export default Card;
