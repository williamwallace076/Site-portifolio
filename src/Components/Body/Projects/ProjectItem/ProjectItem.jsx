import React from 'react';
import {AreaItemInfo, ButtonItem, ImgItem, Item, SeeMoreArea, TecnoItemArea} from "./Style_ProjectItem"

const ProjectItem = ({classname, title, subtitle, link, thumbnail}) => {

    return ( 
        <Item className={classname}>
                
            <ImgItem src={thumbnail} ></ImgItem>

            <AreaItemInfo>
                <h3>{title}</h3>
                <p>{subtitle}</p>
                <SeeMoreArea>
                    <TecnoItemArea>
                        <span>tec</span>
                        <span>tec</span>
                        <span>tec</span>
                        <span>tec</span>
                    </TecnoItemArea>
                    <a href={link}><ButtonItem >Ver Site</ButtonItem></a>
                    <ButtonItem >Ver Mais</ButtonItem>
                </SeeMoreArea>
            </AreaItemInfo>
        </Item>
     );
}
 
export default ProjectItem;