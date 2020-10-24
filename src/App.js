import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Header from "./components/Header/Header";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import LoginPage from "./components/LoginPage/LoginPage";
import "./App.css";

// Lazy-Loaded Components
const Pomodoro = React.lazy(() => import("./projects/Pomodoro/Pomodoro"));
const Markdown = React.lazy(() => import("./projects/Markdown/Markdown"));
const MiniZelda = React.lazy(() => import("./projects/MiniZelda/MiniZelda"));
const Infinitely = React.lazy(() => import("./projects/Infinitely/Infinitely"));
const QuizMe = React.lazy(() => import("./projects/QuizMe/QuizMe"));
const MemoryMatcher = React.lazy(() =>
    import("./projects/MemoryMatcher/MemoryMatcher")
);
const RockPaperScissors = React.lazy(() =>
    import("./projects/RockPaperScissors/RockPaperScissors")
);

const App = () => {
    const { isAuthenticated } = useAuth0();

    const protectedRoutes = (
        <Switch>
            <React.Suspense fallback={<h2>Loading...</h2>}>
                <Route exact path="/" component={HomeScreen} />
                <Route path="/pomodoro" component={Pomodoro} />
                <Route path="/markdown" component={Markdown} />
                <Route path="/minizelda" component={MiniZelda} />
                <Route path="/infinitely" component={Infinitely} />
                <Route path="/quiz" component={QuizMe} />
                <Route path="/memory" component={MemoryMatcher} />
                <Route
                    path="/rockpaperscissors"
                    component={RockPaperScissors}
                />
            </React.Suspense>
        </Switch>
    );

    const unprotectedRoutes = (
        <Switch>
            <React.Suspense fallback={<h2>Loading...</h2>}>
                <Route exact path="/" component={LoginPage} />
            </React.Suspense>
        </Switch>
    );

    return (
        <Router>
            <Header />
            {isAuthenticated ? protectedRoutes : unprotectedRoutes}
        </Router>
    );
};

export default App;
