import styled from "styled-components";

export const AboutContainerWrapper = styled.div`
  .about-grid {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: var(--space-7);
  }

  .about-copy p {
    max-width: 62ch;
    text-align: left;
    font-size: var(--fs-lg);
    line-height: var(--lh-relaxed);
    color: var(--color-text-secondary);
    margin: 0 0 var(--space-4) 0;
  }

  .about-copy strong {
    color: var(--color-text-primary);
    font-weight: 600;
  }

  .about-image {
    display: flex;
    justify-content: center;
    position: relative;
  }

  .about-image img {
    position: relative;
    z-index: 1;
    height: clamp(160px, 32vw, 380px);
    width: auto;
    object-fit: contain;
  }

  .about-image-glow {
    position: absolute;
    inset: 10%;
    background: radial-gradient(circle, var(--color-brand-subtle), transparent 70%);
    filter: blur(4px);
    z-index: 0;
  }

  @media screen and (min-width: 768px) {
    .about-grid {
      grid-template-columns: 1fr 0.8fr;
    }
  }
`;

export default AboutContainerWrapper;
