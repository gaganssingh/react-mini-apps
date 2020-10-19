import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import Loading from "./components/Loading/Loading";

// Lazy-Loaded Components
const Pomodoro = React.lazy(() => import("./projects/Pomodoro/Pomodoro"));
const Markdown = React.lazy(() => import("./projects/Markdown/Markdown"));
const RockPaperScissors = React.lazy(() =>
    import("./projects/RockPaperScissors/RockPaperScissors")
);
const MiniZelda = React.lazy(() => import("./projects/MiniZelda/MiniZelda"));

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    {/* <React.Suspense fallback={Loading}> */}
                    <React.Suspense fallback={<h2>Loading...</h2>}>
                        <Route exact path="/" component={HomeScreen} />
                        <Route path="/pomodoro" component={Pomodoro} />
                        <Route path="/markdown" component={Markdown} />
                        <Route path="/minizelda" component={MiniZelda} />
                        <Route
                            path="/rockpaperscissors"
                            component={RockPaperScissors}
                        />
                    </React.Suspense>
                </Switch>
            </Router>
        </>
    );
};

export default App;
