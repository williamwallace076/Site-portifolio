import { useEffect, useState } from "react";
import {
  ActionGroup,
  Cursor,
  Eyebrow,
  HeroContent,
  HeroDescription,
  HeroSection,
  Highlight,
  PrimaryButton,
  ProfileImage,
  ProfileOrb,
  ScrollCue,
  SecondaryButton,
  StackChip,
  StackRow,
  TypingIntro,
  VisualColumn,
} from "./Style_Main";
import imgProfile from "../../../assets/imgs/imgProfile.jpeg";
import { coreStack } from "../../../data/siteContent";

const introText = "Olá, me chamo William.";

const Main = () => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const timer = window.setInterval(() => {
      currentIndex += 1;
      setTypedText(introText.slice(0, currentIndex));

      if (currentIndex >= introText.length) {
        window.clearInterval(timer);
      }
    }, 90);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <HeroSection id="top">
      <HeroContent>
        <Eyebrow>Portfólio de William Wallace</Eyebrow>
        <TypingIntro aria-label={introText}>
          <span>{typedText}</span>
          <Cursor aria-hidden="true">|</Cursor>
        </TypingIntro>
        <h1>
          <Highlight>Desenvolvedor Fullstack</Highlight> criando soluções web completas.
        </h1>
        <HeroDescription>
          Se você quer tirar uma ideia do papel, melhorar a presença digital da sua marca ou construir uma solução
          web mais completa, aqui você pode ver como eu penso interface, estrutura e entrega.
        </HeroDescription>

        <ActionGroup>
          <PrimaryButton href="#projects">Ver projetos</PrimaryButton>
          <SecondaryButton
            href="https://github.com/williamwallace076"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </SecondaryButton>
        </ActionGroup>

        <StackRow>
          {coreStack.map((item) => (
            <StackChip
              key={item.label}
              $hoverBackground={item.hoverBackground}
              $hoverBorder={item.hoverBorder}
              $hoverColor={item.hoverColor}
            >
              {item.label}
            </StackChip>
          ))}
        </StackRow>
      </HeroContent>

      <VisualColumn>
        <ProfileOrb>
          <ProfileImage src={imgProfile} alt="Foto de perfil de William Wallace" />
        </ProfileOrb>
      </VisualColumn>

      <ScrollCue href="#about">Explorar</ScrollCue>
    </HeroSection>
  );
};

export default Main;
