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
import RevealOnScroll from "../../Common/RevealOnScroll";
import { aboutHighlights, careerTimeline } from "../../../data/siteContent";

const AboutMe = () => {
  const timelineLoop = [...careerTimeline, ...careerTimeline];

  return (
    <AboutMeSection id="about">
      <AboutGrid>
        <AboutText>
          <SectionTag>Sobre mim</SectionTag>
          <h2>
            Hoje eu desenvolvo soluções web com uma base fullstack, unindo interface, estrutura e integração em uma
            mesma entrega.
          </h2>
          <SectionLead>
            Minha trajetória começou com lógica de programação ainda no ensino médio e foi evoluindo para o
            desenvolvimento web, projetos pessoais, formação técnica e graduação em tecnologia. Com o tempo, fui
            ampliando essa atuação para trabalhar não só na interface, mas também na estrutura e nas integrações que
            fazem uma aplicação funcionar de verdade.
          </SectionLead>
        </AboutText>

        <HighlightList>
          {aboutHighlights.map((item, index) => (
            <RevealOnScroll
              key={item.title}
              delay={index * 110}
              threshold={0.22}
              rootMargin="0px 0px -14% 0px"
            >
              <HighlightCard>
                <FontAwesomeIcon icon={item.icon} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </HighlightCard>
            </RevealOnScroll>
          ))}
        </HighlightList>
      </AboutGrid>

      <TimelineViewport>
        <Timeline>
          <TimelineTrack>
            {timelineLoop.map((item, index) => (
              <RevealOnScroll
                key={`${item.year}-${index}`}
                delay={(index % careerTimeline.length) * 90}
                threshold={0.22}
                rootMargin="0px 0px -14% 0px"
              >
                <TimelineCard>
                  <TimelineYear>{item.year}</TimelineYear>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </TimelineCard>
              </RevealOnScroll>
            ))}
          </TimelineTrack>
        </Timeline>
      </TimelineViewport>
    </AboutMeSection>
  );
};

export default AboutMe;
