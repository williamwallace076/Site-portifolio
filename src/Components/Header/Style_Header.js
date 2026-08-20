import styled from "styled-components";

export const HeaderShell = styled.header`
  position: sticky;
  top: 0;
  z-index: 30;
  padding: 1rem clamp(0.5rem, 2vw, 1.5rem) 0;
  background: linear-gradient(
    180deg,
    rgba(4, 10, 22, 0.88) 0%,
    rgba(4, 10, 22, 0.45) 70%,
    transparent 100%
  );
  backdrop-filter: blur(18px);
`;

export const HeaderArea = styled.div`
  width: min(1600px, 100%);
  margin: 0 auto;
  min-height: 4.25rem;
  padding: 0.85rem clamp(0.9rem, 2vw, 1.2rem);
  border: 1px solid rgba(113, 155, 255, 0.16);
  border-radius: 999px;
  background: rgba(8, 15, 31, 0.76);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.22);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    border-radius: 1.4rem;
  }

  @media screen and (max-width: 600px) {
    padding: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media screen and (max-width: 360px) {
    border-radius: 1.2rem;
  }
`;

export const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: var(--text-primary);
  text-decoration: none;

  strong {
    display: block;
    font-size: 1.08rem;
    font-family: var(--font-display);
    letter-spacing: 0.06em;
    line-height: 1;
  }

  @media screen and (max-width: 360px) {
    strong {
      font-size: 0.96rem;
    }
  }
`;

export const BrandIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  transform: translateY(1px);

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  @media screen and (max-width: 768px) {
    order: 3;
    width: 100%;
    justify-content: center;
    padding-top: 0.25rem;
  }

  @media screen and (max-width: 420px) {
    gap: 0.9rem;
    flex-wrap: wrap;
  }
`;

export const NavLink = styled.a`
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.92rem;
  transition: color 0.25s ease, transform 0.25s ease;

  &:hover {
    color: var(--text-primary);
    transform: translateY(-1px);
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

export const SocialLink = styled.a`
  width: 2.8rem;
  height: 2.8rem;
  border: 1px solid rgba(137, 166, 255, 0.16);
  border-radius: 999px;
  display: grid;
  place-items: center;
  color: var(--text-secondary);
  background: rgba(255, 255, 255, 0.03);
  transition: transform 0.25s ease, border-color 0.25s ease, color 0.25s ease;

  &:hover {
    color: var(--text-primary);
    border-color: rgba(104, 150, 255, 0.55);
    transform: translateY(-2px);
  }
`;
