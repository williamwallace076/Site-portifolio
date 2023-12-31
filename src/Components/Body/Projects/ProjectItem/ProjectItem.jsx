import React, { useContext } from 'react';
import {AreaItemInfo, ButtonItem, ImgItem, Item, SeeMoreArea, TecnoItemArea} from "./Style_ProjectItem";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { ProjectsContext } from '../../../../Context/Context_projects';

const ProjectItem = ({classname, classTecno, title, subtitle, link, thumbnail, tec1, tec2, tec3, tec4, details}) => {

    const {setProjectDetails } = useContext (ProjectsContext)

    const updateDetails = ()=>{

        const newDetails = details

        setProjectDetails(newDetails)

    }

    return ( 
        <Item className={classname}>
                
            <ImgItem src={thumbnail} ></ImgItem>

            <AreaItemInfo>
                <h3>{title}</h3>
                <p>{subtitle}</p>
                <SeeMoreArea className='see-more-area'>
                    <TecnoItemArea className={classTecno}>
                        <FontAwesomeIcon className='icon-tec' icon={tec1} size='2xl' style={{color:"#3677e7",}} />
                        <FontAwesomeIcon className='icon-tec' icon={tec2} size='2xl' style={{color:"#3677e7",}} />
                        <FontAwesomeIcon className='icon-tec' icon={tec3} size='2xl' style={{color:"#3677e7",}} />
                        <FontAwesomeIcon className='icon-tec' icon={tec4} size='2xl' style={{color:"#3677e7",}} />
                    </TecnoItemArea>
                    <a href={link}><ButtonItem >Ver Site</ButtonItem></a>
                    <Link to={'./AboutProject'} className='see-more-link'><ButtonItem onClick={updateDetails} className='seeMore'>Ver Mais</ButtonItem></Link>
                </SeeMoreArea>
            </AreaItemInfo>
        </Item>
     );
}
 
export default ProjectItem;