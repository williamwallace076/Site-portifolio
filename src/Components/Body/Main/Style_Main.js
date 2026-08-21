import styled, { keyframes } from "styled-components";

const blinking = keyframes`
  50% {
    opacity: 0;
  }
`;

export const HeroSection = styled.section`
  width: min(1600px, calc(100% - 2rem));
  min-height: calc(100vh - 7rem);
  margin: 0 auto;
  padding: clamp(2.25rem, 4vw, 4.5rem) 0 3rem;
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(18rem, 0.85fr);
  gap: clamp(1.5rem, 3vw, 3rem);
  align-items: center;
  position: relative;

  @media screen and (max-width: 1180px) {
    grid-template-columns: minmax(0, 1fr) minmax(16rem, 0.92fr);
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  @media screen and (max-width: 480px) {
    width: min(1600px, calc(100% - 1rem));
  }
`;

export const HeroContent = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  h1 {
    margin: 0;
    max-width: 12.5ch;
    font-family: var(--font-display);
    font-size: clamp(2.35rem, 7vw, 6rem);
    line-height: 0.98;
    letter-spacing: -0.05em;
    color: var(--text-primary);
  }

  @media screen and (max-width: 520px) {
    gap: 1.15rem;

    h1 {
      max-width: none;
    }
  }
`;

export const TypingIntro = styled.div`
  display: inline-flex;
  align-items: baseline;
  width: fit-content;
  max-width: 100%;
  min-height: 1.2em;
  color: var(--text-primary);
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  line-height: 1.1;
  letter-spacing: -0.04em;

  @media screen and (max-width: 900px) {
    max-width: 100%;
  }

  @media screen and (max-width: 520px) {
    width: 100%;
    min-height: auto;
    flex-wrap: wrap;
  }
`;

export const Cursor = styled.span`
  display: inline-block;
  margin-left: 0.05em;
  color: var(--text-primary);
  animation: ${blinking} 0.7s step-end infinite;
`;

export const Eyebrow = styled.span`
  width: fit-content;
  padding: 0.55rem 0.95rem;
  border: 1px solid rgba(107, 147, 255, 0.22);
  border-radius: 999px;
  background: rgba(17, 29, 61, 0.8);
  color: var(--accent-soft);
  text-transform: uppercase;
  font-size: 0.78rem;
  letter-spacing: 0.14em;

  @media screen and (max-width: 420px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.68rem;
    letter-spacing: 0.1em;
  }
`;

export const Highlight = styled.span`
  color: var(--accent);
  text-shadow: 0 0 30px rgba(60, 109, 255, 0.32);
`;

export const HeroDescription = styled.p`
  max-width: 38rem;
  margin: 0;
  color: var(--text-secondary);
  font-size: clamp(0.98rem, 1.4vw, 1.08rem);
  line-height: 1.8;
`;

export const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media screen and (max-width: 420px) {
    gap: 0.75rem;
  }
`;

const ButtonBase = styled.a`
  min-width: 10rem;
  padding: 0.95rem 1.35rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media screen and (max-width: 420px) {
    width: 100%;
    min-width: 0;
  }
`;

export const PrimaryButton = styled(ButtonBase)`
  color: #f6f9ff;
  background: linear-gradient(135deg, #3e73ff 0%, #1f4dd8 100%);
  box-shadow: 0 18px 35px rgba(33, 86, 255, 0.28);

  &:hover {
    box-shadow: 0 24px 45px rgba(33, 86, 255, 0.38);
  }
`;

export const SecondaryButton = styled(ButtonBase)`
  color: var(--text-primary);
  border: 1px solid rgba(124, 154, 255, 0.2);
  background: rgba(255, 255, 255, 0.04);
`;

export const StackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  @media screen and (max-width: 420px) {
    gap: 0.6rem;
  }
`;

export const StackChip = styled.span`
  padding: 0.65rem 0.95rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(130, 156, 255, 0.12);
  color: var(--text-secondary);
  font-size: 0.92rem;
  cursor: pointer;
  transition:
    background-color 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    background: ${({ $hoverBackground }) => $hoverBackground || "rgba(255, 255, 255, 0.08)"};
    border-color: ${({ $hoverBorder }) => $hoverBorder || "rgba(255, 255, 255, 0.22)"};
    color: ${({ $hoverColor }) => $hoverColor || "var(--text-primary)"};
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 420px) {
    padding: 0.55rem 0.8rem;
    font-size: 0.84rem;
  }
`;

export const VisualColumn = styled.div`
  min-width: 0;
  position: relative;
  min-height: clamp(18rem, 40vw, 32rem);
  display: grid;
  place-items: center;

  @media screen and (max-width: 900px) {
    min-height: 24rem;
  }

  @media screen and (max-width: 420px) {
    min-height: 18rem;
  }
`;

export const ProfileOrb = styled.div`
  width: min(34rem, 84vw);
  aspect-ratio: 1;
  border-radius: 2.5rem;
  padding: clamp(0.7rem, 2vw, 1rem);
  position: relative;
  background:
    radial-gradient(circle at top, rgba(63, 120, 255, 0.32), transparent 55%),
    linear-gradient(180deg, rgba(9, 18, 39, 0.96) 0%, rgba(3, 8, 19, 0.92) 100%);
  border: 1px solid rgba(118, 151, 255, 0.16);
  box-shadow: 0 35px 90px rgba(0, 0, 0, 0.36);

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    filter: blur(2px);
  }

  &::before {
    width: 10rem;
    height: 10rem;
    top: -2.5rem;
    right: -1.5rem;
    background: rgba(52, 118, 255, 0.2);
  }

  &::after {
    width: 7rem;
    height: 7rem;
    bottom: -1rem;
    left: -1rem;
    background: rgba(255, 255, 255, 0.06);
  }

  @media screen and (max-width: 420px) {
    border-radius: 1.8rem;

    &::before {
      width: 6rem;
      height: 6rem;
      top: -1rem;
      right: -0.5rem;
    }

    &::after {
      width: 4rem;
      height: 4rem;
      bottom: -0.5rem;
      left: -0.4rem;
    }
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 1.9rem;
  filter: grayscale(0.12) contrast(1.05);

  @media screen and (max-width: 420px) {
    border-radius: 1.35rem;
  }
`;

export const ScrollCue = styled.a`
  position: absolute;
  left: 0;
  bottom: 0.4rem;
  color: var(--text-muted);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.78rem;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
