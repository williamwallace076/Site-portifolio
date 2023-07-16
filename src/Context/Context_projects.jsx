import { createContext, useState } from "react";

import imgDesktop from "../assets/imgs/netflix.png";
import imgMid from "../assets/imgs/netflix-mid.png";
import imgSmall from "../assets/imgs/netflix-small.png";

export const ProjectsContext = createContext(0);

export const ProjectsProvider = ({children}) => {


const [projectDetails, setProjectDetails] = useState ({
    title: "Nome do Projeto",
    desc: "descrição do projeto, tecnologias e afins !",
    img_desktop: imgDesktop,
    img_mid: imgMid,
    img_small: imgSmall,
    websiteLink: "https://netflix-clone-swart-sigma.vercel.app/",
    repositoryLink: "https://github.com/williamwallace076/Netflix-clone"
})


return(

    <ProjectsContext.Provider value={{
        projectDetails,
        setProjectDetails,
    }}>

    {children}

    </ProjectsContext.Provider>
)
}