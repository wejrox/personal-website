import React from "react";
import logo from "../resources/images/logo.svg";
import "../scss/App.scss";
import Header from "./core/Header";
import NavigationBar from "./core/navigation/NavigationBar";
import MainSection from "./core/MainSection";
import Footer from "./core/Footer";
import Container from "reactstrap/lib/Container";

class App extends React.Component {
    public render() {
        return (
            <Container>
                <Header/>
                <NavigationBar/>
                <MainSection/>
                <Footer/>

                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <p>
                            Edit <code>src/App.tsx</code> and save to reload.
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </header>
                </div>
            </Container>
        );
    }
}

export default App;
