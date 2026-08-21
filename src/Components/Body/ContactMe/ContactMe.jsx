import {
  ContactArea,
  ContactInfo,
  ContactInfoArea,
  ContactInfoAreaHeader,
  ContactList,
  ContactMeSection,
  ContactTextLink,
  ItemContactInfo,
  ItemContactList,
  SectionTag,
} from "./Styled_ContactMe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faMap, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import RevealOnScroll from "../../Common/RevealOnScroll";
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
              <RevealOnScroll threshold={0.22} rootMargin="0px 0px -14% 0px">
                <ItemContactList>
                  <FontAwesomeIcon icon={faMap} size="lg" />
                  <ItemContactInfo>
                    <h3>Base</h3>
                    <p>Belém, Pará, Brasil</p>
                  </ItemContactInfo>
                </ItemContactList>
              </RevealOnScroll>

              <RevealOnScroll delay={90} threshold={0.22} rootMargin="0px 0px -14% 0px">
                <ItemContactList>
                  <FontAwesomeIcon icon={faEnvelopeOpen} size="lg" />
                  <ItemContactInfo>
                    <h3>E-mail</h3>
                    <p>
                      <ContactTextLink href="mailto:wallacewilliam076@gmail.com">
                        wallacewilliam076@gmail.com
                      </ContactTextLink>
                    </p>
                  </ItemContactInfo>
                </ItemContactList>
              </RevealOnScroll>

              <RevealOnScroll delay={180} threshold={0.22} rootMargin="0px 0px -14% 0px">
                <ItemContactList>
                  <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                  <ItemContactInfo>
                    <h3>WhatsApp</h3>
                    <p>
                      <ContactTextLink href="https://wa.me/5591993530773" target="_blank" rel="noreferrer">
                        +55 91 99353-0773
                      </ContactTextLink>
                    </p>
                  </ItemContactInfo>
                </ItemContactList>
              </RevealOnScroll>

              <RevealOnScroll delay={270} threshold={0.22} rootMargin="0px 0px -14% 0px">
                <ItemContactList>
                  <FontAwesomeIcon icon={faPaperPlane} size="lg" />
                  <ItemContactInfo>
                    <h3>Resposta</h3>
                    <p>Você pode me enviar uma mensagem pelo formulário e seguir a conversa direto por e-mail.</p>
                  </ItemContactInfo>
                </ItemContactList>
              </RevealOnScroll>
            </ContactList>
          </ContactInfo>
        </ContactInfoArea>

        <RevealOnScroll delay={140} threshold={0.22} rootMargin="0px 0px -14% 0px">
          <Formulary />
        </RevealOnScroll>
      </ContactArea>
    </ContactMeSection>
  );
};

export default ContactMe;
