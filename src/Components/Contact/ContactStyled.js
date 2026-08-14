import styled from "styled-components";

export const ContactContainerWrapper = styled.div`
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-6);
    align-items: stretch;
  }

  .contact-map-col {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  #google-map iframe {
    width: 100%;
    aspect-ratio: 16 / 10;
    border-radius: var(--radius-lg);
    border: 1px solid var(--color-border);
    filter: var(--map-filter);
  }

  .contact-quick-links {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-4);
    font-size: var(--fs-sm);
    color: var(--color-text-secondary);
  }

  .contact-quick-links a {
    color: var(--color-brand);
    font-weight: 500;
  }

  .contact-quick-links a:hover {
    color: var(--color-brand-hover);
  }

  .contact-form-card {
    display: flex;
    flex-direction: column;
  }

  #contact-me form {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  .form-row-split {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  .form-field {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .form-field label {
    font-size: var(--fs-sm);
    font-weight: 500;
    color: var(--color-text-secondary);
  }

  #contact-me input,
  #contact-me textarea {
    width: 100%;
    padding: 14px 16px;
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border);
    background: var(--color-bg-elevated);
    color: var(--color-text-primary);
    font-family: inherit;
    font-size: var(--fs-base);
    transition: border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
  }

  #contact-me input::placeholder,
  #contact-me textarea::placeholder {
    color: var(--color-text-tertiary);
  }

  #contact-me input:focus-visible,
  #contact-me textarea:focus-visible {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px var(--color-brand-subtle);
  }

  #contact-me textarea {
    min-height: 140px;
    resize: vertical;
  }

  #send-message {
    margin-top: var(--space-2);
  }

  #send-message a {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    .contact-grid {
      grid-template-columns: 0.9fr 1.1fr;
    }
  }

  @media screen and (min-width: 640px) {
    .form-row-split {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default ContactContainerWrapper;
