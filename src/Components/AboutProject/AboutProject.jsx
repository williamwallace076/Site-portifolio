import React, { useContext, useEffect, useState } from 'react';
import { AreaButtonsProject, AreaDeskPhoneResponsive, AreaDesktopResponsive, AreaInfoProject, AreaPhoneResponsive, AreaProejto, AreaProjectResponsive, ImgConteinerDeskPhone, ImgConteinerDesktop, ImgConteinerPhone, ImgDeskPhone, ImgDesktop, ImgPhone } from './Style_AboutProject';

import desktopForm from "./../../assets/imgs/desktop.png";
import midForm from "./../../assets/imgs/mid.png";
import smallForm from "./../../assets/imgs/small.png";

import { useNavigate } from "react-router-dom";

import { ProjectsContext } from '../../Context/Context_projects';


const AboutProject = () => {



    const { projectDetails } = useContext(ProjectsContext);

    const navigate = useNavigate();

    const [render, setRender] = useState(true)

    const imgDesktop = projectDetails.img_desktop;
    const imgMid = projectDetails.img_mid;
    const imgSmall = projectDetails.img_small;

    useEffect(() => {

        if (projectDetails.id === "") {
            setRender(false)
            console.log(projectDetails.id);
            navigate("/");
        }

    }, [])

    return render ? (


        <AreaProejto>

            <AreaInfoProject>

                <div>
                    <h2>{projectDetails.title}</h2>
                    <p> {projectDetails.desc}</p>
                </div>

                <AreaProjectResponsive >

                    <AreaDeskPhoneResponsive>
                        <ImgConteinerDeskPhone src={midForm} alt='imagem do projeto'></ImgConteinerDeskPhone>
                        <ImgDeskPhone src={imgMid} alt='imagem do projeto no tablet' ></ImgDeskPhone>
                    </AreaDeskPhoneResponsive>


                    <AreaPhoneResponsive>
                        <ImgConteinerPhone src={smallForm} alt='imagem do projeto'></ImgConteinerPhone>
                        <ImgPhone src={imgSmall} alt='imagem do projeto no telephone'  ></ImgPhone>
                    </AreaPhoneResponsive>

                    <AreaDesktopResponsive>
                        <ImgConteinerDesktop src={desktopForm} alt='imagem do projeto'></ImgConteinerDesktop>
                        <ImgDesktop src={imgDesktop} alt='imagem do projeto no desktop'></ImgDesktop>
                    </AreaDesktopResponsive>
                </AreaProjectResponsive>

            </AreaInfoProject>


            <AreaButtonsProject>
                <a href={projectDetails.websiteLink}><button>Abrir Projeto</button></a>
                <a href={projectDetails.repositoryLink}><button>Repositorio</button></a>
            </AreaButtonsProject>

        </AreaProejto>

    ) : false;
}

export default AboutProject;