import styled from "styled-components";

export const ProjectsContainerWrapper = styled.div`
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-5);
  }

  .project-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    transition: border-color var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out),
      box-shadow var(--dur-base) var(--ease-out);
  }

  @media (hover: hover) {
    .project-card:hover {
      border-color: var(--color-accent);
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }

    .project-card:hover .project-cover {
      transform: scale(1.03);
    }

    .project-card:hover .project-cover-icon {
      transform: scale(1.12) rotate(-4deg);
    }
  }

  .project-cover {
    aspect-ratio: 16 / 9;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform var(--dur-slow) var(--ease-out);
  }

  .project-cover-icon {
    font-size: 48px;
    color: var(--color-on-brand);
    opacity: 0.92;
    transition: transform var(--dur-base) var(--ease-out);
  }

  .project-body {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: var(--space-5);
    gap: var(--space-4);
  }

  .project-title {
    margin: 0;
    font-family: var(--font-display);
    font-size: var(--fs-lg);
    font-weight: 600;
    color: var(--color-text-primary);
  }

  .project-actions {
    margin-top: auto;
    display: flex;
    gap: var(--space-3);
  }

  .project-actions a {
    flex: 1;
    padding: 10px 16px;
    font-size: var(--fs-sm);
  }
`;

export default ProjectsContainerWrapper;
