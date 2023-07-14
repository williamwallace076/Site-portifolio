import React from 'react';

import { Route, Routes } from "react-router"
import AboutProject from './Components/AboutProject/AboutProject';
import Home from './Components/Home/Home';

export default props => {

    return (

        <Routes>
            <Route exact path="/" element={<Home></Home>}/>
            <Route path="/AboutProject" element={<AboutProject></AboutProject>}/>
        </Routes>

    )
}