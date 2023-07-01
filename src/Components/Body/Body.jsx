import React from 'react';
import { BodyArea } from './Style_Body';
import Main from "./Main/Main";
import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import ContactMe from './ContactMe/ContactMe';

const Body = () => {
    return ( 
        <BodyArea>
            <Main></Main>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </BodyArea>
     );
}
 
export default Body;