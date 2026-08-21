import "./assets/styles/styles.css"

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import WhatsAppCTA from "./Components/Common/WhatsAppCTA";

const App = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
            <WhatsAppCTA />
        </>
    );
}

export default App;
