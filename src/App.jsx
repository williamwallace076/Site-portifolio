import "./assets/styles/styles.css"

import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { ProjectsProvider } from "./Context/Context_projects";

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