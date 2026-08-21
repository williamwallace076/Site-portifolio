import styled, { keyframes } from "styled-components";

const infiniteScroll = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(calc(-50% - 0.5rem));
  }
`;

export const AboutMeSection = styled.section`
  width: min(1600px, calc(100% - 2rem));
  margin: 0 auto;
  padding: 2rem 0 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (max-width: 480px) {
    width: min(1600px, calc(100% - 1rem));
  }
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 1.5rem;
  align-items: stretch;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutText = styled.div`
  padding: clamp(1.25rem, 3vw, 2rem);
  border-radius: 2rem;
  background: linear-gradient(180deg, rgba(10, 18, 38, 0.92) 0%, rgba(6, 11, 24, 0.88) 100%);
  border: 1px solid rgba(123, 151, 255, 0.12);

  h2 {
    margin: 0 0 1rem;
    max-width: 12ch;
    color: var(--text-primary);
    font-family: var(--font-display);
    font-size: clamp(2rem, 4vw, 3.2rem);
    line-height: 1;
    letter-spacing: -0.04em;
  }

  @media screen and (max-width: 520px) {
    border-radius: 1.5rem;

    h2 {
      max-width: none;
    }
  }
`;

export const SectionTag = styled.span`
  display: inline-flex;
  margin-bottom: 1.25rem;
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  background: rgba(62, 115, 255, 0.12);
  color: var(--accent-soft);
  text-transform: uppercase;
  font-size: 0.76rem;
  letter-spacing: 0.14em;
`;

export const SectionLead = styled.p`
  max-width: 35rem;
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.8;
`;

export const HighlightList = styled.div`
  display: grid;
  grid-template-rows: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  min-height: 100%;

  .reveal-on-scroll {
    height: 100%;
  }

  @media screen and (max-width: 900px) {
    grid-template-rows: none;
  }
`;

export const HighlightCard = styled.article`
  height: 100%;
  padding: clamp(1.15rem, 2vw, 1.5rem);
  border-radius: 1.6rem;
  border: 1px solid rgba(123, 151, 255, 0.12);
  background:
    radial-gradient(circle at top right, rgba(62, 115, 255, 0.12), transparent 35%),
    rgba(7, 12, 24, 0.88);
  display: grid;
  grid-template-columns: 3rem 1fr;
  gap: 1rem;
  align-content: center;

  svg {
    margin-top: 0.2rem;
    color: var(--accent);
    font-size: 1.3rem;
  }

  h3 {
    margin: 0 0 0.45rem;
    color: var(--text-primary);
    font-size: clamp(1.15rem, 2vw, 1.35rem);
  }

  p {
    margin: 0;
    color: var(--text-muted);
    font-size: clamp(1rem, 1.4vw, 1.08rem);
    line-height: 1.7;
  }

  @media screen and (max-width: 420px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

export const TimelineViewport = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: clamp(1.5rem, 7vw, 5rem);
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(90deg, rgba(4, 9, 19, 1) 0%, rgba(4, 9, 19, 0) 100%);
  }

  &::after {
    right: 0;
    background: linear-gradient(270deg, rgba(4, 9, 19, 1) 0%, rgba(4, 9, 19, 0) 100%);
  }
`;

export const Timeline = styled.div`
  overflow: hidden;
`;

export const TimelineTrack = styled.div`
  width: max-content;
  display: flex;
  gap: 1rem;
  animation: ${infiniteScroll} 34s linear infinite;
  will-change: transform;

  > .reveal-on-scroll {
    flex: 0 0 22rem;
  }

  ${TimelineViewport}:hover & {
    animation-play-state: paused;
  }

  @media screen and (max-width: 768px) {
    > .reveal-on-scroll {
      flex-basis: 19rem;
    }
  }

  @media screen and (max-width: 480px) {
    > .reveal-on-scroll {
      flex-basis: min(16.5rem, calc(100vw - 2.5rem));
    }
  }

  @media screen and (max-width: 340px) {
    > .reveal-on-scroll {
      flex-basis: min(15.5rem, calc(100vw - 1.5rem));
    }
  }
`;

export const TimelineCard = styled.article`
  position: relative;
  width: 100%;
  min-height: 16rem;
  padding: clamp(1.1rem, 2vw, 1.5rem);
  border-radius: 1.7rem;
  border: 1px solid rgba(123, 151, 255, 0.1);
  background: rgba(5, 9, 18, 0.86);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: auto auto 0 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, rgba(62, 115, 255, 0.82), transparent);
  }

  h3 {
    margin: 0 0 0.8rem;
    color: var(--text-primary);
    font-size: 1.04rem;
  }

  p {
    margin: 0;
    color: var(--text-muted);
    line-height: 1.7;
  }

  @media screen and (max-width: 768px) {
    min-height: 17rem;
  }

  @media screen and (max-width: 480px) {
    min-height: 18rem;
  }
`;

export const TimelineYear = styled.span`
  display: inline-flex;
  margin-bottom: 1rem;
  color: var(--accent-soft);
  font-size: 0.92rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`;
