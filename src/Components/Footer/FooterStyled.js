import styled from "styled-components";

export const FooterWrapper = styled.footer`
  border-top: 1px solid var(--color-border);
  padding-block: var(--space-7);

  .footer-inner {
    max-width: var(--content-max);
    margin-inline: auto;
    padding-inline: var(--gutter);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
    flex-wrap: wrap;
  }

  .copyright {
    font-size: var(--fs-sm);
    color: var(--color-text-tertiary);
  }

  .footer-right {
    display: flex;
    align-items: center;
    gap: var(--space-4);
  }

  .back-to-top {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: var(--radius-md);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    color: var(--color-text-secondary);
    font-size: 18px;
    transition: transform var(--dur-fast) var(--ease-out), border-color var(--dur-base) var(--ease-out),
      color var(--dur-base) var(--ease-out);
  }

  .back-to-top:active {
    transform: scale(0.94);
  }

  @media (hover: hover) {
    .back-to-top:hover {
      transform: translateY(-2px);
      border-color: var(--color-brand);
      color: var(--color-brand);
    }
  }

  @media screen and (max-width: 639.98px) {
    .footer-inner {
      flex-direction: column;
      text-align: center;
    }
  }
`;

export default FooterWrapper;
