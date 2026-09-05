import styled from "styled-components";

export const HomeContainerWrapper = styled.div`
  position: relative;

  .hero {
    min-height: calc(100svh - var(--nav-h));
    max-width: var(--content-max);
    margin-inline: auto;
    padding-inline: var(--gutter);
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: var(--space-8);
    padding-block: var(--space-8);
  }

  .hero-portrait {
    display: flex;
    justify-content: center;
  }

  .portrait-frame {
    position: relative;
    width: min(100%, clamp(280px, 80vw, 480px));
    transition: transform var(--dur-base) var(--ease-out);
  }

  /* Gradient ring so the portrait reads as a deliberate frame. */
  .portrait-frame::after {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: 2;
    border-radius: calc(var(--radius-xl) + 1px);
    padding: 1px;
    background: linear-gradient(135deg, var(--color-brand), var(--color-accent));
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    mask-composite: exclude;
    opacity: 0.55;
    pointer-events: none;
  }

  @media (hover: hover) {
    .portrait-frame:hover {
      transform: translateY(-4px);
    }
  }

  .portrait-glow {
    position: absolute;
    inset: -12%;
    background: radial-gradient(circle, var(--color-brand-subtle), transparent 70%);
    border-radius: var(--radius-xl);
    filter: blur(24px);
    z-index: 0;
  }

  .portrait-frame img {
    position: relative;
    z-index: 1;
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: var(--radius-xl);
    border: 1px solid var(--color-border);
    box-shadow: var(--shadow-lg);
  }

  .pill {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: 8px 16px;
    border-radius: var(--radius-full);
    background: var(--color-brand-subtle);
    color: var(--color-brand);
    border: 1px solid color-mix(in srgb, var(--color-brand) 30%, transparent);
    font-size: var(--fs-xs);
    font-weight: 600;
    letter-spacing: var(--tracking-wide);
    text-transform: uppercase;
    margin-bottom: var(--space-5);
  }

  .pill-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--color-brand);
  }

  .hero-name {
    margin: 0;
    font-family: var(--font-display);
    font-weight: 700;
    letter-spacing: var(--tracking-tight);
    line-height: var(--lh-tight);
    font-size: var(--fs-4xl);
  }

  .hero-name .lead {
    display: block;
    color: var(--color-text-secondary);
    font-size: 0.4em;
    font-weight: 600;
    margin-bottom: var(--space-2);
  }

  .Typewriter {
    margin-top: var(--space-4);
    min-height: 1.5em;
    font-family: var(--font-mono);
    font-size: var(--fs-xl);
    color: var(--color-text-secondary);
  }

  .Typewriter__cursor {
    color: var(--color-brand);
  }

  .cta-row {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-4);
    margin-top: var(--space-7);
  }

  .social-row {
    margin-top: var(--space-6);
  }

  .scroll_to_top {
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: var(--z-nav);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: var(--radius-full);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    color: var(--color-brand);
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    transform: translateY(8px);
    pointer-events: none;
    transition: opacity var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out),
      border-color var(--dur-base) var(--ease-out);
  }

  .scroll_to_top[data-visible="true"] {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  .scroll_to_top:hover {
    border-color: var(--color-brand);
  }

  @media screen and (min-width: 768px) {
    .hero {
      grid-template-columns: 1fr 1.05fr;
    }

    .hero-content {
      order: 1;
    }

    .hero-portrait {
      order: 2;
      justify-content: flex-end;
    }
  }
`;

export default HomeContainerWrapper;
