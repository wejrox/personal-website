import React from "react";
import FloatingExternalLinks from "./core/FloatingExternalLinks";
import NavigationBar from "./core/navigation/NavigationBar";
import Footer from "./core/Footer";

class App extends React.Component {
    public render() {
        return (
            <>
                <FloatingExternalLinks/>
                <NavigationBar/>
                <Footer/>
            </>
        );
    }
}

export default App;
