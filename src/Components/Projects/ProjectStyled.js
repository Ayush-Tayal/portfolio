import styled from "styled-components";

export const ProjectsContainerWrapper = styled.div`
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-5);
    align-items: stretch;
  }

  .project-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-align: left;
  }

  @media (hover: hover) {
    .project-card:hover .project-icon-tile {
      transform: scale(1.08) rotate(-4deg);
    }
  }

  .project-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--space-3);
    margin-bottom: var(--space-4);
  }

  .project-icon-tile {
    --tile-accent: var(--color-brand);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: var(--radius-md);
    background: color-mix(in srgb, var(--tile-accent) 16%, var(--color-surface));
    color: var(--tile-accent);
    font-size: 22px;
    transition: transform var(--dur-base) var(--ease-out);
  }

  .project-links {
    display: flex;
    gap: var(--space-2);
    padding-top: 2px;
  }

  .project-links a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border);
    color: var(--color-text-secondary);
    font-size: 16px;
    transition: border-color var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out),
      transform var(--dur-fast) var(--ease-out);
  }

  @media (hover: hover) {
    .project-links a:hover {
      border-color: var(--color-accent);
      color: var(--color-accent);
      transform: translateY(-2px);
    }
  }

  .project-links a:active {
    transform: scale(0.94);
  }

  .project-title {
    margin: 0 0 var(--space-2) 0;
    font-family: var(--font-display);
    font-size: var(--fs-lg);
    font-weight: 600;
    color: var(--color-text-primary);
  }

  .project-desc {
    margin: 0;
    font-size: var(--fs-sm);
    line-height: var(--lh-relaxed);
    color: var(--color-text-secondary);
  }

  .project-tags {
    list-style: none;
    margin: auto 0 0;
    padding: var(--space-4) 0 0;
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
  }

  .project-tags li {
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
    color: var(--color-text-tertiary);
    background: var(--color-bg-elevated);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
    padding: 4px 10px;
  }
`;

export default ProjectsContainerWrapper;
