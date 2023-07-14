import React from 'react';
import {HeaderArea, IconsLink, LogoContainer, LogoHeader, SocialIcons} from "./Style_Header";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faCode } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
    return ( 
        <header>
            <HeaderArea>
                <LogoContainer>
                    <LogoHeader>WillDev.</LogoHeader>
                    <FontAwesomeIcon icon={faCode} style={{color: "#d65151",}} />
                </LogoContainer>
                <SocialIcons>
                    <IconsLink href="https://www.linkedin.com/in/william-wallace-4b7348237/"><FontAwesomeIcon icon={faLinkedin} size="xl" /></IconsLink>
                    <IconsLink href="https://github.com/williamwallace076"><FontAwesomeIcon icon={faGithub}  size="xl"/></IconsLink>
                </SocialIcons>
            </HeaderArea>
        </header>
      );
}
 
export default Header;