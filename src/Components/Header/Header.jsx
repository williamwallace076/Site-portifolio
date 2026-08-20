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
  return (
    <HeaderShell>
      <HeaderArea>
        <Brand href="#top" aria-label="Ir para o topo da página">
          <strong>WillDev.</strong>
          <BrandIcon aria-hidden="true">
            <FontAwesomeIcon icon={faCode} />
          </BrandIcon>
        </Brand>

        <Nav aria-label="Navegação principal">
          <NavLink href="#about">Sobre</NavLink>
          <NavLink href="#projects">Projetos</NavLink>
          <NavLink href="#contact">Contato</NavLink>
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
