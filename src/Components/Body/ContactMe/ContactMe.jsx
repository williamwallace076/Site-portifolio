import React from 'react';
import "./ContactMe";
import { ContactArea, ContactInfo, ContactInfoArea, ContactList, ContactMeSection, ItemContactInfo, ItemContactList } from './Styled_ContactMe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faMap } from '@fortawesome/free-solid-svg-icons';
import Formulary from './formulary/Formulary';



const ContactMe = () => {
    return ( 
        <ContactMeSection>

            <h2>Contate me !</h2>

            <ContactArea>
                <ContactInfoArea>
                    <h3>Não tenha vergonha !</h3>
                    <p>Sinta-se livre para me contatar, estou sempre disposto a 
                       discutir sobre projetos e ideias criativas ou integrar o seu time.
                    </p>

                    <ContactInfo>
                       <ContactList>
                            <ItemContactList>
                                <FontAwesomeIcon icon={faMap} size="xl" />
                                <ItemContactInfo>
                                    <h4>Endereço</h4>
                                    <p>Rua Boa Esperança, Belém - Pa - Brasil</p>
                                </ItemContactInfo>
                            </ItemContactList>
                            <ItemContactList>
                                <FontAwesomeIcon icon={faEnvelopeOpen} size="xl" />
                                <ItemContactInfo>
                                    <h4>Me Envie Um Email</h4>
                                    <p>Wallacewilliam076@gmail.com</p>
                                </ItemContactInfo>
                            </ItemContactList>

                       </ContactList>
                    </ContactInfo>
                </ContactInfoArea>


                <Formulary></Formulary>
            </ContactArea>

        </ContactMeSection> 
     );
}
 
export default ContactMe;