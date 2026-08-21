import {
  ProjectActions,
  ProjectBadge,
  ProjectContent,
  ProjectDescription,
  ProjectFeature,
  ProjectHeader,
  ProjectList,
  ProjectPreview,
  ProjectPreviewEmpty,
  ProjectStat,
  ProjectStats,
  ProjectTech,
  ProjectTechItem,
  ProjectsSection,
  SectionLead,
  SectionTag,
} from "./Style_Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RevealOnScroll from "../../Common/RevealOnScroll";
import { realProjects } from "../../../data/siteContent";

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <ProjectHeader>
        <SectionTag>Nossos projetos</SectionTag>
        <h2>Nossos clientes e projetos.</h2>
        <SectionLead>
          Aqui você pode ver de perto como cada projeto foi construído para fortalecer a presença digital de uma marca.
        </SectionLead>
      </ProjectHeader>

      <ProjectList>
        {realProjects.map((project, index) => (
          <RevealOnScroll
            key={project.title}
            delay={index * 120}
            threshold={0.22}
            rootMargin="0px 0px -14% 0px"
          >
            <ProjectFeature>
              {project.preview ? (
                <ProjectPreview src={project.preview} alt={`Preview do projeto ${project.title}`} />
              ) : (
                <ProjectPreviewEmpty>
                  <span>{project.previewLabel}</span>
                </ProjectPreviewEmpty>
              )}

              <ProjectContent>
                <ProjectBadge>{project.badge}</ProjectBadge>
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
                <ProjectDescription>{project.description}</ProjectDescription>

                <ProjectStats>
                  {project.stats.map((item) => (
                    <ProjectStat key={item.label}>
                      <FontAwesomeIcon icon={item.icon} />
                      <span>{item.label}</span>
                    </ProjectStat>
                  ))}
                </ProjectStats>

                <ProjectTech>
                  {project.technologies.map((item) => (
                    <ProjectTechItem key={item.name}>
                      <FontAwesomeIcon icon={item.icon} />
                      <span>{item.name}</span>
                    </ProjectTechItem>
                  ))}
                </ProjectTech>

                <ProjectActions>
                  <a href={project.primaryAction.url} target="_blank" rel="noreferrer">
                    {project.primaryAction.label}
                  </a>
                  {project.secondaryAction ? (
                    <a href={project.secondaryAction.url} target="_blank" rel="noreferrer">
                      {project.secondaryAction.label}
                    </a>
                  ) : null}
                </ProjectActions>
              </ProjectContent>
            </ProjectFeature>
          </RevealOnScroll>
        ))}
      </ProjectList>
    </ProjectsSection>
  );
};

export default Projects;
