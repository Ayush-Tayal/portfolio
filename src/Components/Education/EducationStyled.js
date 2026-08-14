import styled from "styled-components";

export const EducationContainerWrapper = styled.div`
  .education-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: var(--space-5);
    align-items: stretch;
  }

  .education-card {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    height: 100%;
    text-align: left;
  }

  .education-icon-tile {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: var(--radius-md);
    background: var(--color-brand-subtle);
    color: var(--color-brand);
    font-size: 20px;
    margin-bottom: var(--space-4);
    transition: transform var(--dur-base) var(--ease-out);
  }

  @media (hover: hover) {
    .education-card:hover .education-icon-tile {
      transform: scale(1.08) rotate(-4deg);
    }
  }

  .education-degree {
    margin: 0 0 var(--space-2) 0;
    font-family: var(--font-display);
    font-size: var(--fs-lg);
    font-weight: 600;
    color: var(--color-text-primary);
  }

  .education-institution {
    margin: 0;
    color: var(--color-text-secondary);
    font-size: var(--fs-sm);
    line-height: var(--lh-relaxed);
  }

  .education-years {
    align-self: flex-start;
    margin-top: auto;
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
    color: var(--color-text-tertiary);
    background: var(--color-bg-elevated);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
    padding: 4px 12px;
  }
`;

export default EducationContainerWrapper;
