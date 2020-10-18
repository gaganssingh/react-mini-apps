import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import Header from "./components/Header/Header";
import Pomodoro from "./projects/Pomodoro/Pomodoro";

import "./App.css";

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route path="/pomodoro" component={Pomodoro} />
                </Switch>
            </Router>
        </>
    );
};

export default App;
