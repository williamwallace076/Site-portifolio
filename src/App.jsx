import "./assets/styles/styles.css"

import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

import Footer from "./Components/Footer/Footer";

import { ProjectsProvider } from "./Context/Context_projects";
import Header from "./Components/Header/Header";

const App = () => {
    return ( 
        <ProjectsProvider>
            <BrowserRouter>
                <Header></Header>
                <Routes/>
                <Footer></Footer>
            </BrowserRouter>
        </ProjectsProvider>
     );
}
 
export default App;