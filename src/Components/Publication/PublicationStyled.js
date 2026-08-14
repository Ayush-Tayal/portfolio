import styled from "styled-components";

export const PublicationContainerWrapper = styled.div`
  .publication-card {
    display: grid;
    grid-template-columns: 56px 1fr auto;
    align-items: center;
    gap: var(--space-5);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-left: 3px solid var(--color-brand);
    border-radius: var(--radius-lg);
    padding: clamp(20px, 3vw, 32px);
    transition: border-color var(--dur-base) var(--ease-out);
  }

  .publication-icon-tile {
    width: 56px;
    height: 56px;
    border-radius: var(--radius-md);
    background: var(--color-brand-subtle);
    color: var(--color-brand);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    transition: transform var(--dur-base) var(--ease-out);
  }

  @media (hover: hover) {
    .publication-card:hover {
      border-color: var(--color-border-strong);
    }

    .publication-card:hover .publication-icon-tile {
      transform: scale(1.08) rotate(-4deg);
    }
  }

  .publication-meta {
    display: block;
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
    text-transform: uppercase;
    letter-spacing: var(--tracking-wide);
    color: var(--color-text-tertiary);
    margin-bottom: var(--space-2);
  }

  .publication-title {
    margin: 0 0 var(--space-2) 0;
    font-family: var(--font-display);
    font-size: var(--fs-xl);
    font-weight: 700;
    color: var(--color-text-primary);
  }

  .publication-desc {
    margin: 0;
    max-width: 70ch;
    color: var(--color-text-secondary);
    font-size: var(--fs-base);
    line-height: var(--lh-relaxed);
  }

  .publication-cta {
    white-space: nowrap;
  }

  @media screen and (max-width: 639.98px) {
    .publication-card {
      grid-template-columns: 1fr;
      text-align: left;
    }

    .publication-cta {
      width: 100%;
      text-align: center;
    }
  }
`;

export default PublicationContainerWrapper;
