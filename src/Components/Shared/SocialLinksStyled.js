import styled from "styled-components";

export const SocialLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);

  .social-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: var(--radius-md);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    color: var(--color-text-secondary);
    font-size: 20px;
    cursor: pointer;
    transition: transform var(--dur-fast) var(--ease-out), border-color var(--dur-base) var(--ease-out),
      color var(--dur-base) var(--ease-out);
  }

  .social-icon:active {
    transform: scale(0.94);
  }

  @media (hover: hover) {
    .social-icon:hover {
      transform: translateY(-2px);
      border-color: var(--color-border-strong);
    }

    .vendor-gmail:hover {
      color: var(--vendor-gmail);
    }
    .vendor-phone:hover {
      color: var(--vendor-phone);
    }
    .vendor-whatsapp:hover {
      color: var(--vendor-whatsapp);
    }
    .vendor-linkedin:hover {
      color: var(--vendor-linkedin);
    }
    .vendor-github:hover {
      color: var(--vendor-github);
    }
  }
`;

export default SocialLinksWrapper;
