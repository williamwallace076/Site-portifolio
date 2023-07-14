import "./assets/styles/styles.css"

import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
    return ( 
        <BrowserRouter>
            <Header></Header>
            <Routes/>
            <Footer></Footer>
        </BrowserRouter>
     );
}
 
export default App;