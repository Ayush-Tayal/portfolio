import styled from "styled-components";

export const ExperienceContainerWrapper = styled.div`
  .timeline {
    position: relative;
    list-style: none;
    margin: 0;
    padding: 0 0 0 36px;
  }

  .timeline::before {
    content: "";
    position: absolute;
    left: 17px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: linear-gradient(to bottom, var(--color-border-strong), transparent);
  }

  .timeline-item {
    position: relative;
    margin-bottom: var(--space-7);
  }

  .timeline-item:last-child {
    margin-bottom: 0;
  }

  .timeline-node {
    position: absolute;
    left: -25px;
    top: 26px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--color-bg);
    border: 2px solid var(--color-border-strong);
    z-index: 1;
  }

  .timeline-node.current {
    background: var(--color-brand);
    border-color: var(--color-brand);
    box-shadow: 0 0 0 4px var(--color-brand-subtle);
  }

  .timeline-meta {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
    color: var(--color-text-tertiary);
    text-transform: uppercase;
    letter-spacing: var(--tracking-wide);
    margin-bottom: var(--space-3);
  }

  .timeline-role {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-2);
    margin: 0 0 var(--space-4) 0;
    font-family: var(--font-display);
    font-size: var(--fs-xl);
    font-weight: 700;
    color: var(--color-text-primary);
  }

  .role-divider {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--color-text-tertiary);
  }

  .role {
    font-weight: 500;
    color: var(--color-text-secondary);
    font-size: var(--fs-lg);
  }

  .current-pill {
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: var(--tracking-wide);
    color: var(--color-brand);
    background: var(--color-brand-subtle);
    border-radius: var(--radius-full);
    padding: 3px 10px;
  }

  .timeline-bullets {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .timeline-bullets li {
    position: relative;
    padding-left: var(--space-5);
    line-height: var(--lh-relaxed);
    color: var(--color-text-secondary);
    font-size: var(--fs-base);
  }

  .timeline-bullets li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.65em;
    width: 6px;
    height: 6px;
    border-radius: 2px;
    background: var(--color-brand-subtle);
    border: 1px solid var(--color-brand);
  }
`;

export default ExperienceContainerWrapper;
