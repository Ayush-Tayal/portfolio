import styled from "styled-components";

export const HeadingWrapper = styled.div`
  max-width: 720px;
  margin-bottom: var(--space-7);

  .eyebrow-row {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    margin-bottom: var(--space-3);
  }

  .eyebrow-number {
    font-family: var(--font-mono);
    font-size: var(--fs-sm);
    color: var(--color-brand);
    letter-spacing: var(--tracking-wide);
  }

  .eyebrow-rule {
    width: 32px;
    height: 1px;
    background: var(--color-border-strong);
  }

  .eyebrow-label {
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
    text-transform: uppercase;
    letter-spacing: var(--tracking-wide);
    color: var(--color-text-tertiary);
    font-weight: 600;
  }

  h2 {
    margin: 0;
    font-family: var(--font-display);
    font-size: var(--fs-3xl);
    font-weight: 700;
    letter-spacing: var(--tracking-tight);
    line-height: var(--lh-tight);
    color: var(--color-text-primary);
  }

  .subtitle {
    margin: var(--space-3) 0 0;
    max-width: 56ch;
    color: var(--color-text-secondary);
    font-size: var(--fs-lg);
    line-height: var(--lh-relaxed);
  }
`;

export default HeadingWrapper;
