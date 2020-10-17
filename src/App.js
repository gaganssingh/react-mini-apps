import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Route exact path="/" component={HomeScreen} />
            </Router>
        </>
    );
};

export default App;
