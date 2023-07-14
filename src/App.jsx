import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

import "./assets/styles/styles.css"

import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

const App = () => {
    return ( 
        <BrowserRouter>
         <Routes/>
        </BrowserRouter>
     );
}
 
export default App;