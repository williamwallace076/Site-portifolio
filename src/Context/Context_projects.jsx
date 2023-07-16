import { createContext, useState } from "react";

export const ProjectsContext = createContext(0);

export const ProjectsProvider = ({children}) => {


const [projectDetails, setProjectDetails] = useState ({
    title: "Nome do Projeto",
    desc: "descrição do projeto, tecnologias e afins !",
    img_1: "",
    img_2: "",
    img_3: "",
    websiteLink: "",
    repositoryLink: ""
})


return(

    <ProjectsContext.Provider value={{
        setProjectDetails,
    }}>

    {children}

    </ProjectsContext.Provider>
)
}