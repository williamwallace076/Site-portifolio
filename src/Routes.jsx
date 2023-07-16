import React, { useContext } from 'react';

import {Route, Routes } from "react-router"
import AboutProject from './Components/AboutProject/AboutProject';
import Home from './Components/Home/Home';
import { ProjectsContext } from './Context/Context_projects';

export default props => {


    const {projectDetails} = useContext(ProjectsContext)

    return (

        <Routes>
            <Route exact path="/" element={<Home></Home>}/>
            <Route path="/AboutProject" element={<AboutProject></AboutProject>} />
        </Routes>

    )
}