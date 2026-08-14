import styled from "styled-components";

export const SkillsContainerWrapper = styled.div`
  .skill-groups {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
  }

  .skill-group-label {
    display: block;
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
    text-transform: uppercase;
    letter-spacing: var(--tracking-wide);
    color: var(--color-text-tertiary);
    font-weight: 600;
    margin-bottom: var(--space-4);
  }

  .skill-chips {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
  }

  .skill-chip {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: 10px 16px;
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border);
    background: var(--color-surface);
    transition: border-color var(--dur-base) var(--ease-out), background-color var(--dur-base) var(--ease-out),
      transform var(--dur-base) var(--ease-out);
  }

  .skill-chip-icon {
    font-size: 18px;
    color: var(--color-text-secondary);
    transition: color var(--dur-base) var(--ease-out);
  }

  .skill-chip-label {
    font-size: var(--fs-sm);
    font-weight: 500;
    color: var(--color-text-primary);
  }

  @media (hover: hover) {
    .skill-chip:hover {
      border-color: var(--color-border-strong);
      background: var(--color-surface-hover);
      transform: translateY(-1px);
    }

    .skill-chip:hover .skill-chip-icon {
      color: var(--chip-vendor, var(--color-brand));
    }
  }
`;

export default SkillsContainerWrapper;
