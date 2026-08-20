import {
  ContactArea,
  ContactInfo,
  ContactInfoArea,
  ContactInfoAreaHeader,
  ContactList,
  ContactMeSection,
  ItemContactInfo,
  ItemContactList,
  SectionTag,
} from "./Styled_ContactMe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faMap, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Formulary from "./formulary/Formulary";

const ContactMe = () => {
  return (
    <ContactMeSection id="contact">
      <ContactArea>
        <ContactInfoArea>
          <ContactInfoAreaHeader>
            <SectionTag>Contato</SectionTag>
            <h2>Se você tem um projeto em mente, pode falar comigo por aqui.</h2>
            <p>
              Seja para criar uma landing page, evoluir um site ou estruturar uma solução web mais completa, este é o
              espaço certo para começarmos a conversa.
            </p>
          </ContactInfoAreaHeader>

          <ContactInfo>
            <ContactList>
              <ItemContactList>
                <FontAwesomeIcon icon={faMap} size="lg" />
                <ItemContactInfo>
                  <h3>Base</h3>
                  <p>Belém, Pará, Brasil</p>
                </ItemContactInfo>
              </ItemContactList>

              <ItemContactList>
                <FontAwesomeIcon icon={faEnvelopeOpen} size="lg" />
                <ItemContactInfo>
                  <h3>E-mail</h3>
                  <p>wallacewilliam076@gmail.com</p>
                </ItemContactInfo>
              </ItemContactList>

              <ItemContactList>
                <FontAwesomeIcon icon={faPaperPlane} size="lg" />
                <ItemContactInfo>
                  <h3>Resposta</h3>
                  <p>Você pode me enviar uma mensagem pelo formulário e seguir a conversa direto por e-mail.</p>
                </ItemContactInfo>
              </ItemContactList>
            </ContactList>
          </ContactInfo>
        </ContactInfoArea>

        <Formulary />
      </ContactArea>
    </ContactMeSection>
  );
};

export default ContactMe;
