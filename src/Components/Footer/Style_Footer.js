import styled from "styled-components";

export const FooterArea = styled.footer`
  width: min(1600px, calc(100% - 2rem));
  margin: 0 auto 2rem;
  padding: 1.5rem;
  border: 1px solid rgba(123, 151, 255, 0.12);
  border-radius: 1.75rem;
  background: rgba(5, 9, 18, 0.9);
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 1rem;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: start;
  }

  @media screen and (max-width: 480px) {
    width: min(1600px, calc(100% - 1rem));
    padding: 1.15rem;
    border-radius: 1.35rem;
  }
`;

export const FooterMeta = styled.div`
  strong {
    display: block;
    margin-bottom: 0.35rem;
    color: var(--text-primary);
    font-family: var(--font-display);
  }

  span {
    color: var(--text-muted);
    line-height: 1.6;
  }
`;

export const FooterSosialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

export const FooterLink = styled.a`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 999px;
  border: 1px solid rgba(123, 151, 255, 0.14);
  background: rgba(255, 255, 255, 0.03);
  color: var(--text-secondary);
  display: grid;
  place-items: center;
  transition: transform 0.25s ease, color 0.25s ease;

  &:hover {
    color: var(--text-primary);
    transform: translateY(-2px);
  }
`;

export const FooterParagraph = styled.p`
  margin: 0;
  color: var(--text-muted);
  font-size: 0.92rem;
`;
