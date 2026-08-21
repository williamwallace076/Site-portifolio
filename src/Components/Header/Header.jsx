import { useRef } from "react";
import {
  Brand,
  BrandIcon,
  HeaderArea,
  HeaderShell,
  Nav,
  NavLink,
  SocialIcons,
  SocialLink,
} from "./Style_Header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const animationFrameRef = useRef(null);

  const handleScrollToSection = (event, targetId) => {
    event.preventDefault();

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    if (animationFrameRef.current) {
      window.cancelAnimationFrame(animationFrameRef.current);
    }

    const headerOffset = 112;
    const startPosition = window.scrollY;
    const targetPosition = Math.max(target.getBoundingClientRect().top + window.scrollY - headerOffset, 0);
    const distance = targetPosition - startPosition;
    const duration = 700;
    const startTime = performance.now();

    const easeInOutCubic = (progress) => {
      return progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    };

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * easedProgress);

      if (progress < 1) {
        animationFrameRef.current = window.requestAnimationFrame(animateScroll);
        return;
      }

      window.history.replaceState(null, "", targetId);
      animationFrameRef.current = null;
    };

    animationFrameRef.current = window.requestAnimationFrame(animateScroll);
  };

  return (
    <HeaderShell>
      <HeaderArea>
        <Brand href="#top" aria-label="Ir para o topo da página" onClick={(event) => handleScrollToSection(event, "#top")}>
          <strong>WillDev.</strong>
          <BrandIcon aria-hidden="true">
            <FontAwesomeIcon icon={faCode} />
          </BrandIcon>
        </Brand>

        <Nav aria-label="Navegação principal">
          <NavLink href="#about" onClick={(event) => handleScrollToSection(event, "#about")}>
            Sobre
          </NavLink>
          <NavLink href="#projects" onClick={(event) => handleScrollToSection(event, "#projects")}>
            Projetos
          </NavLink>
          <NavLink href="#contact" onClick={(event) => handleScrollToSection(event, "#contact")}>
            Contato
          </NavLink>
        </Nav>

        <SocialIcons>
          <SocialLink
            href="https://www.linkedin.com/in/william-wallace-4b7348237/"
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </SocialLink>
          <SocialLink
            href="https://github.com/williamwallace076"
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </SocialLink>
        </SocialIcons>
      </HeaderArea>
    </HeaderShell>
  );
};

export default Header;
