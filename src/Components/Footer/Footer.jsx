import { FooterArea, FooterMeta, FooterParagraph, FooterSosialIcons, FooterLink } from "./Style_Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <FooterArea>
      <FooterMeta>
        <strong>WillDev.</strong>
        <span>Se algum projeto aqui fez sentido para você, minha próxima entrega pode começar com a sua ideia.</span>
      </FooterMeta>

      <FooterSosialIcons>
        <FooterLink
          href="https://www.linkedin.com/in/william-wallace-4b7348237/"
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </FooterLink>
        <FooterLink
          href="https://github.com/williamwallace076"
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir GitHub"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </FooterLink>
      </FooterSosialIcons>

      <FooterParagraph>{currentYear} WillDev. Todos os direitos reservados.</FooterParagraph>
    </FooterArea>
  );
};

export default Footer;
