import React from "react";
import FloatingExternalLinks from "./core/FloatingExternalLinks";
import NavigationBar from "./core/navigation/NavigationBar";
import "../scss/app.scss";
import Footer from "./core/Footer";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import ProjectBlog from "./pages/ProjectBlog";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
    public render() {
        return (
            <>
                <FloatingExternalLinks/>
                <Router>
                    <NavigationBar/>
                    <div className={"navbar-compensation"}/>
                    <Route exact path={"/"} component={Landing}/>
                    <Route exact path={"/projects/"} component={Projects}/>
                    <Route exact path={"/projects/:name"} component={ProjectBlog}/>
                    <Route exact path={"/contact/"} component={Contact}/>
                </Router>
                <Footer/>
            </>
        );
    }
}

export default App;
