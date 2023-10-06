import React from 'react';
import {FooterArea, FooterParagraph, FooterSosialIcons } from './Style_Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return ( 
        <FooterArea>
           <div>
                <FooterSosialIcons>
                        <FontAwesomeIcon className='icon-footer' icon={faLinkedin} size="xl" />
                        <FontAwesomeIcon className='icon-footer'icon={faGithub}  size="xl"/>
                </FooterSosialIcons>
           </div>
           <div>
                < FooterParagraph>@2023 WillDev. All rights reserved.</ FooterParagraph>
           </div>
        </FooterArea>
     );
}
 
export default Footer;