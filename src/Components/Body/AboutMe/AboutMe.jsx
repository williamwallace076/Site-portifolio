import {
  AboutGrid,
  AboutMeSection,
  AboutText,
  HighlightCard,
  HighlightList,
  SectionLead,
  SectionTag,
  Timeline,
  TimelineCard,
  TimelineTrack,
  TimelineViewport,
  TimelineYear,
} from "./Style_AboutMe";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { aboutHighlights, careerTimeline } from "../../../data/siteContent";

const AboutMe = () => {
  const timelineLoop = [...careerTimeline, ...careerTimeline];

  return (
    <AboutMeSection id="about">
      <AboutGrid>
        <AboutText>
          <SectionTag>Sobre mim</SectionTag>
          <h2>Hoje eu desenvolvo soluções web com uma base fullstack, unindo interface, estrutura e integração em uma mesma entrega.</h2>
          <SectionLead>
            Minha trajetória começou com lógica de programação ainda no ensino médio e foi evoluindo para o
            desenvolvimento web, projetos pessoais, formação técnica e graduação em tecnologia. Com o tempo, fui
            ampliando essa atuação para trabalhar não só na interface, mas também na estrutura e nas integrações que
            fazem uma aplicação funcionar de verdade.
          </SectionLead>
        </AboutText>

        <HighlightList>
          {aboutHighlights.map((item) => (
            <HighlightCard key={item.title}>
              <FontAwesomeIcon icon={item.icon} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </HighlightCard>
          ))}
        </HighlightList>
      </AboutGrid>

      <TimelineViewport>
        <Timeline>
          <TimelineTrack>
            {timelineLoop.map((item, index) => (
              <TimelineCard key={`${item.year}-${index}`}>
                <TimelineYear>{item.year}</TimelineYear>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </TimelineCard>
            ))}
          </TimelineTrack>
        </Timeline>
      </TimelineViewport>
    </AboutMeSection>
  );
};

export default AboutMe;
