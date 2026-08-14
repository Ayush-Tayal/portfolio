import styled, { css } from "styled-components";

const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-size: var(--fs-sm);
  font-weight: 600;
  padding: 13px 24px;
  border-radius: var(--radius-md);
  cursor: pointer;
  border: 1px solid transparent;
  transition: transform var(--dur-fast) var(--ease-out), background-color var(--dur-base) var(--ease-out),
    border-color var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out);

  @media (hover: hover) {
    &:hover {
      transform: translateY(-1px);
    }
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const PrimaryButton = styled.a`
  ${buttonBase}
  background: var(--color-brand);
  color: var(--color-on-brand);

  &:hover {
    background: var(--color-brand-hover);
  }
`;

export const GhostButton = styled.a`
  ${buttonBase}
  background: transparent;
  color: var(--color-text-primary);
  border-color: var(--color-border-strong);

  &:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
  }
`;

export default PrimaryButton;
