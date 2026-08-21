import styled from "styled-components";

export const ProjectsSection = styled.section`
  width: min(1600px, calc(100% - 2rem));
  margin: 0 auto;
  padding: 1rem 0 5rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  @media screen and (max-width: 480px) {
    width: min(1600px, calc(100% - 1rem));
  }
`;

export const ProjectHeader = styled.div`
  max-width: 48rem;

  h2 {
    margin: 0 0 1rem;
    color: var(--text-primary);
    font-family: var(--font-display);
    font-size: clamp(2rem, 4vw, 3.2rem);
    line-height: 1.02;
    letter-spacing: -0.04em;
  }
`;

export const SectionTag = styled.span`
  display: inline-flex;
  margin-bottom: 1rem;
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  background: rgba(62, 115, 255, 0.12);
  color: var(--accent-soft);
  text-transform: uppercase;
  font-size: 0.76rem;
  letter-spacing: 0.14em;
`;

export const SectionLead = styled.p`
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.8;
`;

export const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

export const ProjectFeature = styled.article`
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 1.4rem;
  padding: clamp(1rem, 2vw, 1.35rem);
  border-radius: 2rem;
  border: 1px solid rgba(123, 151, 255, 0.14);
  background:
    radial-gradient(circle at top left, rgba(62, 115, 255, 0.14), transparent 34%),
    linear-gradient(180deg, rgba(8, 15, 31, 0.96) 0%, rgba(4, 9, 20, 0.9) 100%);
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.22);

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 520px) {
    border-radius: 1.5rem;
  }
`;

export const ProjectPreview = styled.img`
  width: 100%;
  height: 100%;
  min-height: 22rem;
  object-fit: cover;
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #02050d;

  @media screen and (max-width: 520px) {
    min-height: 14rem;
    border-radius: 1.15rem;
  }
`;

export const ProjectPreviewEmpty = styled.div`
  width: 100%;
  min-height: 22rem;
  border-radius: 1.5rem;
  border: 1px dashed rgba(123, 151, 255, 0.24);
  background:
    radial-gradient(circle at top, rgba(62, 115, 255, 0.12), transparent 50%),
    rgba(2, 5, 13, 0.92);
  display: grid;
  place-items: center;
  text-align: center;
  padding: 1.2rem;

  span {
    color: var(--text-muted);
    font-size: 0.95rem;
    letter-spacing: 0.04em;
  }

  @media screen and (max-width: 520px) {
    min-height: 14rem;
    border-radius: 1.15rem;
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    margin: 0 0 0.65rem;
    color: var(--text-primary);
    font-family: var(--font-display);
    font-size: clamp(1.9rem, 3vw, 2.6rem);
    line-height: 1.02;
  }

  p {
    margin: 0;
    color: var(--text-secondary);
    line-height: 1.7;
  }
`;

export const ProjectBadge = styled.span`
  display: inline-flex;
  width: fit-content;
  margin-bottom: 1rem;
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  color: var(--text-primary);
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const ProjectDescription = styled.p`
  margin-top: 1rem !important;
`;

export const ProjectStats = styled.div`
  display: grid;
  gap: 0.8rem;
  margin: 1.35rem 0;
`;

export const ProjectStat = styled.div`
  display: grid;
  grid-template-columns: 1.5rem 1fr;
  gap: 0.8rem;
  align-items: center;
  color: var(--text-muted);

  svg {
    color: var(--accent);
  }
`;

export const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const ProjectTechItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.7rem 0.95rem;
  border-radius: 999px;
  border: 1px solid rgba(123, 151, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text-secondary);
  font-size: 0.9rem;

  svg {
    color: var(--accent);
  }

  @media screen and (max-width: 420px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ProjectActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 1.5rem;

  a {
    padding: 0.9rem 1.2rem;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
  }

  a:first-child {
    color: #f6f9ff;
    background: linear-gradient(135deg, #3e73ff 0%, #1f4dd8 100%);

    &:hover {
      background: linear-gradient(135deg, #4d88ff 0%, #2463ff 100%);
      box-shadow: 0 18px 36px rgba(37, 99, 255, 0.34);
    }
  }

  a:last-child {
    color: var(--text-primary);
    border: 1px solid rgba(123, 151, 255, 0.16);
    background: rgba(255, 255, 255, 0.04);
  }

  a:hover {
    transform: translateY(-2px);
  }

  @media screen and (max-width: 420px) {
    a {
      width: 100%;
      text-align: center;
    }
  }
`;
