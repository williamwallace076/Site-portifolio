import styled from "styled-components";

export const ContactMeSection = styled.section`
  width: min(1600px, calc(100% - 2rem));
  margin: 0 auto;
  padding: 1rem 0 5rem;

  @media screen and (max-width: 480px) {
    width: min(1600px, calc(100% - 1rem));
  }
`;

export const ContactArea = styled.div`
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 1.2rem;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactInfoArea = styled.div`
  padding: clamp(1.2rem, 3vw, 2rem);
  border-radius: 2rem;
  border: 1px solid rgba(123, 151, 255, 0.12);
  background:
    radial-gradient(circle at top left, rgba(62, 115, 255, 0.14), transparent 34%),
    rgba(6, 11, 23, 0.9);

  @media screen and (max-width: 520px) {
    border-radius: 1.5rem;
  }
`;

export const ContactInfoAreaHeader = styled.div`
  max-width: 30rem;

  h2 {
    margin: 0 0 1rem;
    color: var(--text-primary);
    font-family: var(--font-display);
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.05;
    letter-spacing: -0.04em;
  }

  p {
    margin: 0;
    color: var(--text-secondary);
    line-height: 1.8;
  }
`;

export const ContactInfo = styled.div`
  margin-top: 2rem;
`;

export const ContactList = styled.div`
  display: grid;
  gap: 1rem;
`;

export const ItemContactList = styled.div`
  padding: 1rem 1.1rem;
  border-radius: 1.35rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(123, 151, 255, 0.08);
  display: grid;
  grid-template-columns: 1.5rem 1fr;
  gap: 1rem;
  align-items: start;

  svg {
    margin-top: 0.25rem;
    color: var(--accent);
  }

  @media screen and (max-width: 360px) {
    grid-template-columns: 1fr;
    gap: 0.65rem;
  }
`;

export const ItemContactInfo = styled.div`
  h3 {
    margin: 0 0 0.3rem;
    color: var(--text-primary);
    font-size: 1rem;
  }

  p {
    margin: 0;
    color: var(--text-muted);
    line-height: 1.65;
  }
`;

export const ContactTextLink = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.25s ease;

  &:hover {
    color: var(--text-primary);
  }
`;
